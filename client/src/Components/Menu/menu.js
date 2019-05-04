import React, { Component } from 'react';
import { connect } from 'react-redux';

import './menu.css';

import $ from 'jquery';

import { findPosts, getCount } from '../../actions/postActions.js';



class Menu extends Component {
	constructor( props ){
		super( props )

		this.state = {
			bodyMenu: null,
			city: null,
			mark: null,
			model: '',
			additionOption: [],
			models: [],
			priceFrom:'',
			priceBefore:''
		}
		
		this.selectBody = this.selectBody.bind(this);
		this.selectCity = this.selectCity.bind(this);
		this.selectMark = this.selectMark.bind(this);
		this.selectModel = this.selectModel.bind(this);
		this.find = this.find.bind(this);
		this.additionOption = this.additionOption.bind(this);
		this.priceChange = this.priceChange.bind(this);
		this.setPrice = this.setPrice.bind(this);
		// this.props.getCount();
	}

	find(){
		let data = {
			bodyMenu: this.state.bodyMenu,
			city: this.state.city,
			mark: this.state.mark,
			model: this.state.model,
			condition: this.state.condition,
			engineType: this.state.engineType,
			rudder: this.state.rudder,
			body: this.state.body,
			transmission: this.state.transmission,
			drive: this.state.drive,
			priceBefore: this.state.priceBefore,
			priceFrom: this.state.priceFrom

		}
		console.log(data)
		this.props.findPosts( data )
		$('.hot-block').hide()
	}

	priceChange( event ){
		let id = event.target.id
		let value = event.target.value
		if( id === 'from' ){
			this.setState({
				priceFrom: value
			})
		}
		if( id === 'before' ){
			this.setState({
				priceBefore: value
			})
		}
	}

	setPrice( event ){
		let id = event.target.id
		if( id === '1m'){
			this.setState({
				priceBefore: 1000000
			})
		}
		if( id === '1-2m'){
			this.setState({
				priceFrom: 1000000,
				priceBefore: 2000000
			})
		}
		if( id === '2-3m'){
			this.setState({
				priceFrom: 2000000,
				priceBefore: 3000000
			})
		}
	}

	additionOption( event ){
		let category = event.target.id
		let value = event.target.value
		if( value === ''){
			this.setState({
				[category]: null
			})
		}else{
			this.setState({
				[category]: value
			})			
		}

	}

	showAddition(){
		$('.hidden').slideToggle()
	}

	selectBody( event ){
			 let currentBody = event.target.getAttribute('name')
			 if(this.state.bodyMenu === currentBody){
			 	$('.car-box').removeClass('choosen-bg')
			 	this.setState({
			 		bodyMenu: null
			 	})
			 }else{	
			this.setState({
				bodyMenu: currentBody
			})
			$('.car-box').removeClass('choosen-bg')
			$( event.target ).addClass('choosen-bg')
		}
	}

	selectCity( event ){
		let currentCity = event.target.getAttribute('name')
		if(currentCity === this.state.city){
			$('.city').removeClass('choosen')
			this.setState({
				city: null
			})
		}else{
		this.setState({
			city: currentCity
		})
		$('.city').removeClass('choosen')
		$(event.target).addClass('choosen')
		}
	}	

