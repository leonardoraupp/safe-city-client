import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Headers from './src/components/Headers';
import Main from './src/components/Main';
import Menu from './src/components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Headers />
      <Main />
      <Menu />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flex: 1,
  },
});
