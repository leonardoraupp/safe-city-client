import React from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';

const PostalCodeInput = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.view}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Pesquise um cep"
        inputMode="numeric"
      />
      <Button
        style={styles.button}
        title="Buscar"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    heigh: '20px',
    width: '20px', 
    textAlign: 'center',
    alignContent: 'center',
    borderCurve: 'round',
  },
  input: {                              
    color: 'white',
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: 'white',
    padding: 10,
    textAlign: 'center',
  },
  view: {
    flexDirection: 'row',
  }
});

export default PostalCodeInput;