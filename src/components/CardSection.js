import React from 'react';
import { View } from 'react-native';

const CardSection = ({ children }) => (
  <View style={containerStyle}>
    {children}
  </View>
);

const containerStyle = {
  borderBottomWidth: 1,
  padding: 5,
  backgroundColor: '#fff',
  flexDirection: 'row',
  borderColor: '#ddd',
  position: 'relative'
};

export default CardSection;
