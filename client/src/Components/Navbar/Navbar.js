import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import '../Navbar/Navbar.css';

class Navbar extends Component{
	constructor(){
		super()
		this.state={
			isAuth: false,
		}
	}

	componentWillReceiveProps(newProps){
		if(newProps.isAuth){
			this.setState({
				isAuth: newProps.isAuth
			})
		}
	}

	render(){
		const onlineLinks = (<ul className="d-flex nav-Links">
								<Link className="nav-links-buttons" to='/login'>Сообщения</Link>
								<Link className="nav-links-buttons" to='/myProfile'>Кабинет</Link>
							</ul>);
		const offlineLinks = (<ul className="d-flex nav-Links">
								<Link className="nav-links-buttons" to='/registration'>Регистрация</Link>
								<Link className="nav-links-buttons" to='/login'>Войти</Link>
							</ul>);
		const addPostButton = (	<Link to='/addpost' className="add-button">
									<img src="images/icons8-plus.svg" alt="+"/>
									<span>Подать объявления</span>
								</Link>)		
		const addPostOffline = (	<Link to='/login' className="add-button">
									<img src="images/icons8-plus.svg" alt="+"/>
									<span>Подать объявления</span>
								</Link>)


		return(
			<div>	
				<div className="d-flex justify-content-between navbar">
					<Link className="d-flex logo" to='/'>
						<p>S</p>
						<p>H</p>
						<img className="wheel" src="images/logo.png" alt="logo"/>
						<p>P</p>
					</Link>
					{this.state.isAuth ? onlineLinks : offlineLinks}
				</div>
				{this.state.isAuth ? addPostButton : addPostOffline}
			</div>
		)
	}
};


const mapStateToProps = ( state ) =>({
	isAuth: state.user.isAuth
})
export default connect(mapStateToProps)(Navbar);