	selectMark( event ){
		var currentMark = event.target.getAttribute('name')
		if(currentMark === this.state.mark){
			$('.marka').removeClass('choosen')
			this.setState({
				mark: null,
				model: null
			})
		}else{
		$('.menu').css('min-height', '330px')
		this.setState({
			mark: currentMark
		})
		$('.marka').removeClass('choosen')
		$(event.target).addClass('choosen')
		}
		if (currentMark === 'Toyota')
		{this.setState({models: ["4RUNNER", "ALPHARD", "AURIS", "AVALON", "AVENSIS", "CAMRY", "CELICA", "C-HR", "COROLLA", "CROWN", "FJ CRUISER", "FORTUNER", "GT 86", "HARRIER", "HIACE", "HIGHLANDER", "HILUX", "IQ", "LAND CRUISER", "LAND", "LAND CRUISER PRADO", "PRIUS", "RAV4", "SIENNA", "SIENTA", "SUPRA", "URBAN CRUISER", "VENZA", "VERSO", "VERSO-S", "VIOS", "VOXY", "YARIS"]});}
		if (currentMark === 'BMW')
		{this.setState({models: ["G20","F20","F22","F45","F30","G32","G15","G11","F90","G05"]});}
		if (currentMark === 'Audi')
		{this.setState({models: ["A3 Sedan",  "A3 Sportback", "A4", "A4 allroad" , "A4 Avant", "A5", "A5 Sportback" , "A6", "TT RS", "SQ5"]});}
		if (currentMark === 'Mercedes')
		{this.setState({models: ["A SEDAN", "A-CLASS", "AMG GT", "AMG GT 4-DOOR COUPE", "AMG GT C", "AMG GT R", "B-CLASS", "B-CLASS ELECTRIC DRIVE", "C-CLASS", "G-CLASS"]});}
		if (currentMark === 'Mitsubishi')
		{this.setState({models: ["ASX","Outlander","Pajero Sport","L200","Fuso Canter","Celeste","Colt A150","3000 GT","Lancer Evolution X","Town Box"]});}
		if (currentMark === 'Mazda')
		{this.setState({models: ["2", "3", "3MPS", "5", "6", "AXELA", "BT-50", "CX-3", "CX-30", "CX-4", "CX-5", "CX-7", "CX-9", "MPV", "MX-5", "RX-8", "TRIBUTE"]});}
		if (currentMark === 'Nissan')
		{this.setState({models: ["350Z", "370Z", "ALMERA", "ALMERA CLASSIC", "CUBE", "FUGA", "GT-R", "GT-R NISMO", "JUKE", "JUKE NISMO RS", "KICKS", "LAFESTA", "LEAF", "MAXIMA", "MICRA", "MURANO", "NAVARA", "NOTE", "NOTE NISMO", "PATHFINDER", "PATROL", "PRIMERA", "PULSAR", "QASHQAI", "QASHQAI2", "SENTRA", "SYLPHY", "TEANA", "TERRANO", "TIIDA", "XMOTION", "X-TRAIL"]});}			
		if (currentMark === 'Tesla')
		{this.setState({models: ["MODEL S", "MODEL 3", "MODEL X", "MODEL Y"]});}
		if (currentMark === this.state.mark)
		{this.setState({models: [' ']}); $('.menu').css('min-height', '250px')}
	}

	selectModel( event ){
		let currentModel = event.target.getAttribute('name')
		if( currentModel === this.state.model){
			$('.model').removeClass('choosen')
			this.setState({
				model: null
			})
		}else{
			$('.model').removeClass('choosen')
			$(event.target).addClass('choosen')
			this.setState({
				model: currentModel
			})
		}
	}

