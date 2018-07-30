var express = require("express");
var app = express();
var PORT = process.env.PORT || 8080;
app.use(express.static("public"));

var session = require('express-session'); // new

// Routes
// =============================================================
require("./routes/routes.js")(app);
var auth = require('./routes/auth'); // new
var usersRouter = require('./routes/users'); //new

app.use(session({secret: 'anything'})); //new
require('./config/passport')(app); //new -

app.use('/users', usersRouter); // new
app.use('/auth', auth); // new

// Starts the server to begin listening
// =============================================================

// var app = require('/app');
var PORT = 3001;
var PORT_HTTPS = 3000;
var fs = require('fs');
var http = require('http');
var https = require('https');
var credentials = {key: fs.readFileSync('./etc/server.key', 'utf8'), cert: fs.readFileSync('./etc/server.crt', 'utf8')};
var httpServer = http.createServer(app), httpsServer = https.createServer(credentials, app);
httpServer.listen(PORT);
httpsServer.listen(PORT_HTTPS);
