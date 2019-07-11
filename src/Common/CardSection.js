import React from 'react';
import { View } from 'react-native';

const cardSectionStyle = {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    alignItems: 'stretch'
}

export const CardSection = props => <View style={cardSectionStyle}>{props.children}</View>;
