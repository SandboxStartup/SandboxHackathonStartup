import React, {useContext, useState} from "react";
import {View, TextInput, Text, Button} from "react-native";
import {NativeStackNavigationProp} from "@react-navigation/native-stack";
import {RootStackParamList} from "@/app/_layout";
import {AdvancedWorkoutPlan, BeginnerWorkoutPlan, IntermediateWorkoutPlan, WorkoutPlan} from "@/app/Classes/WorkoutPlan";
import {NutritionPlan} from "@/app/Classes/NutritionPlan";
import {User} from "@/app/Classes/User";
import {useUser} from "../../Hooks/UserProvider"


type RegisterScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Register">;

interface RegisterScreenProps {
    navigation: RegisterScreenNavigationProp;
}
type FillUserProfileProps = {
    userName: string;
    navigation: NativeStackNavigationProp<RootStackParamList, "Register">;
};

export default function FillUserProfile({ userName, navigation }: FillUserProfileProps) {
    // State variables for user input
    const [name, setName] = useState(userName);
    const [age, setAge] = useState("");
    const [weight, setWeight] = useState("");
    const [height, setHeight] = useState("");
    const [level, setLevel] = useState("");
    const [workoutPlan, setWorkoutPlanState] = useState<WorkoutPlan | null>(null);
    const [nutritionPlan, setNutritionPlanState] = useState<NutritionPlan | null>(null);
    const { setUser } = useUser();




    const updateWorkoutPlan = (level: string) => {
        if (level === "Beginner") {
            setWorkoutPlanState(new BeginnerWorkoutPlan([], new Map()));
        } else if (level === "Intermediate") {
            setWorkoutPlanState(new IntermediateWorkoutPlan([], new Map()));
        } else if (level === "Advanced") {
            setWorkoutPlanState(new AdvancedWorkoutPlan([], new Map()));
        }
    };

    // Update nutrition plan
    const updateNutritionPlan = () => {
        setNutritionPlanState(new NutritionPlan([]));
    };

        // Function to handle input changes
        const handleInputChange = (field: "age" | "weight" | "height" | "level", value: string) => {
            if (field === "age") setAge(value);
            else if (field === "weight") setWeight(value);
            else if (field === "height") setHeight(value);
            else if (field === "level") setLevel(value);
            updateWorkoutPlan(level);
            updateNutritionPlan();
        };

        const handleSubmission = () => {
            // Create user object
            // Navigate to Home screen
            setUser(new User(name, parseInt(age), parseInt(weight), parseInt(height), level, workoutPlan, nutritionPlan));

            navigation.navigate("Home");
        }

        return (
            <View style={{padding: 20}}>
                <Text>Enter Your Age:</Text>
                <TextInput
                    style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                    placeholder="Enter Age"
                    keyboardType="numeric"
                    value={age}
                    onChangeText={(text) => handleInputChange("age", text)}
                />

                <Text>Enter Your Weight (pounds):</Text>
                <TextInput
                    style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                    placeholder="Enter Weight"
                    keyboardType="numeric"
                    value={weight}
                    onChangeText={(text) => handleInputChange("weight", text)}
                />

                <Text>Enter Your Height (inches):</Text>
                <TextInput
                    style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                    placeholder="Enter Height"
                    keyboardType="numeric"
                    value={height}
                    onChangeText={(text) => handleInputChange("height", text)}
                />

                <Text>Enter Your Level (Beginner, Intermediate, Advanced):</Text>
                <TextInput
                    style={{borderWidth: 1, padding: 10, marginBottom: 10}}
                    placeholder="Enter Level"
                    value={level}
                    onChangeText={(text) => handleInputChange("level", text)}
                />



                <Button title={"Submit"} onPress={() =>handleSubmission()}/>
            </View>
        );
}
