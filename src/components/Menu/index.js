import React from "react";
import { View, StyleSheet } from "react-native";
import MenuItem from "./MenuItem";

export default function Menu() {
    return (
        <View style={styles.conteiner}>
            <MenuItem/>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        backgroundColor: '#588157',
    }
});
