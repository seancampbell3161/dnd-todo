import React from "react";
import { View, TextInput, FlatList, Button, StyleSheet, Text, Pressable, SectionList } from 'react-native';
import { useState, useCallback } from 'react';
import { Room } from './Room';

export const Chores = () => {
    const [chores, setChores] = useState([]);
    const [chore, setChore] = useState('');
    const [textValue, onChangeText] = React.useState('');
    const clearInput = useCallback(()=> onChangeText(''), []);
    const deleteItemByKey = (key) => {
        const filteredData = chores.filter(c => c.key !== key);
        setChores(filteredData);
    }
    const [rooms, setRooms] = useState([]);
    const [newRoomName, setNewRoomName] = useState('');

    return (
        <View style={styles.container}>
            <View>{rooms}</View>
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

            {/* <SectionList
                    sections={[
                    {title: 'D', data: ['Devin', 'Dan', 'Dominic']},
                    {
                        title: 'J',
                        data: [
                        'Jackson',
                        'James',
                        'Jillian',
                        'Jimmy',
                        'Joel',
                        'John',
                        'Julie',
                        ],
                    },
                    ]}
                    renderItem={({item}) =>  <Text style={styles.item}>{item}</Text>}
                    renderSectionHeader={({section}) => (
                    <Text style={styles.sectionHeader}>{section.title}</Text>
                    )}
                    keyExtractor={item => `basicListEntry-${item}`}
            /> */}

            <TextInput
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
                    setNewRoomName(text.nativeEvent.text);
                    } 
                }
                onChangeText={text => onChangeText(text)}
                value={textValue}
            >
            </TextInput>
            <View style={{marginTop: 10}}></View>
            <Button
                onPress={ () => {
                    const newRoom = <Room name={newRoomName}></Room>;
                    setRooms([...rooms, newRoom]);
                    console.log(newRoom);
                    console.log(rooms);
                    clearInput();
                }}
                title="Add Room"
            />

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
    )
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