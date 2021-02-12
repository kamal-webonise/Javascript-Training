import React, { Component } from 'react';

class CheckBox extends Component {

	constructor(props) {
		super(props);
	}

	render() {
		return(
			<ul>
				<li>
					<input type= "checkbox" id= '1' onChange= {this.props.changeCheck} /> 
					<span>Distinction </span>
				</li>

				<li>	
					<input type = "checkbox" id='2' onChange= {this.props.changeCheck}/>
					<span> First Class </span>
				</li>

				<li>	
					<input type = "checkbox" id='3' onChange= {this.props.changeCheck}/>
					<span> Second Class </span>
				</li>

				<li>	
					<input type = "checkbox" id='4' onChange= {this.props.changeCheck}/>
					<span> Fail </span>
				</li>
			</ul>
		)
	}
}

export default CheckBox;