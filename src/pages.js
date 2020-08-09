const Database = require('./database/db')

const { subjects, weekdays, getSubject, convertHoursInMinutes } = require('./utils/format')

function pageLanding(req, resp) {
    return resp.render("index.html")
}

async function pageStudy(req, resp) {
    const filters = req.query

    if (!filters.subject || !filters.weekday || !filters.time) {
        return resp.render("study.html", { filters, subjects, weekdays })
    }

    //converter horas em minutos
    const timeToMinutes = convertHoursInMinutes(filters.time)

    const query = `
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE EXISTS (
            SELECT class_schedule.*
            FROM class_schedule
            WHERE class_schedule.class_id = classes.id
            AND class_schedule.weekday = ${filters.weekday}
            AND class_schedule.time_from <= ${timeToMinutes}
            AND class_schedule.time_to > ${timeToMinutes}
        )
        AND classes.subject = "${filters.subject}"
    `

    //caso haja erro na hora da consulta do banco de dados.
    try {
        const db = await Database
        const proffys = await db.all(query)

        return resp.render('study.html', { proffys, subjects, filters, weekdays })
    } catch (error) {
        console.log(error)
    }
    
}

function pageGiveClasses(req, resp) {
    const data = req.query

    const isNotEmpty = Object.keys(data).length > 0
    //se tiver dados
    if (isNotEmpty) {

        //mostra a materia em vez do numero dela
        data.subject = getSubject(data.subject)

        //adcionar a colecao de proffys
        proffys.push(data)

        return resp.redirect("/study")
    }
    
    //se nao, nao adicionar
    return resp.render("give-classes.html", {subjects, weekdays})
}

module.exports = {
    pageLanding,
    pageStudy,
    pageGiveClasses
}