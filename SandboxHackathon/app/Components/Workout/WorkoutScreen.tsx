import { styles } from "@/app/Components/Authentication/AuthenticationStyle";
import AppNavBar from "../AppNavbar/AppNavbar";
import {BottomTabNavigationProp} from "@react-navigation/bottom-tabs";
import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import { useUser } from "@/app/Hooks/UserProvider";
import { Exercise } from "@/app/Classes/Exercise";

// type WorkoutScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Workout">;
type WorkoutScreenNavigationProp = BottomTabNavigationProp<RootStackParamList, "Workout">;

interface WorkoutScreenProps {
    navigation: WorkoutScreenNavigationProp;
    // navigation: BottomTabNavigationProp<RootStackParamList>;
}

interface WorkoutPlanDisplayProps {
    workout: Map<string, Exercise[]>;
    selectedDay: string | null;
    setSelectedDay: React.Dispatch<React.SetStateAction<string | null>>;
    onBack: () => void;
}

export default function WorkoutScreen({ navigation }: WorkoutScreenProps) {
    const { user } = useUser();
    const [workout, setWorkout] = useState<Map<string, Exercise[]> | null>(null);
    const [selectedDay, setSelectedDay] = useState<string | null>(null);

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
        <ScrollView style={{ flex: 1 }} contentContainerStyle={{ flexGrow: 1 }}>
        <AppNavBar navigation={navigation} />
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
                <WorkoutPlanDisplay workout={workout} selectedDay={selectedDay} setSelectedDay={setSelectedDay} onBack={() => setWorkout(null)} />
            )}
        </View>
        </ScrollView>
    );
}

function WorkoutPlanDisplay({ workout, selectedDay, setSelectedDay }: WorkoutPlanDisplayProps) {
    const days = Array.from(workout.keys()); // Get all days from the workout plan
  
    return (
      <View style={styles.workoutContainer}>
        {/* Day Buttons */}
        <ScrollView horizontal contentContainerStyle={styles.dayButtonsContainer}>
          {days.map((day) => (
            <TouchableOpacity
              key={day}
              style={[styles.dayButton, selectedDay === day && styles.activeDayButton]}
              onPress={() => setSelectedDay(day)}
            >
              <Text style={[styles.dayButtonText, selectedDay === day && styles.activeDayButtonText]}>{day}</Text>
            </TouchableOpacity>
          ))}
        </ScrollView>
  
        {/* Display Exercises for Selected Day */}
        {selectedDay && (
          <ScrollView contentContainerStyle={styles.exerciseList}>
            <Text style={styles.dayTitle}>{selectedDay}</Text>
            {workout.get(selectedDay)?.map((exercise, index) => (
              <View key={`${selectedDay}-${index}`} style={styles.exerciseContainer}>
                <Text style={styles.exerciseName}>{exercise.name}</Text>
                <Text>Muscle Group: {exercise.muscleGroup}</Text>
                <Text>Equipment: {exercise.equipment}</Text>
                <Text>Sets: {exercise.numSets}, Reps: {exercise.numReps}</Text>
                <Text>Rest Time: {exercise.restTime}s</Text>
                <Text>Difficulty: {exercise.difficulty}</Text>
                <Text>{exercise.description}</Text>
              </View>
            ))}
          </ScrollView>
        )}
      </View>
    );
  }






// function WorkoutPlanDisplay({ workout, onBack }: { workout: Map<string, Exercise[]>; onBack: () => void }) {
//     return (
//         <View>
//             <Text>Your Workout Plan</Text>
//             <ScrollView>
//                 {Array.from(workout.entries()).map(([day, exercises]) => (
//                     <View key={day}>
//                         <Text>{day}</Text>
//                         {exercises.map((exercise, index) => (
//                             <View key={`${day}-${index}`}>
//                                 <Text>--------------------</Text>
//                                 <Text>{exercise.name}</Text>
//                                 <Text>Muscle Group: {exercise.muscleGroup}</Text>
//                                 <Text>Equipment: {exercise.equipment}</Text>
//                                 <Text>Sets: {exercise.numSets}, Reps: {exercise.numReps}</Text>
//                                 <Text>Rest Time: {exercise.restTime}s</Text>
//                                 <Text>Difficulty: {exercise.difficulty}</Text>
//                                 <Text>{exercise.description}</Text>
//                                 <Text></Text>


//                             </View>
//                         ))}
//                     </View>
//                 ))}
//             </ScrollView>
//             <TouchableOpacity onPress={onBack}>
//                 <Text>Back</Text>
//             </TouchableOpacity>
//         </View>
//     );
// }
