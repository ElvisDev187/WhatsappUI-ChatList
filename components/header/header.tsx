import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import Action from './action';
import Title from '../title';
import SearchBar from './searchbar';
import CategoryList from './category-list';

export const Header = () => {
  return (
    <View style={styles.container}>
      <Action />
      <Title title="Chats" />
      <SearchBar />
      <CategoryList />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    gap: 8,
  },
});
