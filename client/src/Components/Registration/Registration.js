import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

// import $ from 'jquery'

// import IMask from 'imask';

import { registration } from '../../actions/userActions.js';

import './Registration.css';

class Registration extends Component{
	constructor(props){
		super(props)
		this.state = {
			login: '',
			password: '',
			password2: '',
			phone: '',
			errors: {}
		}

		this.inputChanged = this.inputChanged.bind(this);
		this.formSubmitted = this.formSubmitted.bind(this);
	}

	componentWillReceiveProps ( newProps ){
		if( newProps.errors ){
			this.setState({errors: newProps.errors})
		}
	}

	inputChanged( event ){
		let currentName = event.target.getAttribute('name')
		this.setState({
			[currentName]: event.target.value
		})
	}

	formSubmitted( event ){
		event.preventDefault();
		
		var userData = {
			login: this.state.login,
			password: this.state.password,
			password2: this.state.password2,
			phone: this.state.phone
		};

		this.props.registration( userData, this.props.history )
	}

	render(){
		return(
			<div className='registration-main'>
				<form onSubmit={this.formSubmitted} className="registration-window">
					<h2>Регистрация</h2>
					<div className="input">	
						<input placeholder="Mail" onChange={this.inputChanged} name="login" type="text"/>
						{this.state.errors.login && <div className="error">{this.state.errors.login}</div>}
					</div>
					<div className="input">
						<input placeholder="Пароль" onChange={this.inputChanged} name="password" type="password"/>
						{this.state.errors.password && <div className="error">{this.state.errors.password}</div>}
					</div>				
					<div className="input">
						<input placeholder="Повторите пароль" onChange={this.inputChanged} name="password2" type="password"/>
						{this.state.errors.password2 && <div className="error">{this.state.errors.password2}</div>}
					</div>				
					<div className="input">
						<input placeholder="Тел. номер" onChange={this.inputChanged} id='phone' name="phone" type="tel" maxLength='11'/>
						{this.state.errors.phone && <div className="error">{this.state.errors.phone}</div>}
					</div>
					{this.state.errors.passport && <div className="error">{this.state.errors.passport}</div>}
					<button className="btn btn-secondary button-in">Регистрация</button>
					<p>У вас уже есть аккаунт ? <Link className="link" to="/login">Войти</Link></p>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	errors: state.errors
})

export default connect(mapStateToProps, { registration }) (Registration);