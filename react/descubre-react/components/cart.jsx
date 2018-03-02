import React from 'react';
import Product from './product';

class Cart extends React.Component{
	handleClick = ( id, event ) => {
		console.log(id, event);
	};

	render(){
		return(
			<ul>
				<Product id={1} name="Macbook Air 11" onClick={this.handleClick} />
				<Product id={2} name="Macbook 12'" onClick={this.handleClick} />
				<Product id={3} name="Macbook Air 13" onClick={this.handleClick} />
			</ul>
		);
	}
};

export default Cart;