import React, { Component } from 'react';
import { connect } from 'react-redux';


import "./Addpost.css";

import $ from 'jquery';

import { addPost } from '../../actions/postActions.js';

class AddPost extends Component{
	constructor( props ){
		super( props )
		this.state={
			condition: null,
			mark: null,
			model: null,
			engineVolume: null,
			transmission: null,
			year:'',
			price: '',
			body: null,
			outside: {
			},
			optic: {
			},
			salon: {
			},
			media: {
			},
			option: {

			},
			additionaly: {

			},
			contact:{
				city: null,
				phoneNumber: ''
			},
			markModels: [''],
			image: null,
			seller: this.props.userid,
			errors: {}
		}
		this.markSelect = this.markSelect.bind(this)
		this.modelSelect = this.modelSelect.bind(this)
		this.conditionSelect = this.conditionSelect.bind(this)
		this.bodySelect = this.bodySelect.bind(this)
		this.engineSelect = this.engineSelect.bind(this)
		this.showState = this.showState.bind(this)
		this.vinSelect = this.vinSelect.bind(this)
		this.transmissionSelect = this.transmissionSelect.bind(this)
		this.rudderSelect = this.rudderSelect.bind(this)
		this.colorSelect = this.colorSelect.bind(this)
		this.availableSelect = this.availableSelect.bind(this)
		this.customsSelect = this.customsSelect.bind(this)
		this.driveSelect = this.driveSelect.bind(this)
		this.otherSelect = this.otherSelect.bind(this)
		this.opticSelect = this.opticSelect.bind(this)
		this.salonSelect = this.salonSelect.bind(this)
		this.mediaSelect = this.mediaSelect.bind(this)
		this.optionSelect = this.optionSelect.bind(this)
		this.additionallySelect = this.additionallySelect.bind(this)
		this.textSelect = this.textSelect.bind(this)
		this.contactSelect = this.contactSelect.bind(this)
		this.selectInfo = this.selectInfo.bind(this)
		this.fileUpload = this.fileUpload.bind(this)
	}

	componentWillReceiveProps( newProps ){
		if( newProps.errors ){
			this.setState({
				errors: newProps.errors
			})
		}
		if( newProps.phoneNumber){
			this.setState({
				[this.state.contact.phoneNumber]: newProps.phoneNumber
			})
			console.log(newProps.phoneNumber)
		}
		if( newProps.userid){
			this.setState({
				seller: newProps.userid
			})
		}
	}

	showState( ){
		let d = this.state
		let data = {
			contact: d.contact,
			mark: d.mark,
			model: d.model,
			year: d.year,
			price: d.price,
			engineVolume: d.engineVolume,
			transmission: d.transmission,
			body: d.body,
			color: d.color,
			drive: d.drive,
			customs: d.customs,
			postText: d.postText,
			mileage: d.mileage,
			rudder: d.rudder,
			seller: d.seller,
			condition: d.condition,
			available: d.available,
			outside: d.outside,
			optic: d.optic,
			salon: d.salon,
			media: d.media,
			option: d.option,
			additionaly: d.additionaly
		}
		console.log(data)
		this.props.addPost( data, this.props.history )
	}

	fileUpload( event ){
		this.setState({image: event.target.files[0]});
	}

	selectInfo( event ){
		let currentSelect = event.target.id
		let selectValue = event.target.value
		this.setState({
			[currentSelect]: selectValue
		})
	}

	contactSelect( event ){
		let currentContact = this.state.contact
		let selectContact = event.target.id
		let contactValue = event.target.value

		currentContact[selectContact] = contactValue

		this.setState({
			contact: currentContact
		})

	}

	textSelect( event ){
		var textValue = event.target.value
		var textLength = event.target.value.length
		$('#left-text').html(2000-textLength)
		this.setState({
			postText: textValue
		})
	}

	additionallySelect( event ){
		let currentAddition = this.state.additionaly
		let selectAddition = event.target
		let additionValue = event.target.getAttribute('name')
		if( event.target.checked === true ){
			currentAddition[selectAddition.id] = additionValue
			this.setState({
				additionaly: currentAddition
			})
		}else if( event.target.checked !==true ){
			currentAddition[selectAddition.id] = false
			this.setState({
				additionaly: currentAddition
			})
		} 
	}

