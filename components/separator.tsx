import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

const Separator = () => {
  return <View style={styles.separator} />;
};

export default Separator;

const styles = StyleSheet.create({
  separator: {
    height: 1,
    backgroundColor: '#E0E0E0',
    width: '100%',
  },
});
