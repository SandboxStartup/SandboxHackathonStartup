// LoginScreen.tsx
import React, { useState } from 'react';
import { Text, TextInput, View, TouchableOpacity } from 'react-native';
import { theme, styles } from './AuthenticationStyle';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../_layout';
import {useUser} from "@/app/Hooks/UserProvider";
import FillUserProfile from "@/app/Components/Authentication/FillUserProfile";
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

    const handleLogin = async () => {

            const loginResponse = await fetch('http://192.168.86.25:3000/api/auth/user', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ userName, password }), // Send data correctly
            });

            const responseText = await loginResponse.text(); // Get response text

            if (!loginResponse.ok) {
                setIsAuthenticated(false);
                navigation.navigate("Register");
                return;
            }
            else{
                const userData = JSON.parse(responseText);
                const newUser = new User(
                    userData.name,
                    userData.age,
                    userData.weight,
                    userData.height,
                    userData.level,
                    userData.workoutPlan,
                    userData.nutritionPlan
                );
                if (newUser === null) {
                    console.log(newUser)
                    setIsAuthenticated(false);
                    navigation.navigate("Register");
                    return;
                }
                else {
                    setUser(newUser);
                    setIsAuthenticated(true);
                    navigation.navigate("Home");
                }
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

                <TouchableOpacity style={styles.button} onPress={toggleShowPassword}>
                    <Text style={styles.buttonText}>{showPassword ? 'Hide' : 'Show'} Password</Text>
                </TouchableOpacity>

                <TouchableOpacity
                    style={styles.button}
                    onPress={handleLogin}>
                    <Text style={styles.buttonText}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