	optionSelect( event ){
		let currentOption = this.state.option
		let selectOption = event.target
		let optionValue = event.target.getAttribute('name')
		if( event.target.checked === true ){
			currentOption[selectOption.id] = optionValue
			this.setState({
				option: currentOption
			})
		}else if( event.target.checked !==true){
			currentOption[selectOption.id] = false
			this.setState({
				option: currentOption
			})
		}
	}

	mediaSelect( event ){
		let currentMedia = this.state.media
		let selectMedia = event.target.id
		let mediaValue = event.target.getAttribute('name')
		if( event.target.checked === true){
			currentMedia[selectMedia.id] = mediaValue
			this.setState({
				media: currentMedia
			})
		}else if ( event.target.checked !== true){
			currentMedia[selectMedia.id] = false
			this.setState({
				media: currentMedia
			})
		}
	}

	salonSelect( event ){
		let currentSalon = this.state.salon
		let selectSalon = event.target
		let salonValue = event.target.getAttribute('name')
		if( event.target.checked === true){
			currentSalon[selectSalon.id] = salonValue
			this.setState({
				salon: currentSalon
			})
		}else if( event.target.checked !== true){
			currentSalon[selectSalon.id] = false
			this.setState({
				salon: currentSalon
			})
		}
	}

	opticSelect( event ) {
		let currentOptic = this.state.optic
		let selectOptic = event.target
		let opticValue = event.target.getAttribute('name')
		if( event.target.checked === true){
			currentOptic[selectOptic.id] = opticValue
			this.setState({
				optic: currentOptic
			})
		}else if( event.target.checked !== true){
			currentOptic[selectOptic.id] = false
			this.setState({
				optic: currentOptic
			})
		}
	}

	otherSelect( event ){
		let currentOutside = this.state.outside
		let selectOutside = event.target
		let outsideValue = event.target.getAttribute('name')
		if( event.target.checked === true){
			currentOutside[selectOutside.id] = outsideValue
			console.log(currentOutside)
			this.setState({
				outside: currentOutside
			})
		}else if( event.target.checked !== true){
			currentOutside[selectOutside.id] = false
			this.setState({
				outside: currentOutside
			})
		}
	}

	driveSelect( event ){
		var currentDrive = event.target.getAttribute('name')
		if( currentDrive === this.state.drive){
			this.setState({
				drive: null
			})
			$('.drive').removeClass('choosen')
		}else{
			this.setState({
				drive: currentDrive
			})
			$('.drive').removeClass('choosen')
			$(event.target).addClass('choosen')
		}
	}

	customsSelect( event ){
		var currentCustoms = event.target.getAttribute('name')
		if(currentCustoms === this.state.customs){
			this.setState({
				customs: null
			})
			$('.customs').removeClass('choosen-bg')
		}else{
			this.setState({
				customs: currentCustoms
			})
			$('.customs').removeClass('choosen-bg')
			$(event.target).addClass('choosen-bg')
		}
	}

	availableSelect( event ){
		var currentAvailable = event.target.getAttribute('name')
		if(currentAvailable === this.state.available){
			this.setState({
				available: null
			})
			$('.available').removeClass('choosen-bg')
		}else{
			this.setState({
				available: currentAvailable
			})
			$('.available').removeClass('choosen-bg')
			$(event.target).addClass('choosen-bg')
		}
	}

	colorSelect( event ){
		if(event.target.getAttribute('name') === 'metallic'){
			if(event.target.checked === true){
				let metallic = this.state.color + ' металлик'
				this.setState({
					color: metallic
				})
			}else{
				let notMetallic = this.state.color.split(' ')
				notMetallic.pop()
				this.setState({
					color: notMetallic
				})
			}
		}else if(event.target.getAttribute('name') === 'color'){
			var currentColor = event.target.value
			if(currentColor === 'null'){
				this.setState({
					color: null
				})
			}else{
				this.setState({
					color: currentColor
				})
			}
		}
	}

