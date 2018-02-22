import React from 'react';

class Link extends React.Component{
	handleClick = (event) => {
		event.preventDefault();
		alert('You clicked me!');
	};

	render(){
		return <a href={this.props.url} onClick={this.handleClick}>{this.props.caption}</a>
	}
};

export default Link;