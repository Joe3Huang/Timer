var fs = require("fs");
var http = require("http");
var url = require("url");
var path = require('path');
var mime = require('mime');
var log = console.log; 
var getPage = function(req, res){
	var dir = "/www";
	//var dir = "";
	var uri = url.parse(req.url).pathname;
	if (uri == "/")
	{
	  uri = "/timer.html";
	  //uri = "/index.html";
	}
	var filename = path.join(dir, uri);
	log(filename);
	fs.readFile(__dirname + filename,
	  function (err, data){
	      if (err)
	      {
	          res.writeHead(500);
	          return res.end('Error loading index.html');
	      }
	     // log(data);
	     // log(filename + " has read");
	      res.setHeader('content-type', mime.lookup(filename));
	      res.writeHead(200);
	      res.end(data);
	});

};

http.createServer(function (req, res) {
	  var headers = req.headers;
	  var method = req.method;
	  var url = req.url;
	  var body = [];
	  req.on('error', function(err) {
	    console.error(err);
	  }).on('data', function(chunk) {
	    body.push(chunk);
	  }).on('end', function() {
	    body = Buffer.concat(body).toString();
	    // At this point, we have the headers, method, url and body, and can now
	    // do whatever we need to in order to respond to this request.
	  
		  	switch(method)
			{
				case "GET":
					getPage(req, res);
					break;
				case "POST":
					console.log("got a post");
					console.log(body);
					res.writeHead(200, {'Content-Type': 'application/json'});
					var logInData = { "logInRes" : [ 
            			{ "userName"  : "not be found", "passWord" : "incorrect" }],  	 
         			}; 
         			res.end(JSON.stringify(logInData));
        			//res.writeHead(200, {'Content-Type': 'text/html'});
    				//res.end('thanks');
					break;
				default:
					break;
			}

	  });
}).listen(3000);

console.log("Listening to server on 3000...");
