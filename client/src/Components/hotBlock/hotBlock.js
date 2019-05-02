import React, { Component } from 'react';
import { connect }  from 'react-redux';

import './hotBlock.css';

import PostCard from '../postCard/postCard.js';

import { getHotAdds } from '../../actions/postActions.js';

	class HotBlock extends Component{
		constructor( props ){
			super( props )
			this.state={
				adds:[]
			}

			this.props.getHotAdds()
		}

		componentWillReceiveProps( newProps ){
			if( newProps.hotAdds ){
				this.setState({
					adds: newProps.hotAdds
				})
			}
		}

		render(){
			return(
				<div className='hot-block'>
					{this.state.adds.map(el => <PostCard key={el.id} id={el.id} add={el}/>)}
				</div>
			)
		}
	}


const mapStateToProps = state => ({
	hotAdds: state.post.hotAdds
})

export default connect(mapStateToProps, { getHotAdds })(HotBlock)