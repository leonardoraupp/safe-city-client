import react from "react";
import { View, Text, StyleSheet } from "react-native";

export default function Card() {
    return (
        <View style={styles.conteiner}>
            <View style={styles.messageCard}>
                <Text>Bem-vindo!</Text>
            </View>
            <View style={styles.cardConteiner}>
                <View style={styles.cardItem}>
                    <Text style={styles.titleItem}> Avaliar local</Text>
                </View>
                <View style={styles.cardItem}>
                    <Text style={styles.titleItem}>Consultar local</Text>
                </View>
            </View>
            <View style={styles.cardConteiner}>
                <View style={styles.cardItem}>
                    <Text style={styles.titleItem}>Locais seguros</Text>
                </View>
                <View style={styles.cardItem}>
                    <Text style={styles.titleItem}> Locais perigosos</Text>
                </View>
            </View>


        </View>
    );
}

const styles = StyleSheet.create({
    conteiner: {
        flexDirection: "column",
        flex: 1,
    },
    messageCard: {
        flex: 1,
        flexDirection: "row",
        padding: "10%",
        justifyContent: "flex-start",
        alignItems: "stretch",
    },
    cardConteiner: {
        padding: '8px',
        margin: '8px',
        flex: 4,
        flexDirection: "row",
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
    },
    cardItem: {
        flex: 1,
        fontFamily: 'Comic Sans MS',
        backgroundColor: "#588157",
        color: "#fff",
        width: "50%",
        height: "60%",
        padding: '8px',
        margin: "8px",
        textAlign: "center",
        alignItems: "center"
    },
    titleItem: {
        color: "#fff",        
        fontFamily: 'Comic Sans MS',
        fontSize: "18px",
        padding: "6px",
    }

    
});