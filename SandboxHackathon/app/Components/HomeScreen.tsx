import React, { useState } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import { styles, theme } from "@/app/Components/Authentication/AuthenticationStyle";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/_layout";
import AppNavbar from "./AppNavbar/AppNavbar";
import {RouteProp} from "@react-navigation/core"; // Ensure you import your styles correctly



type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;



interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
    route: HomeScreenRouteProp;
}

const HomeScreen = ({ navigation, route }: HomeScreenProps) => {
    const user = route.params?.user;

    if (!user) {
        return (
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
                <AppNavbar navigation={navigation} />
            </ScrollView>
        );
    }

    return (
        <View>
            <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
            <AppNavbar navigation={navigation} />
            <View>
                <Text>Welcome, {user.name}</Text>
                <Text>Age: {user.age}</Text>
                <Text>Weight: {user.weight}</Text>
                <Text>Height: {user.height}</Text>
                <Text>Level: {user.level}</Text>
            </View>
        </ScrollView>
        </View>
        
    );
};

export default HomeScreen;
