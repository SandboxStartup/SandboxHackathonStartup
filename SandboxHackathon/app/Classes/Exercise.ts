export class Exercise {
    private _name: string;
    private _muscleGroup: string;
    private _equipment: string;
    private _description: string;
    private _numSets: number;
    private _numReps: number;
    private _restTime: number;
    private _difficulty: string;

    constructor(name: string, muscleGroup: string, equipment: string, description: string, numSets: number, numReps: number, restTime: number, difficulty: string){
        this._name = name;
        this._muscleGroup = muscleGroup;
        this._equipment = equipment;
        this._description = description;
        this._numSets = numSets;
        this._numReps = numReps;
        this._restTime = restTime;
        this._difficulty = difficulty;
    }


    get name(): string {
        return this._name;
    }

    set name(value: string) {
        this._name = value;
    }

    get muscleGroup(): string {
        return this._muscleGroup;
    }

    set muscleGroup(value: string) {
        this._muscleGroup = value;
    }

    get equipment(): string {
        return this._equipment;
    }

    set equipment(value: string) {
        this._equipment = value;
    }

    get description(): string {
        return this._description;
    }

    set description(value: string) {
        this._description = value;
    }

    get numSets(): number {
        return this._numSets;
    }

    set numSets(value: number) {
        this._numSets = value;
    }

    get numReps(): number {
        return this._numReps;
    }

    set numReps(value: number) {
        this._numReps = value;
    }

    get restTime(): number {
        return this._restTime;
    }

    set restTime(value: number) {
        this._restTime = value;
    }

    get difficulty(): string {
        return this._difficulty;
    }

    set difficulty(value: string) {
        this._difficulty = value;
    }
}