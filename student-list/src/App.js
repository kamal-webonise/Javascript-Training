import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route} from "react-router-dom";
import List from './List.js';
import Info from './Info.js';
import NotFound from './NotFound.js';

class App extends Component {
  render() {
    return (
      <Router>
        <switch>
          <Route exact path='/' component={List} />
          <Route name='info' path='/info/:id' component={Info} />
          <Route path="*" component = {NotFound} />
        </switch>  
      </Router>  
    );
  }
}

export default App;
