import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "@/app/_layout";
import { useUser } from "@/app/Hooks/UserProvider";
import { Meal } from "@/app/Classes/Meal";
import {Calorie, Gram, Macro, Milligram} from "@/app/Classes/Macro";

type NutritionScreenNavigationProp = NativeStackNavigationProp<RootStackParamList, "Nutrition">;

interface NutritionScreenProps {
    navigation: NutritionScreenNavigationProp;
}

export default function NutritionScreen({ navigation }: NutritionScreenProps) {
    const { user } = useUser();
    const [mealPlan, setMealPlan] = useState<Map<string, Meal[]> | null>(null);

    const handleGoToWorkout = () => navigation.navigate("Workout");
    const handleGoToHome = () => navigation.navigate("Home");

    const generateCheapMealPlan = () => {
        if (!user?.nutritionPlan) {
            console.error("User does not have a nutrition plan");
            return;
        }
        console.log(user.nutritionPlan);
        user.nutritionPlan.generateCheapMealPlan();
        setMealPlan(new Map(user.nutritionPlan.meals)); // Ensuring a new reference
    };

    const generateNormalMealPlan = () => {
        if (!user?.nutritionPlan) {
            console.error("User does not have a nutrition plan");
            return;
        }
        user.nutritionPlan.generateNormalMealPlan()

        setMealPlan(user.nutritionPlan.meals);
    };

    const generateExpensiveMealPlan = () => {
        if (!user?.nutritionPlan) {
            console.error("User does not have a nutrition plan");
            return;
        }
        user.nutritionPlan.generateExpensiveMealPlan()

        setMealPlan(user.nutritionPlan.meals);
    };

    return (
        <View>
            {!mealPlan ? (
                <>
                    <Text>Nutrition Screen</Text>
                    <TouchableOpacity onPress={handleGoToWorkout}>
                        <Text>Go to Workout</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={handleGoToHome}>
                        <Text>Go to Home</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={generateCheapMealPlan}>
                        <Text>Generate Cheap Meal Plan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={generateNormalMealPlan}>
                        <Text>Generate Normal Meal Plan</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={generateExpensiveMealPlan}>
                        <Text>Generate Expensive Meal Plan</Text>
                    </TouchableOpacity>
                </>
            ) : (
                <MealPlanDisplay mealPlan={mealPlan} onBack={() => setMealPlan(null)} />
            )}
        </View>
    );
}

function calculateTotalMacros(meal: Meal): Macro {
    const total = new Macro(
        new Gram(0),
        new Gram(0),
        new Gram(0),
        new Milligram(0),
        new Gram(0),
        new Gram(0),
        new Gram(0),
        new Calorie(0)
    );

    meal.ingredients.forEach(ingredientMap => {
        ingredientMap.forEach(macro => {
            total.protein.value += macro.protein.value;
            total.carbs.value += macro.carbs.value;
            total.fat.value += macro.fat.value;
            total.sodium.value += macro.sodium.value;
            total.sugar.value += macro.sugar.value;
            total.addedSugar.value += macro.addedSugar.value;
            total.fiber.value += macro.fiber.value;
            total.calories.value += macro.calories.value;
        });
    });
    return total;
}

function MealPlanDisplay({ mealPlan, onBack }: { mealPlan: Map<string, Meal[]>; onBack: () => void }) {
    return (
        <View>
            <Text>Your Meal Plan</Text>
            <ScrollView>
                {Array.from(mealPlan.entries()).map(([day, meals]) => (
                    <View key={day}>
                        <Text>{day}</Text>
                        {meals.map((meal, index) => {
                            const macros = calculateTotalMacros(meal);
                            return (
                                <View key={`${day}-${index}`}>
                                    <Text>--------------------</Text>
                                    <Text>{meal.name}</Text>
                                    <Text>Calories: {macros.calories.value}</Text>
                                    <Text>Protein: {macros.protein.value}g</Text>
                                    <Text>Carbs: {macros.carbs.value}g</Text>
                                    <Text>Fats: {macros.fat.value}g</Text>
                                </View>
                            );
                        })}
                    </View>
                ))}
            </ScrollView>
            <TouchableOpacity onPress={onBack}>
                <Text>Back</Text>
            </TouchableOpacity>
        </View>
    );
}
