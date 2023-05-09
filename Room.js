import React from 'react';
import { useState, useCallback } from 'react';
import { Text, FlatList, View, TextInput, Button, StyleSheet, Pressable } from 'react-native';

export const Room = (props) => {
    const [chores, setChores] = useState([]);
    const [chore, setChore] = useState('');
    const [textValue, onChangeText] = React.useState('');
    const clearInput = useCallback(()=> onChangeText(''), []);
    const deleteItemByKey = (key) => {
        const filteredData = chores.filter(c => c.key !== key);
        setChores(filteredData);
    }

    return (
        <View>
            <Text>This is a room named {props.name}</Text>
            {/* <FlatList 
                data={chores}
                keyExtractor={(item, index) => item.key}
                renderItem={ ({item}) => 
                    <View style={styles.itemContainer}>
                        <Text style={styles.item}>{item.key}</Text>
                        <Pressable
                            title="X"
                            style={styles.itemButton}
                            onPress={() => {
                                deleteItemByKey(item.key);
                                }
                            }
                        >
                            <Text style={styles.itemText}>X</Text>
                        </Pressable>
                    </View>
                }
            /> */}

            {/* <TextInput
                style={{
                height: 40,
                borderColor: 'gray',
                width: 200,
                padding: 10,
                borderWidth: 1,
                backgroundColor: 'rgba(52, 52, 52, 0.8)',
                color: 'white'
                }}
                onChange={ (text) => {
                    setChore(text.nativeEvent.text);
                    } 
                }
                onChangeText={text => onChangeText(text)}
                value={textValue}
            >
            </TextInput>
            <View style={{marginTop: 10}}></View>
            <Button
                onPress={ () => {
                    const newChore = {key: chore}
                    setChores([...chores, newChore]);
                    clearInput();
                }}
                title="Add Chore"
            /> */}
        </View>
   
    );
}

const styles = StyleSheet.create({
    container: {
    //   flex: 1,
    //   backgroundColor: '#fff',
      alignItems: 'center',
      justifyContent: 'center',
    },
    item: {
        padding: 10,
        fontSize: 24,
        height: 50,
        color: 'white'
      },
    itemContainer: {
        flexDirection: 'row'
    },
    itemButton: {
        alignItems: 'center',
        justifyContent: 'center',
        // paddingVertical: 12,
        marginVertical: 4,
        paddingHorizontal: 16,
        borderRadius: 4,
        elevation: 3,
        backgroundColor: '#841584',
    },
    itemText: {
        fontSize: 16,
        lineHeight: 21,
        fontWeight: 'bold',
        letterSpacing: 0.25,
        color: 'white',
      },
  });