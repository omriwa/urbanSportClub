import React from 'react';
import { View } from 'react-native';
import { Button } from '../Common/Button';

export class Form extends React.Component {
    constructor(props) {
        super(props);

       
    }



    render(){
        return <View>
            {
                this.props.children
            }
        </View>
    }
}