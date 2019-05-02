const isEmpty = require('./isEmpty.js');

function validationAddPost( data ){
	let errors = {}

		if( isEmpty(data.mark) || data.mark == 'choose'){
			errors.modelError = 'Марка или модель не выбраны'
		}
		if( isEmpty(data.model) || data.model == 'choose'){
			errors.modelError = 'Марка или модель не выбраны'
		}
		if( isEmpty(data.condition) ){
			errors.conditionError = 'Состояние машины не выбрано'
		}
		if( isEmpty(data.body) ){
			errors.bodyError = 'Кузов машины не выбран'
		}
		if( isEmpty(data.year) ){
			errors.yearError = 'Год выпуска не выбран'
		}
		if( isEmpty(data.price) || data.price > 100000000){
			errors.priceError = 'Цена машины не указана или указана неверно'
		}
		if( isEmpty(data.engineVolume) || data.engineVolume < 0.1 || data.engineVolume > 10 || data.engineVolume == 'e'){
			errors.engineError = 'Не указан объем или тип двигателя'
		}
		if( isEmpty(data.transmission) ){
			errors.transmissionError = 'Не указан тип КПП'
		}
		if( isEmpty(data.rudder) ){
			errors.rudderError = 'Не указан тип руля'
		}
		if( isEmpty(data.available) ){
			errors.availableError = 'Не указано наличие'
		}
		if( isEmpty(data.customs) ){
			errors.customsError = 'Не указано растаможен ли авто'
		}
		if( isEmpty(data.contact.city) ){
			errors.cityError = 'Не указан город'
		}
		if( isEmpty(data.contact.phoneNumber) ){
			errors.phoneError = 'Не указан номер телефона'
		}

		let result = {
			errors,
			isValid: isEmpty(errors)
		}

		return result
}

module.exports = validationAddPost;