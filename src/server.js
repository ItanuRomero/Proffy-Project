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

const express = require('express')
const server = express()

server.use(express.static("public"))

.get("/", (req, resp) => {
    return resp.sendFile(__dirname + "/views/index.html")
})
.get("/study", (req, resp) => {
    return resp.sendFile(__dirname + "/views/study.html")
})
.get("/give-classes", (req, resp) => {
    return resp.sendFile(__dirname + "/views/give-classes.html")
})
.listen(5500)