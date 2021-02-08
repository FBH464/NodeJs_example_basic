const http = require('http')
const port = process.env.PORT || 1337
const url = require('url')

const querystring = require('querystring')

const server = http.createServer(function (req, res) {
    if (req.url === '/') return respondText(req, res)
    if (req.url === '/json') return respondJson(req, res)
    if (req.url.match('/echo/')) return respondEcho(req, res)
    respondNotFound(req, res)
})

function respondEcho(req, res) {
    const { input = '' } = querystring.parse(
        req.url
            .split('?')
            .slice(1)
            .join('')
    )
    res.setHeader('Content-Type', 'application/json')
    res.end(
        JSON.stringify({
            normal: input,
            shouty: input.toUpperCase(),
            characterCount: input.length,
            backwards: input
                .split('')
                .reverse()
                .join('')
        })
    )
}

server.listen(port)
console.log(`Server listening on port ${port}`)
