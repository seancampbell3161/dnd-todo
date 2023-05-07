import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View } from 'react-native';
import { Image } from 'react-native';
import { Cat } from './Cat';

export default function App() {
  return (
    <View style={styles.container}>
      <Text>Hello world</Text>
      <Image
        source={{uri: 'https://pusheen.com/wp-content/themes/pusheen-custom/img/about-pusheen.png'}}
        style={{width: 200, height: 200}}
      >
      </Image>
      <TextInput
        style={{
          height: 40,
          borderColor: 'gray',
          width: 200,
          padding: 10,
          borderWidth: 1,
        }}></TextInput>
      <StatusBar style="auto" />
      <Cat name="Pusheen"/>
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