	rudderSelect( event ){
		var currentRudder = event.target.getAttribute('name')
		if(currentRudder === this.state.rudder){
			this.setState({
				rudder: null
			})
			$('.rudder').removeClass('choosen-bg')
		}else{
			this.setState({
				rudder: currentRudder
			})
			$('.rudder').removeClass('choosen-bg')
			$(event.target).addClass('choosen-bg')
		}
	}

	transmissionSelect ( event ){
		var currentTransmission = event.target.getAttribute('name')
		if(currentTransmission === this.state.transmission){
			this.setState({
				transmission: null
			})
			$('.transmission-item').removeClass('choosen')
		}else{
			this.setState({
				transmission: currentTransmission
			})
			$('.transmission-item').removeClass('choosen')
			$(event.target).addClass('choosen')
		}
	}

	vinSelect( event ){
		var vinCount = event.target.value.length
		var vinValue = event.target.value
		$('#leftVin').html(17 - vinCount)
		this.setState({
			VIN: vinValue
		})


	}

	engineSelect( event ){
		if( event.target.getAttribute('name') === 'engine-volume'){
			var currentVolume = event.target.value;
			if( currentVolume < 10  && currentVolume >= 0.1){
				this.setState({
				engineVolume: currentVolume 
			})
			}else{
				this.setState({
					engineVolume: null
				})
			}}else{
			var currentEngineType = event.target.getAttribute('name')
			if(currentEngineType === this.state.engineType){
				this.setState({
					engineType: null
				})
				$('.engine-item').removeClass('choosen')
			}else{
				this.setState({
					engineType: currentEngineType
				})
				$('.engine-item').removeClass('choosen')
				$(event.target).addClass('choosen')
			}
		}
	}

	bodySelect( event ){
		var currentBody = event.target.getAttribute('name')
		if( this.state.body === currentBody ){
			this.setState({
				body: null
			})
			$('.body').removeClass('choosen')		
		}else{
			this.setState({
				body: currentBody
			})
			$('.body').removeClass('choosen')
			$(event.target).addClass('choosen')
		}

	}

	markSelect( event ){
		var currentMark = event.target.value
		this.setState({
			mark: currentMark
		})
		if( currentMark === 'Toyota'){
			this.setState({
				markModels:	["4runner", "Alphard", "Auris", "Avalon", "Avensis", "Camry", "Celica", "C-HR", "Corolla", "Crown", "FJ Cruiser", "Fortuner", "GT-86", "Harrier", "Hiace", "Highlander", "Hilux", "IQ", "Land Cruiser", "Land Cruiser Prado", "Prius", "RAV4", "Sienna", "Sienta", "Supra", "Urban Cruiser", "Venza", "Verso", "Verso-S", "Vios", "Voxy", "Yaris"],
			
			})
		}
		if( currentMark === 'BMW'){
			this.setState({
				markModels:	["G20","F20","F22","F45","F30","G32","G15","G11","F90","G05"]
			
			})
		}		
		if( currentMark === 'Audi'){
			this.setState({
				markModels:["A3 Sedan",  "A3 Sportback", "A4", "A4 allroad" , "A4 Avant", "A5", "A5 Sportback" , "A6", "TT RS", "SQ5"]
			
			})
		}		
		if( currentMark === 'Mercedes'){
			this.setState({
				markModels:	["A Sedan", "A-Class", "AMG GT", "AMG GT 4-Door Coupe", "AMG GT C", "AMG GT R", "B-Class", "B-Class Electric Drive", "C-Class", "G-Class"]
			
			})
		}		
		if( currentMark === 'Mitsubishi'){
			this.setState({
				markModels:	["ASX","Outlander","Pajero Sport","L200","Fuso Canter","Celeste","Colt A150","3000 GT","Lancer Evolution X","Town Box"]
			
			})
		}		
		if( currentMark === 'Mazda'){
			this.setState({
				markModels:	["2", "3", "3MPS", "5", "6", "Axela", "BT-50", "CX-3", "CX-30", "CX-4", "CX-5", "CX-7", "CX-9", "MPV", "MX-5", "RX-8", "Tribute"]
			
			})
		}		
		if( currentMark === 'Nissan'){
			this.setState({
				markModels:	["350Z", "370Z", "Almera", "Almera Classic", "Cube", "Fuga", "GT-R", "GT-R Nismo", "Juke", "Juke Nismo RS", "Kicks", "Lafesta", "Leaf", "Maxima", "Micra", "Murano", "Navara", "Note", "Note Nismo", "Pathfinder", "Patrol", "Primera", "Pulsar", "Qashqai", "Qashqai2", "Sentra", "Sylphy", "Teana", "Terrano", "Tiida", "Xmotion", "X-Trail"]
			
			})
		}	
		if( currentMark === 'Tesla'){
			this.setState({
				markModels:	["Model S", "Model 3", "Model X", "Model Y"]
			
			})
		}
		if( currentMark !== 'choose'){
			$('#model').value = 0
			$('#model').show()
		}else{
			$('#model').value = 0
			$('#model').hide()
		}
	}

