var express     = require('express'),
    bodyParser  = require('body-parser'),
    mustache    = require('mustache-express'),
    routes      = require('./routes'),
    config      = require('./config'),
    app         = express();

//BodyParser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Mustache
app.engine('html', mustache());
app.set('view engine', 'html');
app.set('views', __dirname + '/views');

//Static files
app.use(express.static(__dirname + '/public'));

//Routes
app.get('/', routes.index);
app.post('/', routes.auth);

//Launch server
app.listen(config.web.port, function(){
    console.log("Express server rocking on port %d", config.web.port);
});