import react from "react";
import { View, Text, StyleSheet } from "react-native";
import Card from './Card';


export default function Main() {
    return (
        <View style={ styles.conteiner}>
            <Card/>
        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flex: 8
     }

});