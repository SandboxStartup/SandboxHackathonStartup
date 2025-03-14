import {User} from "@/app/Classes/User";
import {Meal} from "@/app/Classes/Meal";
import {Calorie, Gram, Macro, Milligram} from "@/app/Classes/Macro";

export class NutritionPlan{
    private _meals: Map<string, Meal[]>;

    constructor( meals: Map<string, Meal[]>){
        this._meals = meals;
    }

    get meals(): Map<string, Meal[]> {
        return this._meals;
    }

    set meals(value:Map<string, Meal[]>) {
        this._meals = value;
    }

    public generateCheapMealPlan(){
        const mealPlan = new Map<string, Meal[]>();

        const cheapBreakfast = new Meal(
            "Oatmeal with banana",
            [new Map([["Oats", new Macro(new Gram(5), new Gram(27), new Gram(3), new Milligram(0), new Gram(1), new Gram(0), new Gram(4), new Calorie(150))],
                ["Banana", new Macro(new Gram(1), new Gram(27), new Gram(0), new Milligram(1), new Gram(14), new Gram(0), new Gram(3), new Calorie(105))]]),],
            ["Boil water and add oats.", "Slice banana on top."]
        );

        const cheapLunch = new Meal(
            "Peanut butter & jelly sandwich",
            [new Map([["Bread", new Macro(new Gram(5), new Gram(30), new Gram(2), new Milligram(150), new Gram(3), new Gram(2), new Gram(2), new Calorie(160))],
                ["Peanut Butter", new Macro(new Gram(8), new Gram(7), new Gram(16), new Milligram(120), new Gram(3), new Gram(0), new Gram(2), new Calorie(190))],
                ["Jelly", new Macro(new Gram(0), new Gram(13), new Gram(0), new Milligram(5), new Gram(10), new Gram(10), new Gram(0), new Calorie(50))]]),],
            ["Spread peanut butter and jelly on bread.", "Assemble sandwich."]
        );

        const cheapDinner = new Meal(
            "Rice and beans",
            [new Map([["Rice", new Macro(new Gram(4), new Gram(45), new Gram(1), new Milligram(0), new Gram(0), new Gram(0), new Gram(1), new Calorie(200))],
                ["Beans", new Macro(new Gram(10), new Gram(27), new Gram(0), new Milligram(200), new Gram(1), new Gram(0), new Gram(7), new Calorie(150))]]),],
            ["Cook rice.", "Heat beans and mix together."]
        );

        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        days.forEach(day => {
            mealPlan.set(day, [cheapBreakfast, cheapLunch, cheapDinner]);
        });

        this.meals = mealPlan;
    }

    public generateNormalMealPlan(){
        const mealPlan = new Map<string, Meal[]>();

        const normalBreakfast = new Meal(
            "Scrambled eggs with toast",
            [new Map([["Eggs", new Macro(new Gram(12), new Gram(1), new Gram(10), new Milligram(70), new Gram(1), new Gram(0), new Gram(0), new Calorie(140))],
                ["Toast", new Macro(new Gram(4), new Gram(30), new Gram(2), new Milligram(200), new Gram(3), new Gram(2), new Gram(2), new Calorie(160))]]),],
            ["Scramble eggs in a pan.", "Toast the bread and serve."]
        );

        const normalLunch = new Meal(
            "Grilled chicken with quinoa",
            [new Map([["Chicken Breast", new Macro(new Gram(25), new Gram(0), new Gram(3), new Milligram(50), new Gram(0), new Gram(0), new Gram(0), new Calorie(130))],
                ["Quinoa", new Macro(new Gram(8), new Gram(39), new Gram(3), new Milligram(10), new Gram(1), new Gram(0), new Gram(5), new Calorie(222))]]),],
            ["Grill the chicken.", "Cook quinoa according to package directions.", "Serve together."]
        );

        const normalDinner = new Meal(
            "Salmon with roasted vegetables",
            [new Map([["Salmon", new Macro(new Gram(22), new Gram(0), new Gram(13), new Milligram(50), new Gram(0), new Gram(0), new Gram(0), new Calorie(180))],
                ["Vegetables", new Macro(new Gram(2), new Gram(10), new Gram(0), new Milligram(30), new Gram(3), new Gram(0), new Gram(4), new Calorie(50))]]),],
            ["Season salmon and bake at 375°F for 20 minutes.", "Roast vegetables with olive oil at 400°F for 25 minutes.", "Serve together."]
        );

        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        days.forEach(day => {
            mealPlan.set(day, [normalBreakfast, normalLunch, normalDinner]);
        });

        this.meals = mealPlan;
    }

    public generateExpensiveMealPlan(){
        const mealPlan = new Map<string, Meal[]>();

        const expensiveBreakfast = new Meal(
            "Lobster Omelette with Truffle Butter",
            [new Map([
                ["Lobster", new Macro(new Gram(20), new Gram(2), new Gram(1), new Milligram(200), new Gram(0), new Gram(0), new Gram(0), new Calorie(89))],
                ["Eggs", new Macro(new Gram(12), new Gram(1), new Gram(10), new Milligram(140), new Gram(0), new Gram(0), new Gram(0), new Calorie(143))],
                ["Truffle Butter", new Macro(new Gram(0), new Gram(0), new Gram(10), new Milligram(50), new Gram(0), new Gram(0), new Gram(0), new Calorie(90))]
            ])],
            ["Cook lobster lightly.", "Whisk eggs and cook into an omelette.", "Top with lobster and drizzle truffle butter."]
        );

        const expensiveLunch = new Meal(
            "Wagyu Steak with Asparagus and Quinoa",
            [new Map([
                ["Wagyu Steak", new Macro(new Gram(40), new Gram(0), new Gram(30), new Milligram(75), new Gram(0), new Gram(0), new Gram(0), new Calorie(400))],
                ["Asparagus", new Macro(new Gram(3), new Gram(4), new Gram(0), new Milligram(2), new Gram(2), new Gram(0), new Gram(2), new Calorie(20))],
                ["Quinoa", new Macro(new Gram(8), new Gram(39), new Gram(4), new Milligram(5), new Gram(1), new Gram(0), new Gram(5), new Calorie(222))]
            ])],
            ["Grill Wagyu steak to preference.", "Steam asparagus and cook quinoa.", "Serve together with light seasoning."]
        );

        const expensiveDinner = new Meal(
            "Seared A5 Kobe Beef with Caviar Garnish",
            [new Map([
                ["A5 Kobe Beef", new Macro(new Gram(50), new Gram(0), new Gram(50), new Milligram(50), new Gram(0), new Gram(0), new Gram(0), new Calorie(500))],
                ["Caviar", new Macro(new Gram(10), new Gram(1), new Gram(2), new Milligram(300), new Gram(0), new Gram(0), new Gram(0), new Calorie(80))]
            ])],
            ["Lightly sear Kobe beef.", "Top with caviar garnish.", "Serve with premium sides of choice."]
        );

        const days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

        days.forEach(day => {
            mealPlan.set(day, [expensiveBreakfast, expensiveLunch, expensiveDinner]);
        });

        this.meals = mealPlan;
    }
}