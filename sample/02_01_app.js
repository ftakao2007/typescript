var http = require('http');
var fs = require('fs');
var url = require('url');

var server = http.createServer(function(req, res){
	var target = "";
	switch(req.url){
		case '/':
		case '/index':
			target = './01_test.html';
			break;
		// case '/next':
		//	target = './03._next.html';
		//	break;
		// 想定していないURLにアクセスされた時の処理
		default:
			res.writeHead(404, {'Content-Type': 'text/plain'});
			res.end('bad request');
			return;
	}
	var urlParts = url.parse(req.url);
        var path = __dirname + '/' + urlParts.pathname;
        //var stream = fs.createReadStream(path);
	//stream.pipe(res);
	fs.readFile(target, 'utf-8', function(err, data){
		res.writeHead(200, {'Content-Type': 'text/html'});
		res.write(data);
		res.end();
	});
});

server.listen(1234);
console.log('start web server');
