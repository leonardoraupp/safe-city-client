import React from 'react';
import {Button, SafeAreaView, StyleSheet, TextInput, Alert} from 'react-native';

const PostalcodeTextInput = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <SafeAreaView>
      <TextInput
        style={styles.input}  
        onChangeText={onChangeNumber}
        value={number}
        placeholder="Digite um cep"
        keyboardType="numeric"
      />
        <Button
        title="Buscar"
        onPress={() => Alert.alert('Simple Button pressed')}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10,
    textAlign: 'center',   
  },
});

export default PostalcodeTextInput;