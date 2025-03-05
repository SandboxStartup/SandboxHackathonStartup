// LoginScreen.tsx
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { theme, styles } from './AuthenticationStyle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../_layout';
// Define the props type for your LoginScreen
type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
    navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Welcome to Hack To The Future</Text>

            <TextInput
                style={styles.input}
                placeholder="Enter Username"
                placeholderTextColor={theme.text}
                value={userName}
                onChangeText={setUserName}
            />

            <TextInput
                style={styles.input}
                placeholder="Enter Password"
                placeholderTextColor={theme.text}
                value={password}
                onChangeText={setPassword}
                secureTextEntry={!showPassword}
            />

            <TouchableOpacity style={styles.button} onPress={toggleShowPassword}>
                <Text style={styles.buttonText}>{showPassword ? 'Hide' : 'Show'} Password</Text>
            </TouchableOpacity>

            <TouchableOpacity
                style={styles.button}
                onPress={() => navigation.navigate('Home')}>
                <Text style={styles.buttonText}>Login</Text>
            </TouchableOpacity>
        </View>
    );
}
