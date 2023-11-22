import React from 'react';
import {View, StyleSheet} from 'react-native';
import PostalCodeInput from './PostalCodeInput';
import Title from './Title';

const Headers = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.container}>     
        <Title/>
        <PostalCodeInput/>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    alignItems: 'flex-start',
    backgroundColor: '#588157',
    height:'16%',
    width:'100%',
    padding: '8px',
    }
});

export default Headers;