import {User} from "@/app/Classes/User";
import {Meal} from "@/app/Classes/Meal";

export class NutritionPlan{
    private _meals: Meal[];

    constructor( meals: Meal[]){
        this._meals = meals;
    }

    get meals(): Meal[] {
        return this._meals;
    }

    set meals(value: Meal[]) {
        this._meals = value;
    }
}