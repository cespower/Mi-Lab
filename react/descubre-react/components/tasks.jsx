import React from 'react';

class Tasks extends React.Component{
	render(){
		return (
			<section>
			<header />
			<ul>
			{ this.props.children }
			</ul>
			<footer />
			</section>
		)
	}
};

export default Tasks;