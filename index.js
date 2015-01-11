var express = require('express');
var app = express();

app.set('port', (process.env.PORT || 5000))
app.use(express.static(__dirname + '/public'))

app.get('/', function(request, response) {
  response.send('hello World');
})


app.get('/fb', function(request, response) {
  
	var FirebaseTokenGenerator = require("firebase-token-generator");
	var tokenGenerator = new FirebaseTokenGenerator("DQarPkbCX0mEJaNX4hzTEsUeV9s0U5WZ29YiBPXJ");
  	var token = tokenGenerator.createToken({uid: "1", some: "arbitrary", data: "here"});
  	//response.sendFile(__dirname + './views/firebase.html');
  	 response.sendFile("firebase.html", {"root": __dirname+'/views'});
})


app.get('/gettoken', function(request, response) {

	var FirebaseTokenGenerator = require("firebase-token-generator");
	var tokenGenerator = new FirebaseTokenGenerator("DQarPkbCX0mEJaNX4hzTEsUeV9s0U5WZ29YiBPXJ");
  	var token = tokenGenerator.createToken({uid: "1", some: "arbitrary", data: "here"});

  	response.send(token);
  
})


app.listen(app.get('port'), function() {
  console.log("Node app is running at localhost:" + app.get('port'))
})
