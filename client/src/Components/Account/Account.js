import React, { Component} from 'react';
import { connect} from 'react-redux';

import PostCard from '../postCard/postCard.js';
import { getMyPost } from '../../actions/postActions.js';


import './Account.css';


class Account extends Component{
	constructor( props ){
		super( props )
		this.state = {
			data:[]
		}
		this.props.getMyPost(this.props.sellerId)
	}

	componentWillReceiveProps( newProps){
		if(newProps.profilePosts){
			this.setState({
				data: newProps.profilePosts
			})
		}
	}

	render(){
		return(
			<div className='account-box'>
				<div className='own-adds'>
				<h2>Ваши объявления</h2>
					{this.state.data.map(el=> {return(<PostCard add={el}/>)})}
				</div>
			</div>
		)
	}
}

const mapStateToProps = state =>({
	sellerId: state.user.user._id,
	profilePosts: state.post.myPost
})

export default connect( mapStateToProps, { getMyPost } )( Account )