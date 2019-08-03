import React, { Component } from 'react';
import Routes from './Routes';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';
import firebase from 'firebase';


class App extends Component {

  componentWillMount() {

    var firebaseConfig = {
      apiKey: "AIzaSyCJg99X0r7AR3HU2bR0BSNfsRQuJjKrpV8",
      authDomain: "apple-37b6c.firebaseapp.com",
      databaseURL: "https://apple-37b6c.firebaseio.com",
      projectId: "apple-37b6c",
      storageBucket: "",
      messagingSenderId: "117574320484",
      appId: "1:117574320484:web:114fedfbf4200534"
    };
  
    firebase.initializeApp(firebaseConfig);
  }

  render() {
    return(
      <Provider store={createStore(reducers)}>
        <Routes />
      </Provider>
    )
  }
}

export default App;
