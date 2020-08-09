const Database = require('./db')
const createProffy = require('./createProffy')

Database.then(async (db) => {
    //inserir dados
    proffyValue = {
        name: "Itanu Romero",
        avatar: "https://avatars3.githubusercontent.com/u/66224956?s=460&u=a76ecf5c6b6fad99b3dd41213ac1b5b881231f1e&v=4",
        whatsapp: "998998889",
        bio:"Entusiasta do mundo da tecnologia. Aprendendo a gostar de resolver problemas, e ensinando para aprender."
    }

    classValue = {
        subject: 1, 
        cost: "50",
        //o proffy_id vai vir do banco de dados.
    }

    classScheduleValues = [
        //class_id vira pelo bando de dados apos cadastrarmos a aula.
        {
        weekday: 1, 
        time_from: 720, 
        time_to: 1220
        },
        {
            weekday: 0, 
            time_from: 520, 
            time_to: 1220
            }
    ]

    //await createProffy(db, {proffyValue, classValue, classScheduleValues})

    //consultar os dados inseridos

    //todos os proffys
    const selectedProffys = await db.all("SELECT * FROM proffys")

    //consultar as classes de um determinado professor
    //e trazer junto os dados dele
    const selectClassesAndProffys = await db.all(`
        SELECT classes.*, proffys.*
        FROM proffys
        JOIN classes ON (classes.proffy_id = proffys.id)
        WHERE classes.proffy_id = 1;
    `)
    //console.log(selectClassesAndProffys)

    //o horario que a pessoa trabalha e das 8h ate as 18h por exemplo.
    //o horario de time_from precisa ser menor ou igual ao horario solicitado
    //o time_to precisa ser acima 

    const selectClassesSchedules = await db.all(`
        SELECT class_schedule.*
        FROM class_schedule
        WHERE class_schedule.class_id = "1"
        AND class_schedule.weekday = "0"
        AND class_schedule.time_from <= "420"
        AND class_schedule.time_to > "420"
    `)
    //console.log(selectClassesSchedules)

})