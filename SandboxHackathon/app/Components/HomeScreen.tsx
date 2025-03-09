import React, { useState } from "react";
import { View, Text, Button, ScrollView, TouchableOpacity } from "react-native";
import { styles, theme } from "./Authentication/AuthenticationStyle";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/_layout";
import AppNavbar from "./AppNavbar/AppNavbar"; // Ensure you import your styles correctly

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
  navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({navigation}: HomeScreenProps) => {
  const [count, setCount] = useState(0);

  return (
      <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
          <AppNavbar navigation={navigation} />

      </ScrollView>
  );
};

export default HomeScreen;
