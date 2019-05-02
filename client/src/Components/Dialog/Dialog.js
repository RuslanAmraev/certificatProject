import React, { Component } from 'react';

import './Dialog.css';


class Dialog extends Component{
	constructor(props){
		super(props)
		this.state={

		}
	}


	render(){
		return(
			<div className='dialog-container'>
				<h2 className='dialog-title'>Диалог</h2>
				<div className='dialog-main'>
					<div className='dialog-interlocutor'>
						<p>this.state.interlocutor</p>
					</div>
					<div className='dialog-messages-block'>


					</div>
					<div className='dialog-message-input-block'>
						<textarea className='dialog-input' placeholder='Написать сообщение...' name="message" id="message" cols="30" rows="3">sdsadsadsa</textarea>
						<button className='dialog-button'></button>
					</div>
				</div>
			</div>
		)
	}
}

export default Dialog;