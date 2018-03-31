import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Provider } from 'react-redux';
import { createStore } from 'redux';
import reducers from './reducers';

class App extends Component {
  render() {
    return (
      // NOTE: The provider tag is what connects to all those different connect tags that we scatter about our application.
      // And the provider tag makes sure that all those connect tags can get access to the store, grab out redux state and then pass it off to the individual components.
      <Provider store={createStore(reducers)}>
        <View>
          <Text>
            Hello!
          </Text>
        </View>
      </Provider>
    );
  }
}

export default App;
