import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { login } from '../../actions/userActions.js';

import './Login.css'

class Login extends Component{
	constructor(props){
		super(props)
		this.state = {
			login: '',
			password: '',
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
		this.setState({
			[event.target.name]: event.target.value
		})
	}

	formSubmitted( event ){
		event.preventDefault();

		var userData = {
			login: this.state.login,
			password: this.state.password
		};

		this.props.login( userData, this.props.history )
	}

	render(){
		return(
			<div className='login-main'>
				<form onSubmit={this.formSubmitted} className="login-window">
					<h2>Авторизация</h2>
					<div className="input">	
						<input onChange={this.inputChanged} name="login" type="text" placeholder="Mail" autocomplete="off"/>
						{this.state.errors.login && <div className="error">{this.state.errors.login}</div>}
					</div>
					<div className="input">
						<input onChange={this.inputChanged} name="password" type="password" placeholder="Пароль"/>
						{this.state.errors.password && <div className="error">{this.state.errors.password}</div>}
					</div>
					{this.state.errors.passport && <div className="error">{this.state.errors.passport}</div>}
					<button className="btn btn-secondary button-in">Войти</button>
					<p>Первый раз на сайте ? <Link className="link" to="/registration">Регистрация</Link></p>
				</form>
			</div>
		);
	}
}

const mapStateToProps = (state) => ({
	errors: state.errors
})

export default connect(mapStateToProps, { login })(Login);