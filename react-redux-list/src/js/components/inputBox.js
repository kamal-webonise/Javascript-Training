import React , { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class InputField extends Component {

	constructor(props) {
		super(props);
		this.handleClick = this.handleClick.bind(this);
	}

	handleClick() {
		let text = this.refs.name.value;
		let temp = [...this.props.result.messages.results];
		let flag = 0;
		let tempObj = []; 

		temp.map((obj) => {
			if(obj.firstName === text || obj.lastName === text) {
				flag=1;
				tempObj.push(obj);
			}
		});

		if (flag == 1) {
			let newData = { results: tempObj };
			this.props.dispatch(actions.showData(newData)); // Updates the Temporary Store Object (whose value is used for rendering purpose.)
		}
	}

	render() {
		return(
			<div>
				<h1>input</h1>
				<input type="text" ref="name" />
				<button onClick= {this.handleClick}>Find</button>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
  return {
    result: state.messages
  }
}

const InputFields = connect(mapStateToProps)(InputField);

export default InputFields;
