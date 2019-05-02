import React, { Component } from 'react';

import Menu from '../Menu/menu.js';
import HotBlock from '../hotBlock/hotBlock.js';
import FindBlocks from '../findBlocks/findBlock.js';


class HomePage extends Component{
	render(){
		return(
				<div>
					<Menu/>
					<HotBlock/>
					<FindBlocks/>
				</div>
			)
	}
}

export default HomePage;