import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, TextInput, View, ScrollView } from 'react-native';
import { Image, ImageBackground } from 'react-native';
import { Cat } from './Cat';
import { Chores } from './Chores';

const image = { uri: 'https://i.imgur.com/MPpNvDL.png' }

export default function App() {
  return (
    <View style={styles.container}>
      <ImageBackground source={image} style={styles.image} resizeMode='cover'>
        {/* <Image
          source={{uri: 'https://pusheen.com/wp-content/themes/pusheen-custom/img/about-pusheen.png'}}
          style={{width: 200, height: 200, marginTop: 50}}
        >
        </Image>
        <Cat name="Pusheen"/> */}
        <Chores />
        <View style={{marginBottom: 50}}></View>
        <StatusBar style="auto" />
      </ImageBackground>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'flex-start'
    // backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'flex-end',
    width: '100%'
  },
});
