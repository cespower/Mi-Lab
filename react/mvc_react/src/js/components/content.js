import React from 'react';
import PropTypes from 'prop-types';
import Todo from './todo';

class Content extends React.Component{
	constructor(){
		super();

		this.handleToggle = this.handleToggle.bind(this);
	}
	/*
	static propTypes = {
		dataSource: React.PropTypes.array
	};
	*/

	//handleToggle = (event) => {
	handleToggle(event){
		let items = this.props.dataSource;

		for(let i=0, len = items.length; i < len; i++){
			items[i].completed = event.target.checked;
		}
	};

	render(){
		return(
			<section className='main'>
				<input className='toggle-all' type='checkbox' onClick={this.handleToggle} />
				<label htmlFor='toggle-all'>Mark all as complete</label>
				<ul className='list-group'>
				{
					this.props.dataSource.map(function(item, index){
						return ( <Todo key={item.uid} data={item} /> );
					})
				}
				</ul>
			</section>
		)
	}
};

Content.propTypes = {
	dataSource: PropTypes.array
};

export default Content;