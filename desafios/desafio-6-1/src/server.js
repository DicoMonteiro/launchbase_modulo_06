const express = require('express')
const nunjucks = require('nunjucks')

const server = express()

server.use(express.urlencoded({ extended: true }))
server.use(express.static('public'))

server.set("view engine", "njk")

nunjucks.configure("src/app/views", {
    express:server,
    autoescape: false,
    noCache: true
})

server.get("/", function(req, res) {
    return res.render("app")
})

// Usando o package 'nodemon' para manter o servidor em execução e atualizar automaticamente
server.listen(5000, function () {
    console.log("server is running.")
})