import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import './postBlock.css';

class PostBlock extends Component{
	constructor( props ){
		super( props )
		this.state = {
			data: this.props.data
		}
		console.log(this.state.data)
	}

	render(){
		const data = this.state.data
		return(
			<Link className='link-postblock' to={'/post/' + data._id}>
			<div className='PostBlock'>
				<img className='postBlockImg' src="https://alaps-photos-kl.kcdn.kz/38/3849deba-2289-4a2c-9409-620c47c87df1/40-1200x752.jpg" alt=""/>
				<div className='PostBlock-info'>
					<div className='PostBlock-info-item'>
						<h2>{data.mark} {data.model}</h2>
						{ data.condition !== 'На ходу' && data.condition !== undefined ? <p className='block-condition'>{data.condition}</p> : null }
						<p className='big-info'>{data.year}г. {data.body}, {data.info}</p>
					</div>
					<div className='PostBlock-info-item-2'>
						<span>{data.city}</span>
						<span>{}</span>
						<div><img src="images/icons8-eye-24.png" alt="" />{data.views} просмотра</div>
					</div>
				</div>
				<div className='PostBlock-price'>
					<h2>{data.price} ₸</h2>
				</div>
			</div>
			</Link>
		)
	}
}

const mapStateToProps = state => ({
	
})

export default connect(mapStateToProps)(PostBlock);