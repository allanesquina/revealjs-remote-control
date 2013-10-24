/**
 * Module dependencies.
 */

var express = require('express'),
		routes = require('./routes'),
		http = require('http'),
		path = require('path'),
		io = require('socket.io'),
		app = express(),
		server = http.createServer(app);

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.get('/', routes.index);

io = io.listen(server);

io.sockets.on('connection', function (socket) {
  //socket.emit('news', { hello: 'world' });
  socket.on('action', function (data) {
    console.log(data);
    io.sockets.emit("action", data);
  });
});


server.listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

