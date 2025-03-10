import {Macro} from "@/app/Classes/Macro";

export class Meal{
    private _name: string;
    private _ingredients: Map<string, Macro>[];
    private _instructions: string[];

    constructor(name: string, ingredients: Map<string, Macro>[], instructions: string[]){
        this._name = name;
        this._ingredients = ingredients;
        this._instructions = instructions;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get ingredients(): Map<string, Macro>[] {
        return this._ingredients;
    }

    set ingredients(value: Map<string, Macro>[]) {
        this._ingredients = value;
    }

    get instructions(): string[] {
        return this._instructions;
    }

    set instructions(value: string[]) {
        this._instructions = value;
    }
}