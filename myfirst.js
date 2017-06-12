var http = require('http');
var url = require('url');
var waktu = require('./module_waktu');
var fs = require('fs');

http.createServer(function (req, res) {
	var q = url.parse(req.url, true);
    var filename = "."+q.pathname;
   // res.write(filename);
    if(filename){
   	 fs.readFile(filename+".html", function (err, data){
			if(err){
				res.writeHead(404, {'Content-Type': 'text/html'});
				return res.end("404 Not Found");
			}
			res.writeHead(200, {'Content-type': 'text/html'});
			res.write(filename+" "+data);
			return res.end();
		});
	}
}).listen(8080);


