import React from "react";
import { View, Text, Button } from "react-native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "./_layout";  // Assuming types are in a separate file

// Define navigation prop type for App screen

export default function App({ navigation }: any) {
    return (
        <View>
            <Text>Home Screen</Text>
            <Button title="Go to Home" onPress={() => navigation.navigate("Home")} />
            <Button title="Go to Login" onPress={() => navigation.navigate("Login")} />
            <Button title="Go to Register" onPress={() => navigation.navigate("Register")} />
        </View>
    );
}
