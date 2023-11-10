import React from 'react';
import {View, StyleSheet} from 'react-native';
import PostalCodeInput from './PostalCodeInput';
import Title from './Title';

const Headers = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.headers}>     
        <Title/>
        <PostalCodeInput/>
    </View>
  );
};

const styles = StyleSheet.create({
  headers: {
    flexDirection: 'column',
    backgroundColor: 'blue',
    height: '150px',
    width: '420px',
  }
});

export default Headers;