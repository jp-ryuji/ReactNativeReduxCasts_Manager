import React from 'react';
import { View } from 'react-native';

const CardSection = (props) => {
  return (
    // NOTE: {[<former>, <latter>]} The former one overwrites the latter one.
    <View style={[styles.containerStyle, props.style]}>
      {props.children}
    </View>
  );
};

const styles = {
  containerStyle: {
    borderBottomWidth: 1,
    padding: 5,
    backgroundColor: '#fff',
    justifyContent: 'flex-start',
    flexDirection: 'row',
    borderColor: '#ddd',
    position: 'relative'
  }
};

export { CardSection };
