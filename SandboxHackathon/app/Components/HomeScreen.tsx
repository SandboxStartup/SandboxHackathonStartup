import React, { useEffect, useState } from "react";
import { View, Text, ScrollView, ActivityIndicator } from "react-native";
import AppNavbar from "./AppNavbar/AppNavbar";
import { useUser } from "../Hooks/UserProvider";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../_layout";
// Other imports...

type HomeScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Home">;

interface HomeScreenProps {
    navigation: HomeScreenNavigationProp;
}

const HomeScreen = ({ navigation }: HomeScreenProps) => {
    const { user, isAuthenticated, setUser } = useUser();
    const [name, setName] = useState<string | null>(null);
    const [loading, setLoading] = useState(true); // Add a loading state

    useEffect(() => {
        if (!isAuthenticated || user === null) {
            navigation.navigate("App");
        } else {
            setUser(user);
            setName(user._name);
            setLoading(false); // Set loading to false when data is available
        }
    }, [isAuthenticated, user, navigation]);


    return (
        <ScrollView style={{ flex: 1, padding: 20, backgroundColor: "#f8f9fa" }}>
            <AppNavbar navigation={navigation} />

            <View style={{ alignItems: "center", marginTop: 20 }}>
                <Text style={{ fontSize: 24, fontWeight: "bold", marginBottom: 10 }}>
                    Welcome {user!.name}!
                </Text>
            </View>

            <View
                style={{
                    backgroundColor: "white",
                    padding: 20,
                    borderRadius: 10,
                    shadowColor: "#000",
                    shadowOffset: { width: 0, height: 2 },
                    shadowOpacity: 0.1,
                    shadowRadius: 5,
                    elevation: 5,
                    marginVertical: 10,
                }}
            >
                <Text style={{ fontSize: 18, fontWeight: "600", marginBottom: 5 }}>User Details:</Text>
                <Text style={{ fontSize: 16 }}>👤 Name: {user!.name}</Text>
                <Text style={{ fontSize: 16 }}>🎂 Age: {user!.age}</Text>
                <Text style={{ fontSize: 16 }}>⚖️ Weight: {user!.weight} lbs</Text>
                <Text style={{ fontSize: 16 }}>📏 Height: {user!.height} inches</Text>
                <Text style={{ fontSize: 16 }}>🏆 Level: {user!.level}</Text>
            </View>
        </ScrollView>
    );
};

export default HomeScreen;
