import React, {Component} from 'react';
import Counter from './Counter';

class Counters extends Component {
	
	state = {
		
		counters: [
			
			{id: 1, value: 4},
			{id: 2, value: 0},
			{id: 3, value: 0},
			{id: 4, value: 0},
			{id: 5, value: 0}
		] 
		 
	};

	handleClick = (id) => {
		let counters = this.state.counters.slice();
		let index = counters.findIndex( counter => counter.id === id )
		counters[index].value++;
		this.setState({counters: counters});
		
		
	};

	handleDelete = (id) => {
		let counters = this.state.counters.slice();
		let newCounter = counters.filter(counter => counter.id !== id );
		this.setState({counters: newCounter});
	};

	
	handleReset = () => {
		let counters = this.state.counters.map( c => {
			
			c.value = 0;
			return c;
		});
		
		this.setState({counters: counters});
		
		
	};
	
	render(){
		return(
			<div>
				
				<button className='btn btn-success btn-lg m-2'
					onClick={this.handleReset}
				>
					Reset
				</button>
				{this.state.counters.map( counter => <Counter key={counter.id} 
														 counter={counter}
														 onClick={this.handleClick}
														 onDelete={this.handleDelete}
													/>)}
		
			</div>
		
		);
	}
}

export default Counters;