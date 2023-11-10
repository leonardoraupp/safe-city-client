import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const Item = () => {
    const [number, onChangeNumber] = React.useState('');

    return (
        <View style={styles.view}>
            <Text style={styles.item} >Avaliar local</Text>
            <Text style={styles.item}>Locais seguros</Text>
            <Text style={styles.item}>Locais perigosos</Text>
        </View>
    );
};

const styles = StyleSheet.create({


    item: {
        flexDirection: 'row',
        textAlign: 'center',
        borderWidth: 1,
        height: '100px',
        width: '100px',
        margin: '10px',
        padding: '10px',
        },
    view: {
        flexDirection: 'row',
        justifyContent: 'center',
    }
});

export default Item;
