const initialState = {
	newProduct : '',
	hotAdds: '',
	currentAdd: '',
	findedPosts: '',
	postsCount: '',
	myPost:''
}

export default function( state=initialState, action){
	switch( action.type ){
		case "ADD_POST":
			return{
				...state,
				newProduct: action.newPost
			};
		case "GET_HOT":
		return{
			...state,
			hotAdds: action.hotAdds
		};		
		case "GET_ADD":
		return{
			...state,
			currentAdd: action.add
		};
		case "ADD_FINDED":
		return{
			...state,
			findedPosts: action.findedAdds
		}
		case 'GET_COUNT':
		return{
			...state,
			postsCount: action.count
		}
		case 'MY_POST':
		return{
			...state,
			myPost: action.myPost
		}
		default:
			return state
	}
}