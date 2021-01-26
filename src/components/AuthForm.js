import React, { useState } from 'react'
import { View, StyleSheet } from 'react-native'
import { Input, Text, Button } from 'react-native-elements';
import { MaterialIcons, Entypo } from '@expo/vector-icons';

const AuthForm = ({ authText }) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    return (
        <View style={styles.input}>
            <Text>{authText}</Text>
            <Input
                placeholder="Email"
                autoCapitalize="none"
                onChangeText={setEmail}
                autoCorrect={false}
                value={email}
                leftIcon={
                    <MaterialIcons name="email" size={24} color="black" />
                }
            />
            <Input
                placeholder="Enter Password"
                value={password}
                onChangeText={setPassword}
                autoCapitalize="none"
                autoCorrect={false}
                leftIcon={
                    <Entypo name="lock" size={24} color="black" />
                }
                secureTextEntry={true}
            />
            <Button
                title="Submit"
            />
        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        marginHorizontal: 15,
        marginVertical: 100
    }
});

export default AuthForm
