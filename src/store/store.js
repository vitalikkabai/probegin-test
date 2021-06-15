import { combineReducers, createStore } from 'redux';
import СompaniesReducer from './СompaniesReducer/CompanyReducer';

const appReducer = combineReducers({
  СompaniesReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

const store = createStore(
  rootReducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;
