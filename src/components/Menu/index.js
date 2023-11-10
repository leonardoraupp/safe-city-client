import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Item from './Item';

const Menu = () => {
  const [number, onChangeNumber] = React.useState('');

  return (
    <View style={styles.view}>
      <Item/>
    </View>
  );
};

const styles = StyleSheet.create({

  view: {
    }
});

export default Menu;