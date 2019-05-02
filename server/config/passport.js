var LocalStrategy = require('passport-local');

var User = require('../modeles/user.js');

module.exports = passport => {

	passport.use(new LocalStrategy({usernameField: 'login'}, function(Login, password, done){
		User.findOne({login: Login}).exec(function(err, user){
			if (err){
				return done(err);
			}
			if(user){
				user.comparePassword(password, function(err, isMatch){
					if(err){
						return done(err);
					}

					if(isMatch){
						return done(null, user);
					}

					return done(null, false);
				});
			}

			if(!user){
				return done(null, false);
			}
		})
	}))

	passport.serializeUser(function(user, done){
		done(null, user._id);
	});

	passport.deserializeUser(function(id, done){
		User.findById(id, function(err, user) {
			done(err, user);
		});
	});
}