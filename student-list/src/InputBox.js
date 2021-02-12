import React, { Component } from 'react';

class InputBox extends Component {

	constructor(props) {
		super(props);
		this.text = React.createRef();
		this.handleClick = this.handleClick.bind(this);
		this.handleChange = this.handleChange.bind(this);
		this.state = {
			val: '' 
		}	
	}

	handleChange(e) {
		this.setState({val : e.target.value});
	}

	handleClick(e) {
		let val= this.text.current.value;
		this.props.changeArray(val);
		this.setState({val:''});
	}
	render() {
		return(
			<div>
				<input type="text" placeHolder = "Search Box" ref= {this.text} value={this.state.val} onChange={this.handleChange} />
				<button onClick = {this.handleClick}> Search </button>
			</div>	
		)
	}
}

export default InputBox;