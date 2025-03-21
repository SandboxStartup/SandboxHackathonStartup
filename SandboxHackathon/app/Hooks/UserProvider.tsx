import React, { createContext, useState, useContext, ReactNode } from 'react';
import { User } from '@/app/Classes/User';
import {WorkoutPlan} from "@/app/Classes/WorkoutPlan";
import {NutritionPlan} from "@/app/Classes/NutritionPlan";

interface UserContextProps {
    user: User | null;
     setUser: (user: User) => void;
    isAuthenticated: boolean;
    setIsAuthenticated: (isAuthenticated: boolean) => void;
    workoutPlan: WorkoutPlan | null;
    setWorkoutPlan: (workoutPlan: WorkoutPlan | null) => void;
    nutritionPlan: NutritionPlan | null;
    setNutritionPlan: (nutritionPlan: NutritionPlan | null) => void;
}

const UserContext = createContext<UserContextProps | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
    const [user, setUser] = useState<User | null>(null);
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [workoutPlan, setWorkoutPlan] = useState<WorkoutPlan | null>(null);
    const [nutritionPlan, setNutritionPlan] = useState<NutritionPlan | null>(null);

    return (
        <UserContext.Provider value={{ user, setUser, isAuthenticated, setIsAuthenticated, workoutPlan, setWorkoutPlan, nutritionPlan, setNutritionPlan }}>
            {children}
        </UserContext.Provider>
    );
};

export const useUser = () => {
    const context = useContext(UserContext);
    if (!context) {
        throw new Error('useUser must be used within a UserProvider');
    }
    return context;
};