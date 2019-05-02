const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
var cookieParser = require('cookie-parser');
const morgan = require('morgan');
const passport = require('passport');

const app = express();

app.use(morgan('dev'));
app.use( bodyParser.urlencoded({ limit: '100mb', extended: true}));
app.use( bodyParser.json({limit : '100mb'}));
app.use( cookieParser() );

app.use( passport.initialize() );
app.use( passport.session() );
require('./server/config/passport')(passport);

app.use(function(req, res, next){
	if(req.user){
		res.cookie('user', JSON.stringify(req.user));
	}
	next();
});

mongoose.connect('mongodb://localhost:27017/forumdb', {useNewUrlParser: true, useCreateIndex : true})
.then(()=>{
	console.log("DB connected")
})
.catch(err=>{
	console.log(err)
})

app.use(require('./server/routes/'))

app.listen(3001, ()=>{
	console.log("\x1b[31m", "Server listening on port 3001")
})