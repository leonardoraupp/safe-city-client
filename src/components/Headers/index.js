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
    flex: 2,
    alignItems: 'flex-start',
    backgroundColor: '#588157',
    padding: '8px',
    }
});

export default Headers;