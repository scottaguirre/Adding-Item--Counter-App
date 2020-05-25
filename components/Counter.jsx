import React, { Component } from 'react';

class Counter extends Component {
	
	formCount(){
		
		const { value } = this.props.counter;
		return value === 0 ? 'Zero' : value;
	}

	styles = {
		
		fontSize: 10,
		fontWeight: 'bold'
	
	};
		
	render(){
		
		let { id }                = this.props.counter;
		let { onClick, onDelete } = this.props;
		return(
			<div className="mb-2">
				<span style={this.styles} className={this.getBadgeClasses()}>{this.formCount()}</span>
				<button className='btn btn-secondary btn-small m-2'
					    onClick={ onClick.bind(this, id) }>
					    Increment
				</button>
				<button className='btn btn-danger btn-small'
					    onClick={ onDelete.bind(this, id) }>
					    Delete
				</button>

			</div>
		);
	}

	getBadgeClasses(){
		
		let classes = 'badge m-2 badge-';
		    classes+=  this.props.counter.value === 0 ? 'warning' : 'primary';
		return classes;
	}



}

export default Counter;