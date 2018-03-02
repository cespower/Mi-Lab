import React from 'react';
import Products from './products';

const storeProducts = [
	{ id:1, name:'Macbook Air 11'},
	{ id:2, name:'Macbook 2015'},
	{ id:3, name:'Macbook Air 13'}
];

class Cart2 extends React.Component{
	handleClick = (id, event) => {
		console.log(id, event);
	};

	render(){
		return <Products store={storeProducts} onClick={this.handleClick} />
	}
};

export default Cart2;