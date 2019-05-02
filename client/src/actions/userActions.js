import axios from 'axios';

export const login = ( data, history ) => dispatch =>{
	axios
	.post('/api/user/login', data)
	.then(res => {
		dispatch({
			type: 'AUTH_USER',
			isAuth: true
		});
		dispatch({
			type: 'GET_ERROR',
			errors: {}
		});
		dispatch({
			type: 'SET_USER',
			user: res.data
		})
		history.push('/')
	})
	.catch(err =>{
		dispatch({
			type: 'GET_ERROR',
			errors: err.response.data.errors
		})
	})
}

export const registration = ( data, history ) => dispatch =>{
	axios
	.post('/api/user/registration', data)
	.then(res => {
		dispatch({
			type: 'AUTH_USER',
			isAuth: true
		});
		dispatch({
			type: 'GET_ERROR',
			errors: {}
		});
		dispatch({
			type: 'SET_USER',
			user: res.data
		})
		history.push('/')
	})
	.catch(err =>{
		dispatch({
			type: 'GET_ERROR',
			errors: err.response.data.errors
		})
	})
}