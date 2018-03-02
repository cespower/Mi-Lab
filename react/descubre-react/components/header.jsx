import React from 'react';

export default class Header extends React.Component{
	render(){
		return (
			<header>
				<a href="#pending">pending</a>&nbsp;
				<a href="#done">done</a>&nbsp;
				<a href="#all">all</a>
			</header>
		)
	}
};
