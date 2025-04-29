import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  useColorScheme,
} from 'react-native';
import React from 'react';
import {Section} from '@app/components/section';
import {Header} from '@app/components/header';

export default function App() {
  const isDarkMode = useColorScheme() === 'dark';
  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        backgroundColor={isDarkMode ? 'black' : '#f9f9f9'}
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
      />

      <Section>
        <Header />
      </Section>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({});
