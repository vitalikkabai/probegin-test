import { combineReducers, createStore } from 'redux';
import –°ompaniesReducer from './–°ompaniesReducer/CompanyReducer';

const appReducer = combineReducers({
  –°ompaniesReducer,
});

const rootReducer = (state, action) => appReducer(state, action);

const store = createStore(
  rootReducer,
  // eslint-disable-next-line
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
);

window.store = store;

export default store;
