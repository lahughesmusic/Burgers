var express = require('express');
var app = express();
var body_parser = require('body-parser');

var PORT =  process.env.PORT || 8080;
app.use(express.static(__dirname + "/public"));
app.use(body_parser.urlencoded({extended: false}))
app.use(body_parser.json())
app.use(express.static('/public'))

var exphbs = require('express-handlebars')

app.engine('handlebars', exphbs({defaultLayout: 'main'}))
app.set('view engine', 'handlebars');

var routes = require('./controllers/burgers_controller.js');

app.use("/", routes);
app.use("/update", routes);
app.use("/create", routes);

app.listen(PORT, function(){
    console.log('we listenin');
})