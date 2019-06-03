import React, { Component } from 'react';
import * as actions from '../actions';
import { connect } from 'react-redux';

class CheckBox extends Component {

	constructor(props) {
		super(props);
	}

	changeCheck(e) {

		let tempData = [...this.props.result.messages.results];
		let status = [];
		let grade = [100,65,55,33];
		let dummy= {};

		for(let i = 0; i < 4; i++) {
			let ele = document.getElementById(i+1);
			status[i] = ele.checked;
		}
		
		for(let i = 3; i >= 0 ; i-- ) {
			if(!status[i]) {
				tempData.map((obj)=> {
					if( obj.percentage < grade[i] ) {
						let index;
						index=tempData.indexOf(obj);
						tempData.splice(index,1);
					}
				});
			}
		}
		
		dummy = { results: tempData}; 
		this.props.dispatch(actions.showData(dummy)); //// Updates the Temporary Store Object (whose value is used for rendering purpose.)
	
	}

	render() {
		return(
			<ul>
				<li>
					<input type= "checkbox" id= '1' onChange= {() => { this.changeCheck() } } /> 
					<span>Distinction </span>
				</li>

				<li>	
					<input type = "checkbox" id='2' onChange= {() => { this.changeCheck() } } />
					<span> First Class </span>
				</li>

				<li>	
					<input type = "checkbox" id='3' onChange= {() => { this.changeCheck() } } />
					<span> Second Class </span>
				</li>

				<li>	
					<input type = "checkbox" id='4' onChange= {() => { this.changeCheck() } } />
					<span> Fail </span>
				</li>
			</ul>
		)
	}
}

const mapStateToProps = (state) => {
  return {
    result: state.messages
  }
}

const checkBox = connect(mapStateToProps)(CheckBox);

export default checkBox;
