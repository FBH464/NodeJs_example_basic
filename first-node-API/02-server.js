const http = require('http')
const port = process.env.PORT || 1337

const server = http.createServer(function (req, res) {
    //llmamos una respuesta JSON con un encabezado en formato Content-Type, 
    // usando el método res.setHeader
    res.setHeader('Content-Type', 'application/json')
    //enviamos datos y cerramos la conexión pero ahora un objeto JSON convertido en cadena 
    res.end(JSON.stringify({ text: 'Hi, everyone!', numbers: [1, 2, 3] }))
})

server.listen(port)

console.log(`Server listening on port ${port}`)