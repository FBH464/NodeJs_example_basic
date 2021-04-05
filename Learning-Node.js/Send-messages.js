var dgram = require('dgram');
var client = dgram.createSocket("udp4");
// prepare for input from terminal
process.stdin.resume();
process.stdin.on('data', function (data) {
    console.log(data.toString('utf8'));
    client.send(data, 0, data.length, 8124, "examples.burningbird.net",
        function (err, bytes) {
            if (err)
                console.log('error: ' + err);
            else
                console.log('successful');
        });
});
//sin la vinculación, el socket intentaría escuchar en todos los puertos.
var dgram = require('dgram');
var server = dgram.createSocket("udp4");
server.on ("message", function(msg, rinfo) {
console.log("Message: " + msg + " from " + rinfo.address + ":"
+ rinfo.port);
});
server.bind(8124);