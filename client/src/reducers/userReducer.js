const initialState = {
	isAuth: false,
	user: {}
}

export default function(state = initialState, action){
	switch( action.type ){
		case 'AUTH_USER':
			return {
				...state,
				isAuth: action.isAuth
			};
		case 'SET_USER':
			return {
				...state,
				user: action.user
			};
		default:
			return state;
	}
}