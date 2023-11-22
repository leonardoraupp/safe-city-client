import React from 'react';
import { Button, SafeAreaView, StyleSheet, TextInput, Alert } from 'react-native';
const PostalCodeInput = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView style={styles.conteiner}>
      <TextInput
        style={styles.input}
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Digite um cep"
        inputMode="numeric"
      />
      <Button
        style={styles.button}
        title="BUSCAR"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  conteiner: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'baseline',
    padding: '8px',
    margin: '8px',
    width: '70%',
  },
  input: {
    color: 'white',
    borderColor: 'white',
    textAlign: 'center',
    backgroundColor: '#3a5a40',
    borderRadius: '8px',
    height: '95%',
  },
  button: {
    padding: '8px',
    margin: '10',
    width: '10%',
    textAlign: 'center',
    height: '95%',
  },
});

export default PostalCodeInput;