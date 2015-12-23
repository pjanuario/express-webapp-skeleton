var express = require('express'),
    compress = require('compression'),
    serveStatic = require('serve-static'),
    basicAuth = require('basic-auth-connect'),
    logger = require('morgan'),
    handlebars = require('handlebars')
    hbs = require('hbs').create(),
    controllers = require('./controllers'),
    routes = require('./routes'),
    config = require('./config'),
    app = express();

var isDev = process.env.NODE_ENV === 'development';

app.set('port', config.get('port'));

app.use(compress());
app.use(serveStatic(__dirname + '/public', { index: false }));
app.use(logger('combined'));

app.set('view engine', 'hbs');
app.set('views', __dirname + '/views');
app.set('view engine', 'hbs');
app.set('view options', { layout: 'layout' });
app.engine('hbs', hbs.__express);

// Configure basic auth - until is not live
if(!isDev){
  app.use(basicAuth('user', 'password'));
}

// configure application routes
app.use(routes);

// redirect unmatched routes
app.all('*', function(req, res) {
  res.redirect("/");
});

// handle errors
app.use(controllers.error);

console.log("Started webapp at port %s", app.get('port'));

app.listen(app.get('port'));
