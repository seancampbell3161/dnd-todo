import React from "react";
import { View, TextInput, FlatList, Button, StyleSheet, Text } from 'react-native';
import { useState } from 'react';

export const Chores = () => {
    const [chores, setChores] = useState([]);
    const [chore, setChore] = useState('');
    return (
        <View style={styles.container}>
            <FlatList 
                data={chores}
                renderItem={ ({item}) => <Text style={styles.item}>{item.key}</Text> }
            />

            <TextInput
                style={{
                height: 40,
                borderColor: 'gray',
                width: 200,
                padding: 10,
                borderWidth: 1,
                }}
                onChange={ (text) => setChore(text.nativeEvent.text) }
            >
            </TextInput>
            <Button
                onPress={ () => {
                    const newChore = {key: chore}
                    setChores([...chores, newChore]);
                    console.log(chore);
                }}
                title="Add Chore"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 18,
        height: 44,
      },
  });