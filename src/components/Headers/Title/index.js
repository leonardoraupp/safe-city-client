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
  conteiner: {
    flexDirection: 'row',
    justifyContent: 'center',
    textAlign: 'center',
    padding: '8px',
    margin: '8px',
  },
  text: {
    color: "#fff",
    fontFamily: 'Comic Sans MS',
    fontSize: '20px',
  }
});
