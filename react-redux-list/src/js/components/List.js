import React, { Component } from 'react';
import { connect } from 'react-redux';
import * as actions from '../actions';
import Display from './Display';
import InputBox from './inputBox';
import CheckBox from './checkBox';

class List extends Component {
  constructor(props) {
    super(props);
    this.addPercentage = this.addPercentage.bind(this);
  }
  
  addPercentage() {
      let result = Object.assign([],this.props.results.messages.results);
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

      let newData = { "results": result };

      this.props.dispatch(actions.addData(newData)); // Updates the Permanent Store Object (whose value cann't be altered.)
      this.props.dispatch(actions.showData(newData)); // Updates the Temporary Store Object (whose value is used for rendering purpose.)

  }

  render() {

    if(this.props.toogles.bool) { // One Time call to add Percentage in Permanent Store Object.

        this.addPercentage();
        this.props.dispatch(actions.toogle());

    }
    return (
      <div className="container"> 

        <InputBox />
        <CheckBox />
        <Display />

      </div>
    );
  }
}


const mapStateToProps = (state) => {
  return {
    results: state.messages,
    toogles: state.toogle
  }
}

const Lists = connect(mapStateToProps)(List);

export default Lists;
