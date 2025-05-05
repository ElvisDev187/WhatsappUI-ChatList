import {StyleSheet, useColorScheme, View} from 'react-native';
import React, {PropsWithChildren} from 'react';

export const Section = ({children}: PropsWithChildren) => {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <View
      style={[styles.container, isDarkMode ? styles.bgDark : styles.bgLigth]}>
      {children}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 10,
  },
  bgLigth: {
    backgroundColor: '#f9f9f9',
  },
  bgDark: {
    backgroundColor: '#333',
  },
});
