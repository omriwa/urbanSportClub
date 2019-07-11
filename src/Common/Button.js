import React from 'react';
import { TouchableOpacity, Text } from 'react-native';

const style = {
    containerStyle: {

    },
    textStyle: {

    }
}

const { containerStyle, textStyle } = style;

export const Button = props => {
    return <TouchableOpacity
        style={containerStyle}
        onPress={props.onPress}
    >
        <Text
            style={textStyle}
        >
            {
                props.children
            }
        </Text>
    </TouchableOpacity>
}