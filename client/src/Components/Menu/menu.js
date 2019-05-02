import React, { Component } from 'react';
import { connect } from 'react-redux';

import './menu.css';

import $ from 'jquery';

import { findPosts, getCount } from '../../actions/postActions.js';



class Menu extends Component {
	constructor( props ){
		super( props )

		this.state = {
			body: null,
			city: null,
			mark: null,
			model: '',
			models: []
		}
		
		this.selectBody = this.selectBody.bind(this);
		this.selectCity = this.selectCity.bind(this);
		this.selectMark = this.selectMark.bind(this);
		this.selectModel = this.selectModel.bind(this);
		this.find = this.find.bind(this);
		// this.props.getCount();
	}

	find(){
		let data = this.state
		this.props.findPosts( data )
		$('.hot-block').hide()
	}

	selectBody( event ){
			 let currentBody = event.target.getAttribute('name')
			 if(this.state.body === currentBody){
			 	$('.car-box').removeClass('choosen-bg')
			 	this.setState({
			 		body: null
			 	})
			 }else{	
			this.setState({
				body: currentBody
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
		const cities = ["Алматы", "Нур-султан(Астана)", "Караганда", "Шымкент", "Актау", "Тараз"];
		const marks = ["Toyota", "BMW", "Mercedes", "Audi", "Mazda", "Tesla", "Mitsubishi", "Nissan"];
		const models = this.state.models

		return(
			<div className="menu">
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
				<div className='result-button-box'>
					<button className="result-button" onClick={this.find}>Показать {this.props.count} объявлений</button>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state => ({
	count: state.post.postsCount
})

export default connect(mapStateToProps, { findPosts, getCount })( Menu );