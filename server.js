// require express and set it to a var
var express = require('express');

// initialize the app
var app = express();

// get the root url
app.get('/', function(request,response){
  response.json({
    name: 'Kim Gordon',
    instrument: 'Bass'
  })
});

app.get('/headers',function(request,response){
  response.json(request.headers);
});

app.get('/headers/:header_name',function(request,response){
  response.json(request.headers[request.params.header_name]);
});

app.get('/version', function(request,response){
  response.json(request.httpVersion);
});

// get firstname and lastname as params
app.get('/:firstname/:lastname', function(request, response){
  var first = request.params.firstname;
  var last = request.params.lastname;
  response.send(["hello", first, last].join(" "));
});

// return the jedi name from the params
app.get('/jedi/:firstname/:lastname', function(request,response){
  var first = request.params.firstname.slice(0, 2);
  var last = request.params.lastname.slice(0, 3);
  response.send(['Hello ', last + first].join(' '));
});

app.listen(8080);

app.listen(process.env.PORT, process.env.IP);