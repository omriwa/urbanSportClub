import React from 'react';
import { View } from 'react-native';

const cardStyle = {
    flex: 1,
    flexDirection: 'column',
    justifyContent: 'flex-start'
}

export const Card = props => <View style={cardStyle}>{props.children}</View>;
