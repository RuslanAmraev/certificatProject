import axios from 'axios';

export const addPost = ( data, history ) => dispatch =>{
	axios
	.post('/api/post/add', data)
	.then(res =>{
		dispatch({
			type: 'ADD_POST',
			newPost: res.data
		});
		dispatch({
			type: 'GET_ERROR',
			errors: {}
		});

		history.push('/post/' + res.data._id)
	})
	.catch(err=>{
		if( err ){
			dispatch({
			type: 'GET_ERROR',
			errors: err.response.data
		})
		}
	})
}


export const getHotAdds = () => dispatch =>{
	axios
	.get('api/post/getHot')
	.then(res=>{
		dispatch({
			type: 'GET_HOT',
			hotAdds: res.data
		});
		dispatch({
			type: 'GET_ERROR',
			errors: {}
		})
	})
	.catch(err=>{
		if( err ){
					dispatch({
			type: 'GET_ERROR',
			errors: err.response.data
			})
		}
	})
}

export const getAdd = ( id ) => dispatch =>{
	axios
	.get('/api/post/getpost/' + id)
	.then(res=>{
		dispatch({
			type: 'GET_ADD',
			add: res.data
		});
		dispatch({
			type: 'GET_ERROR',
			errors:{}
		})
	})
	.catch(err =>{
		if( err ){
			dispatch({
				type: 'GET_ERROR',
				errors: err.response.data
			})
		}
	})
}

export const findPosts = ( data ) => dispatch =>{
	axios
	.post('/api/post/findposts', data)
	.then(res =>{
		dispatch({
			type: 'ADD_FINDED',
			findedAdds: res.data
		})
		dispatch({
			type: 'GET_ERROR',
			errors: {}
		})
	})
	.catch( err =>{
		if(err){
			dispatch({
			type: 'GET_ERROR',
			errors: err.response.data
		})
		}
	})
}

export const getCount = () => dispatch =>{
	axios
	.get('/api/post/count')
	.then(res =>{
		dispatch({
			type: 'GET_COUNT',
			count: res.data
		})
		dispatch({
			type: 'GET_ERROR',
			errors: {}
		})
	})
	.catch(err=>{
		if(err){
			dispatch({
			type: 'GET_ERROR',
			errors: err.response.data
		})
		}
	})
}


export const getMyPost = (data) => dispatch =>{
	axios
	.get('/api/post/seller/' + data)
	.then(res=>{
		dispatch({
			type: 'MY_POST',
			myPost: res.data
		})
		dispatch({
			type: 'GET_ERROR',
			errors: {}
		})
	})
	.catch( err =>{
		if( err ){
			dispatch({
				type: 'GET_ERROR',
				errors: err.response.data
			})
		}
	})
}

export const addComment = ( data ) => dispatch =>{
	axios
	.post('/api/post/addcomment', data)
	.then( res =>{
		dispatch({
			type: 'GET_ADD',
			add: res.data
		})
		dispatch({
			type: 'GET_ERROR',
			comments: {}
		})
	})
	.catch( err =>{
		if( err ){
			dispatch({
				type: 'GET_ERROR',
				errors: err.response.data
			})
		}
	})
}

export const removeComment = ( data ) => dispatch =>{
	axios
	.post('/api/post/removecomment', data)
	.then( res =>{
		dispatch({
			type: 'GET_ADD',
			add: res.data
		})
		dispatch({
			type: 'GET_ERROR',
			errors: {}
		})
	})
	.catch(err=>{
		dispatch({
			type: 'GET_ERROR',
			errors: err.response.data
		})
	})
}