//servidor
const express = require('express')
const server = express()
//importando as paginas
const {
    pageLanding,
    pageStudy,
    pageGiveClasses,
    saveClasses
} = require('./pages')
//configurando nunjucks

const nunjucks = require('nunjucks')
nunjucks.configure('src/views', {
    express: server,
    noCashe: true,
})
//inicio e configuracao do servidor
server
//receber os dados do body
.use(express.urlencoded({ extended: true }))
//configurando arquivos estaticos
.use(express.static("public"))
//rotas da aplicacao
.get("/", pageLanding)
.get("/study", pageStudy)
.get("/give-classes", pageGiveClasses)
.post("/save-classes", saveClasses)
//start do servidor
.listen(5500)