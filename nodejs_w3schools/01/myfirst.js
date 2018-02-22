var http = require('http');

http.createServer(function(req, res){
  res.writeHead(200, {'Content-Type':'text/html'});
  res.end('Hola mundacho!');
}).listen(8080);