	render(){
		const transmission = ['Механика', 'Автомат', 'Типтроник', 'Вариатор', 'Робот'];
		const body = ['Cедан', 'Универсал', 'Хэтчбек/лифтбек', 'Лимузин', 'Купе', 'Родстер', 'Кабриолет', 'Внедорожник', 'Кроссовер', 'Микровэн', 'Минивэн', 'Микроавтобус', 'Фургон', 'Пикап']
		const condition = [{id:'new', value:'Новая'}, {id:'on-the-run', value:'На ходу'}, {id:'not-on-the-go', value:'Не на ходу'}, {id:'emergency', value:'Аварийная'}]
		const cities = ["Алматы", "Нур-султан(Астана)", "Караганда", "Шымкент", "Актау", "Тараз"];
		const marks = ["Toyota", "BMW", "Mercedes", "Audi", "Mazda", "Tesla", "Mitsubishi", "Nissan"];
		const engineType = ["бензин", "дизель", "газ-бензин", "газ", "гибрид", "электричество"]
		const models = this.state.models

		return(
			<>	
				<div className="menu">
					<div className='d-flex justify-content-between'>	
						<div>	
							<div className="d-flex">
								<div onClick={this.selectBody} id="sedan" name="1" className="car-box">
								</div>
								<div onClick={this.selectBody} id="jeep" name="2" className="car-box">
								</div>
								<div onClick={this.selectBody} id="minivan" name="3" className="car-box">
								</div>
							</div>
							<div className="city-box">
								<p>Где искать ?</p>
								<div className='select-item-box'>{cities.map( city => { return( <div name={city} key={city} className='select-item city' onClick={this.selectCity} >{city}</div> ) })}</div>
							</div>				
							<div className="mark-box">
								<p>Марка</p>
								<div className='select-item-box'>{marks.map( mark => { return( <div name={mark} key={mark} className="select-item marka" onClick={this.selectMark}>{mark}</div> ) })}</div>
							</div>				
							<div className="model-box">
								<p>Модель</p>
								<div className='select-item-box'>{models.map( models => { return( <div name={models} key={models} className="select-item model" onClick={this.selectModel}>{models}</div> ) })}</div>
							</div>
						</div>
						<div>
							<div className='price-diapason'>
								<p className='price-title'>Цена</p>
								<div className='d-flex'>
									<input onChange={ this.priceChange } value={ this.state.priceFrom } className='price-input' id='from' placeholder='От' type="number"/>
									<input onChange={ this.priceChange } value={ this.state.priceBefore } className='price-input' id='before' placeholder='До' type="number"/>
								</div>
								<div className='d-flex justify-content-between mt-2'><p onClick={ this.setPrice } id= '1m' className='select-price'>до 1 млн</p><p id= '1-2m' className='select-price' onClick={ this.setPrice }>1 - 2 млн</p><p id= '2-3m' className='select-price' onClick={ this.setPrice }>2 - 3 млн</p></div>
							</div>
						</div>
					</div>						
					<div className="advanced-find-box" id='1'>
						<div className='button-box'><p onClick={ this.showAddition } className='advanced-find-button'>Расширенный поиск</p></div>
						<div className='hidden'>
							<div className=' flex justify-content-between'>
								<div className='advanced-option-column'>
									<select onChange={ this.additionOption } className='advanced-find-select' id="condition">
										<option className='advanced-find-option default' value="" selected >Состояние машины</option>
										{ condition.map(el => { return <option key={ el.id } value={ el.value }>{ el.value }</option> })}
									</select>
									<select onChange={ this.additionOption } className='advanced-find-select' id="body">
										<option className='advanced-find-option default' value="" selected >Кузов</option>
										{ body.map(el => { return <option key={ el } value={ el }>{ el }</option> }) }
									</select>
								</div>
								<div className=' advanced-option-column'>
									<select onChange={ this.additionOption } className='advanced-find-select' id="engineType">
										<option className='advanced-find-option default' value="" selected>Тип двигателя</option>
										{ engineType.map(el => { return <option key={ el } value={ el }>{ el }</option> }) }

									</select>
									<select onChange={ this.additionOption } className='advanced-find-select' id="transmission">
										<option className='advanced-find-option default' value="" selected>КПП</option>
										{ transmission.map(el => { return <option key={ el } value={ el }>{ el }</option> }) }
									</select>
								</div>
								<div className= 'advanced-option-column'>
									<select onChange={ this.additionOption } className='advanced-find-select' id="rudder">
										<option className='advanced-find-option default' value="" selected>Расположение руля</option>
										<option className='advanced-find-option ' value="Слева">слева</option>
										<option className='advanced-find-option ' value="Справа">справа</option>
									</select>
									<select onChange={ this.additionOption } className='advanced-find-select' id="drive">
										<option className='advanced-find-option default' value="" selected>Привод</option>
										<option className='advanced-find-option' value="Передний привод" >Передний привод</option>
										<option className='advanced-find-option' value="Полный привод" >Полный привод</option>
										<option className='advanced-find-option' value="Задний привод" >Задний привод</option>
									</select>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className='result-button-box'>
						<button className="result-button" onClick={this.find}>Показать {this.props.count} объявлений</button>
				</div>
			</>
		)
	}
}

const mapStateToProps = state => ({
	count: state.post.postsCount
})

export default connect(mapStateToProps, { findPosts, getCount })( Menu );