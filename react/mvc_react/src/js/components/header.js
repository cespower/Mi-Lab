import React from 'react';
import Task from '../model/task';

class Header extends React.Component{
	//handleKeyDown = (event) => {
	handleKeyDown(event){
		if(event.keyCode === 13){
			event.preventDefault();
			new Task({ name: event.target.value });
			event.target.value = '';
		}
	};

	render(){
		return(
			<header className='header'>
				<h1>MVC React</h1>
				<input
					autofocus
					className='form-control'
					onKeyDown={this.handleKeyDown}
					placeholder='What needs to be done?'
					/>
			</header>
		)
	}
};

export default Header;