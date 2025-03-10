import React, { useState } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity } from "react-native";

import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/_layout";
import AppNavbar from "./AppNavbar/AppNavbar";
import {RouteProp} from "@react-navigation/core";
import {useUser} from "@/app/Hooks/UserProvider"; // Ensure you import your styles correctly



type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

type HomeScreenRouteProp = RouteProp<RootStackParamList, "Home">;



interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation}: HomeScreenProps) => {
    const { user, isAuthenticated } = useUser();

    if (!isAuthenticated || user === null) {
        navigation.navigate("App");
    }
    else {
        return (
            <ScrollView style={{flex: 1}} contentContainerStyle={{flexGrow: 1}}>
                <AppNavbar navigation={navigation}/>
                <View>
                    <Text>Welcome, {user!.name}</Text>
                    <Text>Age: {user!.age}</Text>
                    <Text>Weight: {user!.weight}</Text>
                    <Text>Height: {user!.height}</Text>
                    <Text>Level: {user!.level}</Text>
                </View>
            </ScrollView>
        );
    }
};

export default HomeScreen;
