import React from 'react';
import { Provider } from 'react-redux';
import store from './store/store';
import Сompanies from './components/Сompanies';

const App = () => (
  <div className="App">
    <Provider store={store}>
      <Сompanies />
    </Provider>
  </div>
);

export default App;
