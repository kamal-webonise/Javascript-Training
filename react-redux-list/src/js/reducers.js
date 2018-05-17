import { combineReducers } from 'redux';

const dataReducer = (state = { messages: {
  "results": [
  
    {"firstName": "Sanket", "lastName":"Gadade","marks":{"english":70, "hindi":60,"mathematics":46}},
    {"firstName": "Shubham", "lastName":"Laad","marks":{"english":40, "hindi":55,"mathematics":46}},
    {"firstName": "Swapnil", "lastName":"Patil","marks":{"english":50, "hindi":60,"mathematics":77}},
    {"firstName": "Ankita", "lastName":"Pawar","marks":{"english":50, "hindi":55,"mathematics":46}},
    {"firstName": "Vijayraj", "lastName":"Nathe","marks":{"english":35, "hindi":45,"mathematics":11}}

  ]
}}, action = null) => {
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

const resultReducer = (state = { results: []}, action = null) => {
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
