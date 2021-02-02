const http = require('http')

//Aquí elegimos el puerto que nuestro servidor web debe usar para atender las solicitudes.
// Almacenamos el número de puerto en nuestra variable de puerto.
const port = process.env.PORT || 1337

//Ahora llegamos al meollo del archivo. 
// Usamos http.createServer() para crear un objeto de servidor HTTP y asignarlo 
// a la variable servidor.
const server = http.createServer(function (req, res) {
    res.end('Hi, everyone!')
})

//LLamamos al método listen() en nuestro objeto de servidor para que
// escuche las solicitudes en el puerto especificado.
server.listen(port)

//Imprimimos un mensaje en la consola para saber que el servidor está funcionando con el puerto. 
console.log(`Server listening on port ${port}`)