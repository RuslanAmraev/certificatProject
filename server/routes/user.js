const express = require('express');
const router = express.Router();
const passport = require('passport');

const validateRegData = require('../validation/registration');
const validateLogData = require('../validation/login');

const User = require('../modeles/user.js');

//localhost:3001/api/user/....

router.post('/registration', (req, res)=>{
	var validation = validateRegData(req.body)
	if(!validation.isValid){
		return res.status(400).send(validation)
	}
	User.findOne({login: req.body.login})
	.then( user =>{
		if(user){
			validation.errors.login = 'Пользователь с таким логином уже существует'
			return res.status(400).send(validation)
		}else{
			var newUser = new User({
				login: req.body.login,
				password: req.body.password,
				phone: req.body.phone
			});
			newUser
				.save()
				.then( newuser => {
					req.login(newuser, function(newuser){
						res.cookie(newuser, JSON.stringify(newuser._id));
						res.status(200).send(newuser);
					})
				})
				.catch(err =>{
					console.log(err)
					res.status(400).send(err.message)
			})
		}
	})
	.catch(err =>{
		console.log(err)
		res.status(400).send(err.message)
	})
});



router.post('/login', (req, res, next) => {
	var validation = validateLogData(req.body)
	
	if(!validation.isValid){
	return res.status(401).send(validation)
	}

	passport.authenticate('local', (err, user, info)=>{
		if( err ){
			validation.errors.passport = err.message;
			return res.status(500).send(validation);
		}

		if( !user ){
			validation.errors.passport = 'Неверный логин или пароль';
			return res.status(401).send(validation);
		}

		req.logIn(user, function(){
			res.cookie('user', JSON.stringify ( user._id ));
			return res.status(200).send(user);
		})
	})(req, res, next);
});

router.post('/logout', (req, res)=>{
	req.logout();
	res.clearCookie('user');
	res.status(200).end();
});

router.get('/all', (req, res) => {
	User.find()
	.then(users=>{
		res.status(200).send(users)
	})
})

module.exports = router;