import React from 'react';
import { Text } from 'react-native';
import { View } from 'react-native';
import { Button } from 'react-native';
import { useState } from 'react';

export const Cat = (props) => {
    const [isHungry, setIsHungry] = useState(true);

    return (
        <View>
            <Text>Hello, I'm a cat named {props.name}</Text>
            <Button 
                onPress={ () => {
                    setIsHungry(!isHungry)
                }}
                title={isHungry ? 'I am hungry!' : 'I am not hungry'}
            />
        </View>      
    );
}