import {WorkoutPlan} from "@/app/Classes/WorkoutPlan";
import {NutritionPlan} from "@/app/Classes/NutritionPlan";

export class User{
    private _name: string;
    private _age: number;
    private _weight: number;
    private _height: number;
    private _level: string
    private _workoutPlan: WorkoutPlan | null;
    private _nutritionPlan: NutritionPlan | null;

    constructor(name: string, age: number, weight: number, height: number, level: string, workoutPlan: WorkoutPlan | null, nutritionPlan: NutritionPlan | null){
        this._name = name;
        this._age = age;
        this._weight = weight;
        this._height = height;
        this._level = level;
        this._workoutPlan = workoutPlan;
        this._nutritionPlan = nutritionPlan;
    }

    get name(){
        return this._name;
    }
    get age(){
        return this._age;
    }
    get weight(){
        return this._weight;
    }
    get height(){
        return this._height;
    }
    get level(){
        return this._level;
    }
    get workout(){
        return this._workoutPlan;
    }
    get nutrition(){
        return this._nutritionPlan;
    }
    set name(value: string) {
        this._name = value;
    }

    set age(value: number) {
        this._age = value;
    }

    set weight(value: number) {
        this._weight = value;
    }

    set height(value: number) {
        this._height = value;
    }

    set level(value: string) {
        this._level = value;
    }

    set workoutPlan(value: WorkoutPlan | null) {
        this._workoutPlan = value;
    }

    set nutritionPlan(value: NutritionPlan | null) {
        this._nutritionPlan = value;
    }
}