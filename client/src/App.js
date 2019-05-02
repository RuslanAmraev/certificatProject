import React, { Component } from 'react';
import { Provider } from 'react-redux';
import{ BrowserRouter, Route, Switch } from 'react-router-dom';
import store from './store.js';


import Navbar from './Components/Navbar/Navbar.js';
import Login from './Components/Login/Login.js';
import PostPage from './Components/postPage/postPage.js';
import Registration from './Components/Registration/Registration.js';
import AddPost from './Components/AddPost/AddPost.js';
import NotFound from './Components/common/notFound.js';
import HomePage from './Components/HomePage/HomePage.js';
import Account from './Components/Account/Account.js';
	
import './app.css';

class App extends Component {
  render() {
    return (
		<Provider store = {store}>	
			<BrowserRouter>	
				<div className="app">
					<Navbar/>
					<Switch>
						<Route exact path ='/' component={ HomePage }/>
						<Route exact path ='/post/:id' component={ PostPage }/>
						<Route exact path='/login' component={ Login }/>
						<Route exact path='/registration' component={ Registration }/>
						<Route exact path='/addpost' component={ AddPost }/>
						<Route exact path='/myProfile' component={ Account }/>
						<Route component={ NotFound }/>
					</Switch>
				</div>
			</BrowserRouter>
		</Provider>
    );
  }
}

export default App;
