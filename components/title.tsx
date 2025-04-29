import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

interface TitleProps {
  // Define any props you want to pass to the Title component
  // For example, you might want to pass a title string
  title?: string;
}
const Title = ({title}: TitleProps) => {
  return <Text style={styles.title}>{title}</Text>;
};

export default Title;

const styles = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#0A0A0A',
  },
});
