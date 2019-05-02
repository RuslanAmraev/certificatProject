const isEmpty = require('./isEmpty.js');
const validator = require('validator');

function validateRegData( data ){
	
	var errors = {};

	isEmpty(data.login) ? errors.login = 'Заполните поле логин ' : data.login.length < 6 || data.login.length > 30 ?  errors.login ='Логин должен содержать от 6 до 30 символов' : (!validator.isEmail(data.login)) ? errors.login = 'Логин не является email' : null

	isEmpty(data.password) ? errors.password = 'Заполните поле пароль' : data.password.length < 6 || data.password.lenght > 30 ? errors.password ='Пароль должен содержать от 6 до 30 символов' : null
	
	isEmpty(data.password2) ? errors.password2 = 'Повторите пароль' : data.password2.length < 6 || data.password2.lenght > 30 ? errors.password2 ='Пароль должен содержать от 6 до 30 символов' : null
	
	isEmpty(data.phone) ? errors.phone = 'Заполните поле телефон' : null

	data.password2 != data.password ? errors.password2 = 'Пароли должны совпадать' : null

	var result = {
		errors,
		isValid: isEmpty(errors)
	}
	return result;
};

module.exports = validateRegData;