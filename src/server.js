//servidor
const express = require('express')
const server = express()
//importando as paginas
const {
    pageLanding,
    pageStudy,
    pageGiveClasses
} = require('./pages')
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