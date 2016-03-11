var express = require('express');

var app = express();

app.use(express.static(__dirname + '/public'));

app.get('/', function(req,res) {
	res.sendFile(__dirname + '/public/views/index.html', {
		title: 'Swan Cleaners'
	});
});

var port = process.env.PORT || 8888;

app.listen(port, function(){
	console.log("Listening on port " + port);
});