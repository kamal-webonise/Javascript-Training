import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class Display extends Component {

	constructor(props) {
		super(props);
		this.state = {
			data: this.props.data
		}
	}

	static getDerivedStateFromProps(newProps, prevState) {
		if(newProps != prevState) {
			return({
				data: newProps.data
			})
		}
	}
	

	render() {

		let rows = [];
		let result = [...this.state.data.results];		

		for( let i = 0; i < result.length; i++) {
			let rowId = `row${i}`
			let cell = []
			var columnName = ["lastName","percentage"]
			let obj;
			obj= result[i];
			cell.push(<td key={i} id={i}>
				< Link to={{pathname: "/info/obj", query: obj }} > 
				  {result[i]['firstName']}
				</Link>
			</td>)

			for ( var j = 0; j < 2;j++) {
				var cellId = `cell{i}-${j}`
				cell.push(<td key={cellId} id={cellId}>{result[i][columnName[j]]}</td>)
			}
			rows.push(<tr key={i} id={rowId}>{cell}</tr>)
		}

		


		return(
			<div>
				<table id='simple-board'>
					
					<thread>
	 					<tr>
							<th>FirstName</th>
							<th>LastName</th>
							<th>Percentage</th>
						</tr>
					</thread>

					<tbody>
						{rows}
					</tbody>

				</table>
			</div>
		);
	}
}

export default Display;

	
  