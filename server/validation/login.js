const isEmpty = require('./isEmpty.js');

function validateLogData( data ){

	var errors = {};

	isEmpty(data.password) ? errors.password = 'Введите пароль' : null;
	isEmpty(data.login) ? errors.login = 'Введите логин' : null;

	var result = {
		errors,
		isValid: isEmpty(errors)
	}

	return result;
};

module.exports = validateLogData;
