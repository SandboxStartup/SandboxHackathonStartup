import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import { useUser } from "@/app/Hooks/UserProvider";
import { Exercise } from "@/app/Classes/Exercise";

type WorkoutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Workout">;

interface WorkoutScreenProps {
    navigation: WorkoutScreenNavigationProp;
}

export default function WorkoutScreen({ navigation }: WorkoutScreenProps) {
    const { user } = useUser();
    const [workout, setWorkout] = useState<Map<string, Exercise[]> | null>(null);

    const handleGoToFood = () => navigation.navigate("Nutrition");
    const handleGoToHome = () => navigation.navigate("Home");

    const generateWorkout = () => {
        if (!user?.workoutPlan) {
            console.error("User does not have a workout plan");
            return;
        }
        setWorkout(user.workoutPlan.generateWorkouts());
    };

    return (
        <View>
            {!workout ? (
                <>
                    <Text>Workout Screen</Text>
                    <TouchableOpacity onPress={handleGoToFood}>
                        <Text>Go to Food</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoToHome}>
                        <Text>Go to Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={generateWorkout}>
                        <Text>Generate Workout</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <WorkoutPlanDisplay workout={workout} onBack={() => setWorkout(null)} />
            )}
        </View>
    );
}

function WorkoutPlanDisplay({ workout, onBack }: { workout: Map<string, Exercise[]>; onBack: () => void }) {
    return (
        <View>
            <Text>Your Workout Plan</Text>
            <ScrollView>
                {Array.from(workout.entries()).map(([day, exercises]) => (
                    <View key={day}>
                        <Text>{day}</Text>
                        {exercises.map((exercise, index) => (
                            <View key={`${day}-${index}`}>
                                <Text>--------------------</Text>
                                <Text>{exercise.name}</Text>
                                <Text>Muscle Group: {exercise.muscleGroup}</Text>
                                <Text>Equipment: {exercise.equipment}</Text>
                                <Text>Sets: {exercise.numSets}, Reps: {exercise.numReps}</Text>
                                <Text>Rest Time: {exercise.restTime}s</Text>
                                <Text>Difficulty: {exercise.difficulty}</Text>
                                <Text>{exercise.description}</Text>
                                <Text></Text>


                            </View>
                        ))}
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity onPress={onBack}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
}
