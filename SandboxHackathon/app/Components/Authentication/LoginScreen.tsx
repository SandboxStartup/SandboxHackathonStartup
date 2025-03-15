// LoginScreen.tsx
import React, {useEffect, useState} from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { theme, styles } from './AuthenticationStyle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../_layout';
import {useUser} from "@/app/Hooks/UserProvider";
import {User} from "@/app/Classes/User";

type LoginScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, 'Login'>;

interface LoginScreenProps {
    navigation: LoginScreenNavigationProp;
}

export default function LoginScreen({ navigation }: LoginScreenProps) {
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { isAuthenticated, setIsAuthenticated, user, setUser } = useUser();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    useEffect(() => {
        if (isAuthenticated) {
            navigation.navigate("Home");
        }
    }, [isAuthenticated]);

    const handleLogin = async () => {

            const loginResponse = await fetch('http://10.54.2.5:3000/api/login/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, password }), // Send data correctly
            });

            if (!loginResponse.ok) {
                setIsAuthenticated(false);
                alert("Invalid username or password");
                navigation.navigate("Register");
                return;
            }
            else{
                const userObject = await loginResponse.json(); // Parse JSON response
                const newUser = new User(
                    userObject._name,
                    userObject._age,
                    userObject._weight,
                    userObject._height,
                    userObject._level,
                    userObject._workoutPlan,
                    userObject._nutritionPlan
                );

                setUser(newUser);
                setIsAuthenticated(true);
            }

    }

    if (isAuthenticated && !user) {
        navigation.navigate('Home');
    }
    else {

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

                <TouchableOpacity style={styles.appButton} onPress={toggleShowPassword}>
                    <Text style={styles.buttonText}>{showPassword ? 'Hide' : 'Show'} Password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.appButton}
                    onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
