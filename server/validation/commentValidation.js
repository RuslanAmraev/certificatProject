let isEmpty = require('./isEmpty.js')

function validateComment( data ){
	let errors = {}

	if(isEmpty(data.text)){
		errors.text = 'Заполните поле'
	}
	if(isEmpty(data.user)){
		errors.user = 'Авторизуйтесь!'
	}


	let res = {
		errors,
		isValid: isEmpty(errors)
	}
	return res
}

module.exports = validateComment;