import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Action from './action';
import Title from '../title';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Action />
      <Title title="Chats" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 15,
  },
});
