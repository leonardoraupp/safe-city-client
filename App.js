import { StyleSheet, Text, View } from 'react-native';
import PostalcodeTextInput from './assets/components/PostalcodeSearchInput';

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
