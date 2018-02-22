import React from 'react';

var dataSource = [
	{ name:'Superman',  power:'fly with underwear' },
	{ name:'Batman',    power:'belt with gadgets' },
	{ name:'Spiderman', power:'Jump like a monkey' },
	{ name:'Hulk',      power:'Angry with anyone'}
];

class Heroes extends React.Component{
	/*
	componentDidMount(){
		setTimeout(function(){
			this.setState({ list:dataSource });
		}.bind(this), 2000);
	};
	*/

	state = {
		list:[]
	};

	fetchData = () => {
		setTimeout(
			function(){
				this.setState({ list:dataSource });
			}.bind(this), 2000
		);
	};

	handleReset = () => {
		this.setState({ list:[] });
	};

	handleFetch = () => {
		this.fetchData();
	};

	render(){
		if(!this.state.list.length){
			return (
				<div>
					No list!
					<br />
					<button onClick={this.handleFetch}>Fetch</button>
				</div>
			);
		}

		return (
			<div>
				<ul>
					{
						this.state.list.map(
							function(heroe, index){
								return (
									<li key={index}>
										{heroe.name} the {heroe.power}!
									</li>
								);
							}
						)
					}
				</ul>
				<button onClick={this.handleReset}>Reset</button>
			</div>
		);
	}
};

export default Heroes;