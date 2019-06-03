import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import React, { Component } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import Lists from './components/List';
import Info from './components/info';
import NoMatch from './components/NoMatch';


class Root extends Component {
  render() {
    return(
      <Provider store={store}>
        <Router>
          <Switch>
			      <Route exact path= "/" component= { Lists } />
			      <Route path= '/info/:id' component= { Info } />
			      <Route component={NoMatch} />
			    </Switch>  
        </Router>
      </Provider>
    );
  }
}

export default Root;
