import React, { Component } from 'react';
import InputBox from './InputBox.js';
import CheckBox from './CheckBox.js';
import Display from './Display.js';
import DATA from './result.json'

class List extends Component {

	constructor(props) {
		debugger;
		super(props);
		this.state = {
			data: { results : DATA},
			permanentData: { results : DATA},
			oneTime: true
		}
		this.default = this.default.bind(this);
		this.changeArray = this.changeArray.bind(this);
		this.changeCheck = this.changeCheck.bind(this);
	}

	changeArray(name) {
		let flag = 0;
		let temp = [...this.state.permanentData.results];
		let tempObj = []; 
		

		temp.map((obj) => {
			if(obj.firstName === name || obj.lastName === name) {
				flag=1;
				tempObj.push(obj);
			}
		});

		if (flag == 1) {
			let newData = { results: tempObj };
			this.setState({
				data: newData
			})
		}	
	} 

	changeCheck(e) {

		let tempData = [...this.state.permanentData.results];
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

		this.setState({
			data: dummy
		});
	}

	default() {
		let result = [...this.state.data.results];
		let newArr= [];

		result.map( (val) => 
		{ 
			newArr[newArr.length]=0; 
			for( let i in val.marks) { 
				newArr[newArr.length - 1] += val.marks[i]; 
			} 
		})
		let count = 0;

		result.map( (val) =>
		{
			val.percentage = Math.floor(newArr[count]/3);
			count++;
		})

		let newData = {	results: result };
		
		this.setState({	data: newData,
						permanentData: newData,
						oneTime: false
		});

	}	

	render() {
		if(this.state.oneTime)
		{
			this.default()
		}
		return(
			<div>
					
				<InputBox changeArray = { this.changeArray } />
				<CheckBox changeCheck = { this.changeCheck } />
				<Display data= {this.state.data} />
			</div>
		);
	}
}

export default List;

	
  