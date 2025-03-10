import { Text, TextInput, View, TouchableOpacity } from "react-native";
import { useState } from "react";

import { theme, styles } from "./AuthenticationStyle";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/_layout";
import FillUserProfile from "./FillUserProfile";
import {useUser} from "@/app/Hooks/UserProvider";

type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Register">;

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProp;
}

export default function RegisterScreen({ navigation }: RegisterScreenProps) {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);
    const {isAuthenticated, setIsAuthenticated} = useUser();

    const toggleShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleRegister = async () => {
        setIsAuthenticated(true);
    };

    if (isAuthenticated) {
        return <FillUserProfile userName={userName} navigation={navigation} />;
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
                    <Text style={styles.buttonText}>{showPassword ? "Hide" : "Show"} Password</Text>
                </TouchableOpacity>

                <TouchableOpacity style={styles.button} onPress={handleRegister}>
                    <Text style={styles.buttonText}>Register</Text>
                </TouchableOpacity>
            </View>
        );
    }
}
