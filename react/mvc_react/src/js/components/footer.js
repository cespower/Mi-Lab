import React from 'react';
import PropTypes from 'prop-types';
import Task from '../model/task';

class Footer extends React.Component{
	/*
	static propTypes = {
		context: React.PropTypes.string,
		pending: React.PropTypes.number
	};
	*/

	/*static defaultProps = {
		pending: 0
	};*/

	constructor(){
		super();
		
		this.state = {
			contexts:[
				{href:'#/', caption:'All'},
				{href:'#/active', caption:'Active'},
				{href:'#/completed', caption:'Completed'}
			]
		};
	}

	//handleClearCompleted = (event) => {
	handleClearCompleted(event){
		var tasks = Task.completed();

		for(var i=0, len=tasks.length; i < len; i++){
			tasks[i].destroy();
		}
	};

	render(){
		var context = this.props.context;

		return(
			<footer className='footer'>
				<span className='todo-count'><strong>{this.props.pending}</strong> item left</span>
				<ul className='filters'>
				{
					this.state.contexts.map(function(item, index){
						let className = item.caption.toLowerCase() == context ? 'selected':'';

						return(
							<li key={index}><a className={className} href={item.href}>{item.caption}</a>
							</li>
						)
					})
				}
				</ul>
				<button 
					className='clear-completed'
					onClick={this.handleClearCompleted}
					>
					Clear completed
				</button>
			</footer>
		)
	}
};

Footer.propTypes = {
	context: PropTypes.string,
	pending: PropTypes.number
};

Footer.defaultProps = {
	pending: 0
};

export default Footer;