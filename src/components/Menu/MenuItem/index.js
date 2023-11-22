import React from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Menu() {
    return (
        <View style={styles.conteiner}>
            <View style={styles.menuItem}>
                <Text style={styles.titleMenu} >Home</Text>
            </View>
            <View style={styles.menuItem}>
                <Text style={styles.titleMenu}>About</Text>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 1,
        flexDirection: "row",
        justifyContent: "flex-start",
        alignItems: "center"

    },
    menuItem: {
        padding: "8px",
        margin: "8px",
    },
    titleMenu: {
        color: "#fff",
        fontFamily: 'Comic Sans MS',
        fontSize: "13px",
        padding: "6px",
    }
});
