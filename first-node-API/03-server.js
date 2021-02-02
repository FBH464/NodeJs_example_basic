const http = require('http')
const port = process.env.PORT || 1337

//creamos ahora funciones para mostrar la respuesta en función de la escucha de cada acción o solicitud  
function respondText(req, res) {
    res.setHeader('Content-Type', 'text/plain')
    res.end('Hi')
}
function respondJson(req, res) {
    res.setHeader('Content-Type', 'application/json')
    res.end(JSON.stringify({ text: 'Hi', numbers: [1, 2, 3] }))
}

//El error código de estado 404, indica que la comunicación con el servidor fue exitosa, 
// pero que el servidor  no puede encontrar los datos solicitados.
function respondNotFound(req, res) {
    res.writeHead(404, { 'Content-Type': 'text/plain' })
    res.end('Not Found')
}

//ahora llamamos a cada solicitud de respuesta dependiendo de la solicitud de escucha, 
// usando rutas para cada url.
const server = http.createServer(function (req, res) {
if (req.url === '/') return respondText(req, res)
if (req.url === '/json') return respondJson(req, res)
respondNotFound(req, res)
})

server.listen(port)
console.log(`Server listening on port ${port}`)
