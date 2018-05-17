import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link} from "react-router-dom";

class Info extends Component {
	render() {
		let result= this.props.location.query.marks;
		let cell= [];
		let cell1= [];
		let rows= [];
		let column= [];

		for(let i in result) {
			cell.push(<td key= {i} id={i}>{result[i]}</td>)
		}

		rows.push(<tr><b>{cell}</b></tr>)

		for(let i in result) {
			cell1.push(<td key= {i} id={i}>{i}</td>)
		}

		column.push(<tr><b>{cell1}</b></tr>)

		return(
			<div>
				
				<Link to={{ pathname: '/' }}>BacktoHome</Link>
				<h1>NAME: {this.props.location.query.firstName}</h1>

				<table id='simple-board'>
					
					<thread>
	 					{column}
					</thread>

					<tbody>
						{rows}
					</tbody>

				</table>
			</div>
		);
	}
}

export default Info;
