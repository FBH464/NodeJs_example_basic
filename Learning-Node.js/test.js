var http = require('http');
var fs = require('fs');

// write out numbers
function writeNumbers(res) {
    var counter = 0;
    // increment global, write to client
    for (var i = 0; i < 100; i++) {
        counter++;
        res.write(counter.toString() + '\n');
    }
}

//The url we want, plus the path and options we need
var options = {
    host: 'localhost',
    port: 8124,
    path: '/?file=secondary',
    method: 'GET'
};
var processPublicTimeline = function (response) {
    // finished? ok, write the data to a file
    console.log('finished request');
};
for (var i = 0; i < 2000; i++) {
    // make the request, and then end it, to close the connection
    http.request(options, processPublicTimeline).end();
}

// create http server
http.createServer(function (req, res) {
    var query = require('url').parse(req.url).query;
    var app = require('querystring').parse(query).file + ".txt";
    // content header
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    // write out numbers
    writeNumbers(res);

    // timer to open file and read contents
    setTimeout(function () {
        console.log('opening ' + app);
        // open and read in file contents
        fs.readFile(app, 'utf8', function (err, data) {
            if (err)
                res.write('Could not find or open file for reading\n');
            else {
                res.write(data);
            }
            // response is done
            res.end();
        });
    }, 2000);
}).listen(8124);
console.log('Server running at 8124');