import React from 'react';
import { StyleSheet, View } from 'react-native';
import Headers from './src/components/Headers';
import Menu from './src/components/Menu';

export default function App() {
  return (
    <View style={styles.container}>
      <Headers style={ styles.header}/>
      <Menu style={styles.menu}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection:'column',   
    flex: 1,
  }, 
  header: {
    flex: 1,
  },
  menu: {
    flex: 3,
  },
});
