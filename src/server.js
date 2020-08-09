//dados
const proffys = [
    {
        name: "Itanu Romero",
        avatar: "https://avatars3.githubusercontent.com/u/66224956?s=460&u=a76ecf5c6b6fad99b3dd41213ac1b5b881231f1e&v=4",
        whatsapp: "998998889",
        bio:"Entusiasta do mundo da tecnologia. Aprendendo a gostar de resolver problemas, e ensinando para aprender.", 
        subject: "Tecnologia", 
        cost: "50", 
        weekday: [0], 
        time_from: [720], 
        time_to: [1220]
    }
]

const subjects = [
    "Artes",
    "Biologia",
    "Ciências",
    "Educação física",
    "Física",
    "Geografia",
    "História",
    "Matemática",
    "Português",
    "Química",
]

const weekdays = [
    "Domingo",
    "Segunda-feira",
    "Terça-feira",
    "Quarta-feira",
    "Quinta-feira",
    "Sexta-feira",
    "Sábado",
]

//funcionalidades
function pageLanding(req, resp) {
    return resp.render("index.html")
}

function pageStudy(req, resp) {
    const filters = req.query
    return resp.render("study.html", { proffys, filters, subjects, weekdays })
}

function pageGiveClasses(req, resp) {
    const dados = req.query
    //adcionar a colecao de proffys

    
    return resp.render("give-classes.html", {subjects, weekdays})
}
//servidor
const express = require('express')
const server = express()
//configurando nunjucks

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCashe: true,
})
//inicio e configuracao do servidor
server
//configurando arquivos estaticos
.use(express.static("public"))
//rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
//start do servidor
.listen(5500)