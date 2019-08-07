import React, { Component } from 'react';

import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';

import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';

import Routes from './Routes';
import reducers from './reducers';

class App extends Component {
  componentWillMount() {
    const firebaseConfig = {
      apiKey: 'AIzaSyCJg99X0r7AR3HU2bR0BSNfsRQuJjKrpV8',
      authDomain: 'apple-37b6c.firebaseapp.com',
      databaseURL: 'https://apple-37b6c.firebaseio.com',
      projectId: 'apple-37b6c',
      storageBucket: '',
      messagingSenderId: '117574320484',
      appId: '1:117574320484:web:114fedfbf4200534'
    };
  
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return (
      <Provider store={createStore(reducers, {}, applyMiddleware(ReduxThunk))}>
        <Routes />
      </Provider>
    );
  }
}

export default App;
