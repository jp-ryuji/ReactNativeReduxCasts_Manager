import React, { Component } from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import firebase from 'firebase';
import ReduxThunk from 'redux-thunk';
import reducers from './reducers';
import LoginForm from './components/LoginForm';
import Router from './Router';

class App extends Component {
  componentWillMount() {
    const config = {
      apiKey: 'AIzaSyD0QE3tI40TZDgJ34gh7KLhruQmHV0j2fY',
      authDomain: 'nonnative-5a3a9.firebaseapp.com',
      databaseURL: 'https://nonnative-5a3a9.firebaseio.com',
      projectId: 'nonnative-5a3a9',
      storageBucket: 'nonnative-5a3a9.appspot.com',
      messagingSenderId: '827001301752'
    };

    firebase.initializeApp(config);
  }

  render() {
    const store = createStore(reducers, {}, applyMiddleware(ReduxThunk));

    return (
      // NOTE: The provider tag is what connects to all those different connect tags that we scatter about our application.
      // And the provider tag makes sure that all those connect tags can get access to the store, grab out redux state and then pass it off to the individual components.
      <Provider store={store}>
        <Router />
      </Provider>
    );
  }
}

export default App;
