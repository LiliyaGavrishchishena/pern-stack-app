import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { createLogger } from 'redux-logger';
import thunk from 'redux-thunk';

import { productsReducer } from './products';

const rootReducer = combineReducers({
  products: productsReducer,
});

const logger = createLogger();
const middlewares = applyMiddleware(logger, thunk);
const enhancer = composeWithDevTools(middlewares);

const store = createStore(rootReducer, enhancer);

export default store;
