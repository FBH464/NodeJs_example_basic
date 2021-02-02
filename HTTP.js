//importar un modulo nativo de node 
require('http')
//crear un servidor web http y definir el texto que se mostrará
//  en el navegador al llegar la petición
.createServer((req, res) => res.end('hello world!'))
//definer el puerto en el que se escucharán las peticiones
.listen(8080)
