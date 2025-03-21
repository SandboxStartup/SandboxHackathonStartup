import React, {useContext, useState} from "react";
import {View, TextInput, Text, Button, TouchableOpacity} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/_layout";
import {AdvancedWorkoutPlan, BeginnerWorkoutPlan, IntermediateWorkoutPlan, WorkoutPlan} from "@/app/Classes/WorkoutPlan";
import {NutritionPlan} from "@/app/Classes/NutritionPlan";
import {User} from "@/app/Classes/User";
import {useUser} from "../../Hooks/UserProvider"
import { theme, styles } from "./AuthenticationStyle";


type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Register">;

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProp;
}
type FillUserProfileProps = {
    userName: string;
    userPassword: string;
    navigation: NativeStackNavigationProp<RootStackParamList, "Register">;

};

export default function FillUserProfile({ userName,userPassword, navigation }: FillUserProfileProps) {
    // State variables for user input
    const [name, setName] = useState(userName);
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [level, setLevel] = useState("");
    const [password, setPassword] = useState(userPassword);
    const [workoutPlan, setWorkoutPlanState] = useState<WorkoutPlan | null>(null);
    const [nutritionPlan, setNutritionPlanState] = useState<NutritionPlan | null>(null);
    const { setUser, user, setWorkoutPlan, setNutritionPlan } = useUser();




    const updateWorkoutPlan = (level: string) => {
        if (level === "Beginner") {
            setWorkoutPlanState(new BeginnerWorkoutPlan([], new Map()));
        } else if (level === "Intermediate") {
            setWorkoutPlanState(new IntermediateWorkoutPlan([], new Map()));
        } else if (level === "Advanced") {
            setWorkoutPlanState(new AdvancedWorkoutPlan([], new Map()));
        }
        else{
            alert("Invalid level. Please enter Beginner, Intermediate, or Advanced.");
        }
    };

    // Update nutrition plan
    const updateNutritionPlan = () => {
        setNutritionPlanState(new NutritionPlan(new Map()));
    };

        // Function to handle input changes
        const handleInputChange = (field: "age" | "weight" | "height" | "level", value: string) => {
            if (field === "age") setAge(value);
            else if (field === "weight") setWeight(value);
            else if (field === "height") setHeight(value);
            else if (field === "level") setLevel(value);
        };

    const handleSubmission = async () => {
        if (!["Beginner", "Intermediate", "Advanced"].includes(level)) {
            alert("Invalid level. Please enter Beginner, Intermediate, or Advanced.");
            return;
        }

        let selectedWorkoutPlan: WorkoutPlan | null = null;
        if (level === "Beginner") {
            selectedWorkoutPlan = new BeginnerWorkoutPlan([], new Map());
        } else if (level === "Intermediate") {
            selectedWorkoutPlan = new IntermediateWorkoutPlan([], new Map());
        } else if (level === "Advanced") {
            selectedWorkoutPlan = new AdvancedWorkoutPlan([], new Map());
        }
        setWorkoutPlan(selectedWorkoutPlan);
        const selectedNutritionPlan = new NutritionPlan(new Map());
        setNutritionPlan(selectedNutritionPlan);

        const newUser = new User(name, parseInt(age), parseInt(weight), parseInt(height), level, selectedWorkoutPlan, selectedNutritionPlan);
        setUser(newUser);

        const registerResponse = await fetch('http://192.168.86.25:3000/api/createUser', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({...newUser, _password: password}), // Send data correctly
        });

        if (!registerResponse.ok) {
            if (registerResponse.status === 401) {
                alert("User data is incomplete");
            } else if (registerResponse.status === 400) {
                alert("User already exists login instead");
                navigation.navigate("Login");
            }
        } else {

            navigation.navigate("Home");
        }
    }



    return (
        <View style={styles.container}>
        {/* Header Section */}
            <View style={styles.header}>
                <Text style={styles.title}>Fill Out Your Profile</Text>
                <Text style={styles.subtitle}>Let us help you reach your fitness goals!</Text>
            </View>

            {/* Form Section */}
            <View style={styles.form}>
                <Text style={styles.label}>Enter Your Age:</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Age"
                    keyboardType="numeric"
                    value={age}
                    onChangeText={(text) => handleInputChange("age", text)}
                />

                <Text style={styles.label}>Enter Your Weight (pounds):</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Weight"
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={(text) => handleInputChange("weight", text)}
                />

                <Text style={styles.label}>Enter Your Height (inches):</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Height"
                    keyboardType="numeric"
                    value={height}
                    onChangeText={(text) => handleInputChange("height", text)}
                />

                <Text style={styles.label}>Enter Your Level (Beginner, Intermediate, Advanced):</Text>
                <TextInput
                    style={styles.input}
                    placeholder="Enter Level"
                    value={level}
                    onChangeText={(text) => handleInputChange("level", text)}
                />

                {/* Submit Button */}
                <TouchableOpacity style={styles.appButton} onPress={() => handleSubmission()}>
                    <Text style={styles.buttonText}>Submit</Text>
                </TouchableOpacity>
            </View>
        </View>
            
        );
}


// <View style={{padding: 20}}>
//     <Text>Enter Your Age:</Text>
//     <TextInput
//         style={{borderWidth: 1, padding: 10, marginBottom: 10}}
//         placeholder="Enter Age"
//         keyboardType="numeric"
//         value={age}
//         onChangeText={(text) => handleInputChange("age", text)}
//     />

//     <Text>Enter Your Weight (pounds):</Text>
//     <TextInput
//         style={{borderWidth: 1, padding: 10, marginBottom: 10}}
//         placeholder="Enter Weight"
//         keyboardType="numeric"
//         value={weight}
//         onChangeText={(text) => handleInputChange("weight", text)}
//     />

//     <Text>Enter Your Height (inches):</Text>
//     <TextInput
//         style={{borderWidth: 1, padding: 10, marginBottom: 10}}
//         placeholder="Enter Height"
//         keyboardType="numeric"
//         value={height}
//         onChangeText={(text) => handleInputChange("height", text)}
//     />

//     <Text>Enter Your Level (Beginner, Intermediate, Advanced):</Text>
//     <TextInput
//         style={{borderWidth: 1, padding: 10, marginBottom: 10}}
//         placeholder="Enter Level"
//         value={level}
//         onChangeText={(text) => handleInputChange("level", text)}
//     />



//     <Button title={"Submit"} onPress={() =>handleSubmission()}/>
// </View>