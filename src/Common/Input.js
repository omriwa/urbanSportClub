import React from 'react';
import { View, Text, TextInput } from 'react-native';

const style = {
    containerStyle: {

    },
    textStyle: {

    },
    inputStyle: {

    }
};

const { containerStyle, textStyle, inputStyle };

export const Input = props => {
    return <View
        style={containerStyle}
    >
        <Text
            style={textStyle}
        >
            {
                props.label
            }
        </Text>
        <TextInput
            style={inputStyle}
            secureTextEntry={props.secureTextEntry}
        />
    </View>
}