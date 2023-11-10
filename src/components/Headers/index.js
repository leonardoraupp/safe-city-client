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
    flexDirection: 'row',
    backgroundColor: 'blue',
    padding: '10px',
    }
});

export default Headers;