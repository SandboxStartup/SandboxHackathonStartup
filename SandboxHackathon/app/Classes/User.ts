export class User<T>{
    private _name: string;
    private _age: number;
    private _weight: number;
    private _height: number;
    private _level: string
    private _workoutPlan: T;
    private _nutritionPlan: string;

    constructor(name: string, age: number, weight: number, height: number, level: string, workoutPlan: T, nutritionPlan: string){
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

    set workoutPlan(value: T) {
        this._workoutPlan = value;
    }

    set nutritionPlan(value: string) {
        this._nutritionPlan = value;
    }
}