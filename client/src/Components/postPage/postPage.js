import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { getAdd } from '../../actions/postActions.js';

import Comments from '../Comments/Comments.js';

import './postPage.css';

import $ from 'jquery';

class PostPage extends Component{
	constructor( props ){
		super( props )
		this.state = {
				data: ''
		}

		let addId = this.props.match.params.id
		this.props.getAdd( addId )
		this.choosePhoto = this.choosePhoto.bind(this)	
	}

	componentWillReceiveProps( newProps){
		if( newProps.currentAdd ){
			this.setState({
				data: newProps.currentAdd
			})
		}
	}

	choosePhoto( event ){
		$('.min-img').removeClass('active')
		$(event.target).addClass('active')
		var currentImg = $(event.target).attr('src')
		$('.main-img').attr('src', currentImg)
	}


	render(){
		const data = this.state.data
		return(
			<div className="d-flex justify-content-between mb-3 mt-3">
				<div className="stats">
					<div className="title">
						<div className="d-flex justify-content-between">
							<p className='car-name'>{data.mark + ' ' + data.model}</p>
							<p>{data.year}года</p>
						</div>
						<span>{data.price}₸</span>			
					</div>				
					<p className='line'>
						<span className='stat-name'>Город</span>
						<span className='city'>{data.city}</span>
					</p>					
					<p className='line'>
						<span className='stat-name'>Кузов</span>
						<span>{data.body}</span>
					</p>					
					<p className='line'>
						<span className='stat-name'>Объём двигателя,л</span>
						<span>{data.engineVolume}</span>
					</p>					
					<p className='line'>
						<span className='stat-name'>Пробег</span>
						<span>{data.mileage}</span>
					</p>					
					<p className='line'>
						<span className='stat-name'>Коробка передач</span>
						<span>{data.transmission}</span>
					</p>					
					<p className='line'>
						<span className='stat-name'>Руль</span>
						<span>{data.rudder}</span>
					</p>
					<p className='line'>
						<span className='stat-name'>Цвет</span>
						<span>{data.color}</span>
					</p>					
					<p className='line'>
						<span className='stat-name'>Привод</span>
						<span>{data.drive}</span>
					</p>					
					<p className='line'>
						<span className='stat-name'>Растаможен</span>
						<span>{data.custom}</span>
					</p>
					<div className="seller-block">
						<span className='Svyaz'>Связаться с автором объявления</span>
						<div className="seller-number">
							<span className='telefon'>Телефон:</span>
							<span className="number">{data.phone}</span>
						</div>
						<Link className='msg-link' to='/login'>
							<button className="btn btn-primary">Написать сообщение</button>
						</Link>
					</div>
				</div>
				<div className="information">
					<div className="gallery">
						<img className='main-img' src='https://alaps-photos-kl.kcdn.kz/38/3849deba-2289-4a2c-9409-620c47c87df1/40-1200x752.jpg' alt=""/>
						<div className='min-gallery-item'>
							<img onClick={this.choosePhoto} className='min-img active' src="https://alaps-photos-kl.kcdn.kz/38/3849deba-2289-4a2c-9409-620c47c87df1/40-1200x752.jpg" alt=""/>
							<img onClick={this.choosePhoto} className='min-img' src="https://alakt-photos-kl.kcdn.kz/d6/d6e1066b-21ac-41d3-931d-18be8c056fca/12-750x470.jpg" alt=""/>
							<img onClick={this.choosePhoto} className='min-img' src="https://alakt-photos-kl.kcdn.kz/46/466f751c-cbae-4204-9610-c00682fac515/1-1200x752.jpg" alt=""/>
						</div>
					</div>
					<div className="information">
						{ data.info && <><div className="info-block1">{ data.info }</div><div className="br"></div></>}
						{ data.sellerText &&  <><div className="info-block2">{ data.sellerText }</div><div className="br"></div></>}				
						<div className="views-info">
							Это объявление посмотрели <strong>{data.views}</strong> раз с {}
						</div>
						<div className="br"></div>
						<Comments messages={ data.comments }/>
					</div>
				</div>
			</div>
	)}

}

const mapStateToProps = state =>({
	currentAdd: state.post.currentAdd
})

export default connect(mapStateToProps, { getAdd })(PostPage);