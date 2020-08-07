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