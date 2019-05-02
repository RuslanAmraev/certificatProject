import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import $ from 'jquery';

import './postCard.css';

class PostCard extends Component {
	constructor( props ){
		super( props )

		this.state = {
			data: this.props.add,
		}
	}

	render(){
		$('.main').css('backgound-image', 'url(' + this.state.mainImg + ')')
		return(
			<Link className='link' to={"/post/" + this.state.data._id}>
				<div className='main'>
					<div className='info'>
						<p>{this.state.data.city}</p>
						<p>{this.state.data.photo} фото</p>
					</div>
					<div className='info bottom'>
						<p>{this.state.data.mark + ' ' + this.state.data.model}</p>
						<p>{this.state.data.year}</p>
						<p>{this.state.data.price > 1000000 ? this.state.data.price / 1000000 + 'млн' : this.state.data.price}₸</p>
					</div>
				</div>
			</Link>
			
	)}
}

const mapStateToProps = ( state ) =>({

})

export default connect( mapStateToProps )( PostCard );