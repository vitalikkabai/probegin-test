import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Сomanies from './components/Сompanies';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Сomanies />
    </Provider>
  </div>
);

export default App;
