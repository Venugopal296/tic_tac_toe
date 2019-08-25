import React from 'react';
import classes from './App.module.css';
import { createStore } from 'redux';
import { Provider } from 'react-redux';

import Outline from './Components/Outline/Outline'
import rootReducer from './Redux/Reducer/Reducer';

const store = createStore(rootReducer);

function App() {
  return (
    <Provider store={store}>
      <div className={classes.App}>
        <Outline />
      </div>
    </Provider>
  );
}

export default App;
