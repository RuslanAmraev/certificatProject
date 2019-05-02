import React , { Component } from 'react';
import { connect } from 'react-redux';

import PostBlock from '../postBlock/postBlock.js';

import './findBlock.css';

class FindBlock extends Component{
	constructor( props ){
		super( props )
		this.state={
			adds: []
		}
	}

	componentWillReceiveProps( newProps ){
		if( newProps.adds ){
			this.setState({
				adds: newProps.adds
			})
		}
	}

	render(){
		const adds = this.state.adds
		return(
			<div>
				{adds.map( add => {return <PostBlock data={add}/>})}
			</div>	
		)
	}
}

const mapStateToProps = state =>({
	adds: state.post.findedPosts
})

export default connect( mapStateToProps )( FindBlock )