import { applyMiddleware, createStore } from 'redux';

// middlewares
import logger from 'redux-logger';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middlewares = applyMiddleware(thunk, logger);

const store = createStore(reducers, middlewares);

export default store;