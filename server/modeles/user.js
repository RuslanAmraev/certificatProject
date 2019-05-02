const mongoose = require('mongoose');
const Schema = mongoose.Schema;
var bcrypt = require('bcryptjs');

const UserSchema = new Schema({
	login : {type: String, unique: true}, 
	password : String,
	phone : String
})

UserSchema.pre('save', function(next){
	var UserSchema = this;

	if( !UserSchema.isModified('password'))
		return next();

	bcrypt.genSalt(10, function(err, salt){
		if(err)
			return next(err);

		bcrypt.hash(UserSchema.password, salt, function(err, hash){
			if(err)
				return next(err);

			UserSchema.password = hash;
			next();
		});
	});
});

UserSchema.methods.comparePassword = function(candidatePassword, next){
	bcrypt.compare(candidatePassword, this.password, function(err, isMatch){
		if(err)
			return next(err);

		next(null, isMatch);
	});
};

module.exports = User = mongoose.model('User', UserSchema);