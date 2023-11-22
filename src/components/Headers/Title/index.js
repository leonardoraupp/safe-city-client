import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View style={styles.conteiner}>
      <Text style={styles.text}>SafeCity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Comic Sans MS',
    color: 'white',
  },
  conteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '8px',
    margin: '8px',
  },
});
