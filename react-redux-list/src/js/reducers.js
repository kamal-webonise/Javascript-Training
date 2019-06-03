import { combineReducers } from 'redux';
import DATA from './result.json';

var obj = JSON.parse(DATA); // Conversion of Json String into Object.

const dataReducer = (state = { messages: obj }, action = null) => { // Updating Permanent Store Object
  const { type, payload} = action;

  switch(type) {
    case 'ADD_DATA':
      return {
        state,
        messages: action.payload
      }  
    default:
      return state;
  }
};

const resultReducer = (state = { results: []}, action = null) => { // Updating Temporary Store Object
  const { type, payload} = action;

  switch(type) {
    case 'SHOW_DATA':
      return {
        state,
        results: action.payload
      }
    default: 
      return state;
  }
};

const toogleButton = ( state = { bool : true }, action = null) => {
  switch(action.type){
    case 'TOOGLE': 
      return {
        state,
        bool: action.payload
      }
    default:
      return state;  
  }
} 

const reducers = combineReducers({
  messages: dataReducer,
  result: resultReducer,
  toogle: toogleButton
});

export default reducers;
