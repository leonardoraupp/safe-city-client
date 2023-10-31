import { StyleSheet, Text, View } from 'react-native';
import PostalcodeTextInput from './components/PostalcodeTextInput';

export default function App() {
  return (
    <View style={styles.container}>
      <PostalcodeTextInput/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
