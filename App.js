import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Image } from 'react-native';
import { Cat } from './Cat';
import { Chores } from './Chores';

export default function App() {
  return (
    <View style={styles.container}>
      <Image
        source={{uri: 'https://pusheen.com/wp-content/themes/pusheen-custom/img/about-pusheen.png'}}
        style={{width: 200, height: 200, marginTop: 50}}
      >
      </Image>
      <Cat name="Pusheen"/>
      <Chores />
      <View style={{marginBottom: 50}}></View>
      <StatusBar style="auto" />
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
