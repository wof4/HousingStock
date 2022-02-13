import thunkMiddleware from 'redux-thunk';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import mainReducer from './reducers/mainReducer';
import clientReducer from './reducers/clientReducer';

export const reducers = combineReducers({
  mainReducer,
  clientReducer,
});

const store = createStore(reducers, applyMiddleware(thunkMiddleware));
window.store = store;

export default store;
