export class Macro{
    private _protein: Gram;
    private _carbs: Gram;
    private _fat: Gram;
    private _sodium: Milligram;
    private _sugar: Gram;
    private _addedSugar: Gram;
    private _fiber: Gram;
    private _calories: Calorie;

    constructor(protein: Gram, carbs: Gram, fat: Gram, sodium: Milligram, sugar: Gram, addedSugar: Gram, fiber: Gram, calories: Calorie){
        this._protein = protein;
        this._carbs = carbs;
        this._fat = fat;
        this._sodium = sodium;
        this._sugar = sugar;
        this._addedSugar = addedSugar;
        this._fiber = fiber;
        this._calories = calories;
    }


    get protein(): Gram {
        return this._protein;
    }

    set protein(value: Gram) {
        this._protein = value;
    }

    get carbs(): Gram {
        return this._carbs;
    }

    set carbs(value: Gram) {
        this._carbs = value;
    }

    get fat(): Gram {
        return this._fat;
    }

    set fat(value: Gram) {
        this._fat = value;
    }

    get sodium(): Milligram {
        return this._sodium;
    }

    set sodium(value: Milligram) {
        this._sodium = value;
    }

    get sugar(): Gram {
        return this._sugar;
    }

    set sugar(value: Gram) {
        this._sugar = value;
    }

    get addedSugar(): Gram {
        return this._addedSugar;
    }

    set addedSugar(value: Gram) {
        this._addedSugar = value;
    }

    get fiber(): Gram {
        return this._fiber;
    }

    set fiber(value: Gram) {
        this._fiber = value;
    }

    get calories(): Calorie {
        return this._calories;
    }

    set calories(value: Calorie) {
        this._calories = value;
    }
}

class Unit {
    protected _tag: string;
    protected _value: number;

    constructor(value: number, tag: string) {
        this._value = value;
        this._tag = tag;
    }

    get tag() {
        return this._tag;
    }

    get value() {
        return this._value;
    }

    set value(value: number) {
        this._value = value;
    }
}

export class Gram extends Unit {
    constructor(value: number) {
        super(value, "g");
    }
}

export class Milligram extends Unit {
    constructor(value: number) {
        super(value, "mg");
    }
}

export class Calorie extends Unit {
    constructor(value: number) {
        super(value, "cal");
    }
}
