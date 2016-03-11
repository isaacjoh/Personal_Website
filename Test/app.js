var express = require("express");
var http = require("http");
var logger = require("morgan")
var app = express();

// app.use(function(request, response, next) {
//   console.log("In comes a " + request.method + " to " + request.url);
//   next();
// });

app.use(logger());

app.use(function(request, response) {
  response.writeHead(200, {"Content-Type": "text/plain"});
  response.end("Hello world!\n");
});

app.listen(1337);
//http.createServer(app).listen(1337);

// var app = http.createServer(function(req, res) {
//   var answer = "";
//   answer += "Request URL: " + req.url + "\n";
//   answer += "Request type: " + req.method + "\n";
//   answer += "Request headers: " + JSON.stringify(req.headers) + "\n";
//
//   // if (req){
//   //   console.log("yay!");
//   // }
//   //
//   // if (res){
//   //   console.log("yay2!")
//   // }
//
//   res.writeHead(200, {
//     "Content-Type": "text/plain"
//   });
//
//   res.end(answer)
// })

var port = 1337;
app.listen(port, "localhost");
console.log("Server running at http://localhost:" + port + "/");
