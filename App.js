import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Cat } from './Cat';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Open up App.js to start working on your app!</Text>
      <Text>Hello world</Text>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          width: 200,
          padding: 10,
          borderWidth: 1,
        }}></TextInput>
      <StatusBar style="auto" />
      <Cat />
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
