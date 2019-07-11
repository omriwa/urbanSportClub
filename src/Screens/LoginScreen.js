import React from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { Card } from '../Common/Card';
import { CardSection } from '../Common/CardSection';
import { Form } from '../Components/Form';
import { Input } from '../Common/Input';

export const LoginScreen = () => {
    return <Card>
        <CardSection>
            <Form
                onLogin={()=> alert("login")}
            >
                <Input 
                    label="email"
                />

                <Input
                    label="password"
                    secureTextEntry
                />
            </Form>
        </CardSection>
    </Card>
}