	modelSelect( event ){
		var currentModel = event.target.value
		this.setState({
			model: currentModel
		})
	}

	conditionSelect( event ){
		var currentCondition = event.target.getAttribute('name')
		console.log(currentCondition)
		if( this.state.condition === currentCondition ){
			this.setState({
				condition: null
			})
			$('.condition').removeClass('choosen')
		}else{
		this.setState({
			condition: currentCondition
		})
		$('.condition').removeClass('choosen')
		$(event.target).addClass('choosen')
		}
	}

	render(){
		console.log(this.props)
		const currentModels = this.state.markModels
		const marks = ["Toyota", "BMW", "Mercedes", "Audi", "Mazda", "Tesla", "Mitsubishi", "Nissan"]
		const cities = ["Алматы", "Нур-султан(Астана)", "Караганда", "Шымкент", "Актау", "Тараз"];
		const color = ["бронза", "вишня", "хамелеон", "бежевый", "белый", "бирюзовый", "бордовый", "голубой", "жёлтый", "зелёный", "золотистый", "коричневый", "красный", "оранжевый", "розовый", "серебристый", "серый", "синий", "сиреневый", "фиолетовый", "черный"]
		const car_option_1 = [{id:'powerRudder',value:'ГУР'}, {id:'ABS',value:'ABS'}, {id:'SRS',value:'SRS'}, {id:'winterMode',value:'зимний режим'}, {id:'sportMode',value:'спортивный режим'}, {id:'turbocharging',value:'турбонаддув'}, {id:'turbo timer',value:'турботаймер'}, {id:'signaling',value:'сигнализация'}, {id:'autostart',value:'автозапуск'}, {id:'immobilizer',value:'иммобилайзер'}, {id:'keylessAccess',value:'бесключевой доступ'}, {id:'fullElecroPocket',value:'полный электропакет'}, {id:'centerLock',value:'цетрозамок'}, {id:'conditioner',value:'кондиционер'}, {id:'climateControl',value:'климат-контроль'}, {id:'cruiseControl',value:'круиз-контроль'}]
		const car_option_2 = [{id:'onBoardComputer', value:'бортовой компьютер'}, {id:'GPS', value:'навигационная система'}, {id:'multiRudder', value:'мультируль'}, {id:'heatedRudder', value:'подогрев руля'}, {id:'heatedSeat', value:'подогрев сидений'}, {id:'heatedBackSeat', value:'подогрев задних сидений'}, {id:'ventSeat', value:'вентиляция сидений'}, {id:'memorySeat', value:'память сидений'}, {id:'memoryRudder', value:'память руля'}, {id:'parktronic', value:'парктроники'}, {id:'rearViewCamera', value:'камера заднего вида'}, {id:'lightSensor', value:'датчик света'}, {id:'rainSensor', value:'датчик дождя'}, {id:'tirePressureSensor', value:'датчик давления в шинах'}, {id:'airSuspension', value:'пневмоподвеска'}, {id:'variableClearance', value:'изменяемый клиренс'},]
		const condition = [{id:'new', value:'Новая'}, {id:'on-the-run', value:'На ходу'}, {id:'not-on-the-go', value:'Не на ходу'}, {id:'emergency', value:'Аварийная'}]
		const transmission = ['Механика', 'Автомат', 'Типтроник', 'Вариатор', 'Робот'];
		return(
			<div>
				<h1 className='addpost-title'>Подать объявление</h1>
				<p className='addpost-info'>Срок жизни объявления на сайте - 7 дней. Продлить можно в личном кабинете. </p>
				<p className='addpost-info'>Поля, обязательные к заполнению, <strong>сразу видно *</strong></p>
				<div>
					<div className='mark-model-select'>
						<p id='modelError' className='category'>Марка и модель*</p>
						<select className='select' name="mark" id="mark" size="5" onChange={this.markSelect}>
							<option value="choose">выбрать марку</option>
							{marks.map( mark => { return( <option key={mark} value={mark} name={mark}>{mark}</option> ) })}
						</select>
						<select className='select' name="model" id="model" size="5" onChange={this.modelSelect}>
							<option value="choose">выбрать модель</option>
							{currentModels.map( model => { return( <option key={model} value={model} name={model}>{model}</option> ) })}
						</select>
					</div>
					<p className='select-error'>{ this.state.errors.modelError &&  this.state.errors.modelError  }</p>
				</div>
				<div>
					<div className='condition-select'>
						<p id='conditionError' className='category'>Состояние?*</p>
						{condition.map(el => {return <p className='select-item condition' key={el.id} onClick={this.conditionSelect} id={el.id} name={el.value}>{el.value}</p>})}
					</div>
					<p className='select-error'>{ this.state.errors.conditionError &&  this.state.errors.conditionError  }</p>
				</div>	
				<div>	
					<div className='body-select'>
						<p id='bodyError' className='category'>Кузов*</p>
						<div className='bodies'>
							<p name='Седан' onClick={this.bodySelect} className='body select-item'>седан</p>
							<p name='Универсал' onClick={this.bodySelect} className='body select-item'>универсал</p>
							<p name='Хэтчбек/лифтбек' onClick={this.bodySelect} className='body select-item'>хэтчбек/лифтбек</p>
							<p name='Лимузин' onClick={this.bodySelect} className='body select-item'>лимузин</p>
							<p name='Купе' onClick={this.bodySelect} className='body select-item'>купе</p>
							<p name='Родстер' onClick={this.bodySelect} className='body select-item'>родстер</p>
							<p name='Кабриолет' onClick={this.bodySelect} className='body select-item'>кабриолет</p>
							<p name='Внедорожник' onClick={this.bodySelect} className='body select-item'>внедорожник</p>
							<p name='Кроссовер' onClick={this.bodySelect} className='body select-item'>кроссовер</p>
							<p name='Микровен' onClick={this.bodySelect} className='body select-item'>микровен</p>
							<p name='Минивэн' onClick={this.bodySelect} className='body select-item'>минивэн</p>
							<p name='Микроавтобус' onClick={this.bodySelect} className='body select-item'>микроавтобус</p>
							<p name='Фургон' onClick={this.bodySelect} className='body select-item'>фургон</p>
							<p name='Пикап' onClick={this.bodySelect} className='body select-item'>пикап</p>
						</div>
					</div>
					<p className='select-error'>{ this.state.errors.bodyError &&  this.state.errors.bodyError  }</p>
				</div>
				<div>	
					<div className='year-select'>
						<p id='yearError' className='category'>Год выпуска*</p>
						<div>	
							<input onChange={this.selectInfo} className='short-input' type="year" id='year' name='year' maxLength='4'/>
							<p className='hint'>Например, 1998 или 2007</p>
						</div>
					</div>
					<p className='select-error'>{ this.state.errors.yearError &&  this.state.errors.yearError  }</p>
				</div>
				<div>	
					<div className='price-select'>
						<p className='category'>Цена*</p>
						<input onChange={this.selectInfo} className='short-input' type="number" id='price' name='price'/>
						<p className='after-input'>тенге</p>
					</div>
					<p className='select-error'>{ this.state.errors.priceError &&  this.state.errors.priceError  }</p>
				</div>
				<div>
					<div className='engine-select'>
						<p className='category'>Двигатель*</p>
						<div>
							<input onChange={this.engineSelect}  className='short-input' id='engine-volume' name='engine-volume'/>
							<p className='hint'>Например, 2.8 или 3</p>
						</div>
						<p className='after-input'>л.</p>
						<div className='d-flex engine'>
							<p name='Бензин' onClick={this.engineSelect} className='select-item engine-item' >бензин</p>
							<p name='Дизель' onClick={this.engineSelect}  className='select-item engine-item' >дизель</p>
							<p name='Газ-бензин' onClick={this.engineSelect}  className='select-item engine-item' >газ-бензин</p>
							<p name='Газ' onClick={this.engineSelect}  className='select-item engine-item' >газ</p>
							<p name='Гибрид' onClick={this.engineSelect}  className='select-item engine-item' >гибрид</p>
							<p name='Электричество' onClick={this.engineSelect}  className='select-item engine-item' >электричество</p>
						</div>
					</div>
					<p className='select-error'>{ this.state.errors.engineError &&  this.state.errors.engineError  }</p>
				</div>
				<div className='vin-select'>
					<p className='category-n-i'>VIN</p>
					<div>
						<input onChange={this.vinSelect} className='vin-input' type="text" maxLength='17'/>
						<p className='hint'>Максимальная длинна текста 17 знаков. Осталось <span id='leftVin'>17</span> знаков</p>
					</div>	
				</div>
				<div>
					<div className='transmission-select'>
						<p className='category'>КПП*</p>
						{ transmission.map( el => { return( <p name={el} onClick={this.transmissionSelect} className='select-item transmission-item'>{el}</p> ) } )}
					</div>
					<p className='select-error'>{ this.state.errors.transmissionError &&  this.state.errors.transmissionError  }</p>
				</div>
				<div className='mileage-select'>
					<p className='category-n-i'>Пробег</p>
					<input onChange={this.selectInfo} id='mileage' className='short-input' type="number" min='0' max='9999999'/>
					<p className='after-input'>км.</p>
				</div>
				<div>
					<div className='rudder-select'>
						<p className='category'>Руль*</p>
						<div className='radio-choose'>
							<div onClick={this.rudderSelect} className='radio-item rudder' name='Слева' id='left-rudder'>слева</div>
							<div onClick={this.rudderSelect} className='radio-item lb-0 rudder' name='Справа' id='rigth-rudder'>справа</div>
						</div>
					</div>
					<p className='select-error'>{ this.state.errors.rudderError &&  this.state.errors.rudderError  }</p>
				</div>
				<div className='color-select'>
					<p className='category-n-i'>Цвет</p>
					<select onClick={this.colorSelect} className='color' name="color" id="color">
						<option value="null">Выбрать</option>
						{color.map(color =>(<option key={color} value={color} name={color}>{color}</option>))}
					</select>
					<div className='checkbox-block'>
						<input onClick={this.colorSelect} className='checkbox' type="checkbox" id='metallic' name='metallic'/>
						<p>металлик</p>
					</div>
				</div>
				<div>
					<div className='available-select'>
						<p className='category'>Наличие*</p>
						<div className='radio-choose'>
							<div onClick={this.availableSelect} className='radio-item available' name='В наличии'>В наличии</div>
							<div onClick={this.availableSelect} className='radio-item lb-0 available' name='На заказ' >На заказ</div>
						</div>
					</div>
					<p className='select-error'>{ this.state.errors.availableError &&  this.state.errors.availableError  }</p>
				</div>
				<div>
					<div className='customs-select'>
						<p className='category'>Растаможен*</p>
						<div className='radio-choose'>
							<div onClick={this.customsSelect} className='radio-item customs' name='Да'>Да</div>
							<div onClick={this.customsSelect} className='radio-item lb-0 customs' name='Нет'>Нет</div>
						</div>
					</div>
					<p className='select-error'>{ this.state.errors.customsError &&  this.state.errors.customsError  }</p>
				</div>
				<div className='drive-select'>
					<p className='category-n-i'>Привод</p>
					<p name='Передний привод' onClick={this.driveSelect} className='select-item drive'>Передний привод</p>
					<p name='Полный привод' onClick={this.driveSelect} className='select-item drive'>Полный привод</p>
					<p name='Задний привод' onClick={this.driveSelect} className='select-item drive'>Задний привод</p>
				</div>
				<div className='outside-select'>
					<p className='category-n-i'>Снаружи</p>
					<div className='checkbox-column'>
						<div className='checkbox-block mb-15'>
							<input name='литые диски' id='alloyWheels' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>литые диски</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='тонировка' id='toning' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>тонировка</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='люк' id='hatch' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>люк</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='панорамная крыша' id='panoramicRoof' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>панорамная крыша</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='кенгурятник' id='bullbar' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>кенгурятник</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='спойлер' id='spoiler' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>спойлер</p>
						</div>
					</div>
					<div>
						<div className='checkbox-block mb-15'>
							<input onClick={this.otherSelect}  name='обвес' id='bodyKit' className='checkbox' type="checkbox"/>
							<p>обвес</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='лебёдка' id='winch'  className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>лебёдка</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='ветровики' id='visor' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>ветровики</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='рейлинги' id='rails' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>рейлинги</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='багажник' id='trunk' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>багажник</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input name='фаркоп' id='turnbuckle' className='checkbox' type="checkbox" onClick={this.otherSelect}/>
							<p>фаркоп</p>
						</div>
					</div>
				</div>
				<div className='optic-select'>
					<p className='category-n-i'>Оптика</p>
					<div className='checkbox-column'>
						<div className='checkbox-block mb-15'>
							<input id='xenon' name='ксенон' type="checkbox" onClick={this.opticSelect} className='checkbox' />
							<p>ксенон</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='bixenon' name='биксенон' type="checkbox" onClick={this.opticSelect} className='checkbox' />
							<p>биксенон</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='crystalOptics' name='хрустальная оптика' type="checkbox" onClick={this.opticSelect} className='checkbox' />
							<p>хрустальная оптика</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='linsedOptic' name='линзованная оптика' type="checkbox" onClick={this.opticSelect} className='checkbox' />
							<p>линзованная оптика</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='dayLights' name='дневные ходовые огни' type="checkbox" onClick={this.opticSelect} className='checkbox' />
							<p>дневные ходовые огни</p>
						</div>
					</div>				
					<div className='checkbox-column'>
						<div className='checkbox-block mb-15'>
							<input id='fogLights' name='противотуманки' type="checkbox" onClick={this.opticSelect} className='checkbox' />
							<p>противотуманки</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='headlightWasher' name='омыватель фар' type="checkbox" onClick={this.opticSelect} className='checkbox' />
							<p>омыватель фар</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='headlightCorrector' name='корректор фар' type="checkbox" onClick={this.opticSelect} className='checkbox' />
							<p>корректор фар</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='heatedMirrors' name='обогрев зеркал' type="checkbox" onClick={this.opticSelect} className='checkbox' />
							<p>обогрев зеркал</p>
						</div>
					</div>
				</div>
				<div className='salon-select'>
						<p className='category-n-i'>Салон</p>
						<div className='checkbox-column'>
							<div className='checkbox-block mb-15'>
								<input id='velours' name='велюр' type="checkbox" onClick={this.salonSelect} className='checkbox' />
								<p>велюр</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='leather' name='кожа' type="checkbox" onClick={this.salonSelect} className='checkbox' />
								<p>кожа</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='wood' name='дерево' type="checkbox" onClick={this.salonSelect} className='checkbox' />
								<p>дерево</p>
							</div>
						</div>				
						<div className='checkbox-column'>
							<div className='checkbox-block mb-15'>
								<input id='alcantara' name='алькантара' type="checkbox" onClick={this.salonSelect} className='checkbox' />
								<p>алькантара</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='combined' name='комбинированный' type="checkbox" onClick={this.salonSelect} className='checkbox' />
								<p>комбинированный</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='curtains' name='шторки' type="checkbox" onClick={this.salonSelect} className='checkbox' />
								<p>шторки</p>
							</div>
						</div>
				</div>
				<div className='media-select'>
						<p className='category-n-i'>Медиа</p>
						<div className='checkbox-column'>
							<div className='checkbox-block mb-15'>
								<input id='audioSystem' name='аудиосистема' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>аудиосистема</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='builtInTelephone' name='встроенный телефон' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>встроенный телефон</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='bluetooth' name='bluetooth' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>bluetooth</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='CD' name='CD' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>CD</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='CDChanger' name='CD-чейнджер' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>CD-чейнджер</p>
							</div>
						</div>
						<div className='checkbox-column'>
							<div className='checkbox-block mb-15'>
								<input id='MP3' name='MP3' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>MP3</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='USB' name='USB' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>USB</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='DVD' name='DVD' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>DVD</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='DVDChanger' name='DVD-чейнджер' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>DVD-чейнджер</p>
							</div>
							<div className='checkbox-block mb-15'>
								<input id='subwoofer' name='сабвуфер' type="checkbox" onClick={this.mediaSelect} className='checkbox' />
								<p>сабвуфер</p>
							</div>
						</div>						
				</div>
				<div className='car-option-select'>
					<p className='category-n-i'>Опции автомобиля</p>
					<div className='checkbox-column'>
						{car_option_1.map(option => {return( <div key={option.id} className='checkbox-block mb-15'><input id={option.id} name={option.value} onClick={this.optionSelect} className='checkbox' type="checkbox" /><p>{option.value}</p></div> )})}
					</div>
					<div className='checkbox-column'>
						{car_option_2.map(option => {return( <div key={option.id} className='checkbox-block mb-15'><input id={option.id} name={option.value} onClick={this.optionSelect} className='checkbox' type="checkbox" /><p>{option.value}</p></div> )})}
					</div>
				</div>
				<div className='additionally-select'>
					<p className='category-n-i'>Дополнительно</p>
					<div className='checkbox-column'>
						<div className='checkbox-block mb-15'>
							<input id='freshlyDriven' name='свежепригнан' onClick={ this.additionallySelect } type="checkbox" className='checkbox'/>
							<p>свежепригнан</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='freshlyDelivered'  name='свежедоставлен' onClick={ this.additionallySelect } type="checkbox" className='checkbox'/>
							<p>свежедоставлен</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='taxPaid' name='налог уплачен' onClick={ this.additionallySelect } type="checkbox" className='checkbox'/>
							<p>налог уплачен</p>
						</div>
						<div className='checkbox-block mb-15'>
							<input id='investmentNotRequire' name='вложений не требует' onClick={ this.additionallySelect } type="checkbox" className='checkbox'/>
							<p>вложений не требует</p>
						</div>
					</div>
				</div>
				<div className='text-select'>
					<p className='category-n-i'>Текст объявления</p>
					<div>
						<textarea onChange={ this.textSelect } className='text-area' name="add-text" id="addText" cols="30" rows="10" maxLength='2000'></textarea>
						<p className='hint'>Максимальная длина текста 2000 знаков. Осталось <span id='left-text'>2000</span> знаков.</p>
					</div>
				</div>
				<div className='contact-section'>
					<div className='select-block'>
						<p className='category'>Город*</p>
						<select onChange={ this.contactSelect } className='contact-select' name="city" id="city">
							<option>Выбрать</option>
							{cities.map( el => {return <option key={el} value={el}>{el}</option> })}
						</select>
					</div>
					<p className='select-error'>{ this.state.errors.cityError &&  this.state.errors.cityError  }</p>
					<div className='select-block'>
						<p className='category'>Телефон*</p>
						<input onChange={ this.contactSelect } value={ this.state.contact.phoneNumber } id='phoneNumber' type="text" maxLength='11'/>
					</div>
					<p className='select-error'>{ this.state.errors.phoneError &&  this.state.errors.phoneError  }</p>
				</div>
				<div className='photoUpload'>
					<p className='category'>Фото*</p>
					<input type="file" onChange={this.fileUpload} className='file'/>
				</div>
				<button className='result-button addpost-button' onClick={this.showState}>Подать объявление</button>
			</div>
		)
	}
}

const mapStateToProps = state =>({
	errors: state.errors,
	phoneNumber: state.user.user.phone,
	userid: state.user.user._id
})

export default connect( mapStateToProps, { addPost })(AddPost);