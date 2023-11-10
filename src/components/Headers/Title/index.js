import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Title() {
  return (
    <View style={styles.view}>
      <Text style={styles.text}>SafeCity</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Helvetica Neue',
    padding: '10px',
    color: 'white',
  },
  view: {
    flexDirection: 'row',
    alignItems: 'center',
  },
});
