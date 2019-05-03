import React, { Component } from 'react';
import { connect } from 'react-redux';

import { addComment, removeComment } from '../../actions/postActions.js';

import './Comments.css';

class Comments extends Component{
	constructor(props){
		super(props)
		this.state={

		}

	this.submitComment = this.submitComment.bind(this)
	this.textChange = this.textChange.bind(this)
	this.deleteComment = this.deleteComment.bind(this)
}
	textChange( event ){
		this.setState({
			text: event.target.value,
			messages: []
		})
	}

	submitComment(){
		let textfrom = this.state.text
		let userfrom = this.props.user
		let data = {user: userfrom, text: textfrom, post: this.state.post}
		this.props.addComment( data )
		document.getElementById('commentInput').value = ''
	}
	
	deleteComment( event ){
		let targetId = event.target.getAttribute('commentid')
		let post = this.props.currentAdd
		let data = { postid: post, target: targetId }
		this.props.removeComment( data )
	}

	componentWillReceiveProps(newProps){
		if(newProps.post){
			this.setState({
				post: newProps.post
			})
		}
	}
	
	render(){
				
		return(
			<div className='commentary-box'>
				<h2 className='commentary-title'>Комментарии</h2>
				<div>
					{ this.props.messages && this.props.messages.map(el=>{ return <div className='comment' key={el._id}><div className='comment-author'><strong>{ el.user }</strong>{ el.user === this.props.user && <p className='comment-remove' commentid={ el._id } onClick={ this.deleteComment }>удалить</p>}</div><p className='comment-text'>{el.comment}</p></div> })}
				</div>
				<div className='input-box'>
					<h2 className='input-title'>Написать комментарий</h2>
					<div className='input-box-item'>
						<p>Сообщение</p>
						<textarea onChange={this.textChange} className='comment-input' name="commentInput" id="commentInput" cols="30" rows="10"></textarea>
					</div>
					<div className='errors-container'>
						{ this.props.errors.user && <p>{this.props.errors.user}</p>}
						{ this.props.errors.text && <p>{this.props.errors.text}</p>}
					</div>
					<div className='button-container'>
						<button onClick={this.submitComment} className='commentary-button'>Отправить</button>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = state =>({
	post: state.post.currentAdd._id,
	user: state.user.user.login,
	currentAdd: state.post.currentAdd._id,
	errors: state.errors
})

export default connect(mapStateToProps, { addComment, removeComment })(Comments);