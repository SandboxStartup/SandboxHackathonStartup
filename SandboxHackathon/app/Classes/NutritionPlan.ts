import {User} from "@/app/Classes/User";
import {Meal} from "@/app/Classes/Meal";

export class NutritionPlan<T>{
    private _User: User<T>;
    private _meals: Meal[];

    constructor(User: User<T>, meals: Meal[]){
        this._User = User;
        this._meals = meals;
    }


    get User(): User<T> {
        return this._User;
    }

    set User(value: User<T>) {
        this._User = value;
    }

    get meals(): Meal[] {
        return this._meals;
    }

    set meals(value: Meal[]) {
        this._meals = value;
    }
}