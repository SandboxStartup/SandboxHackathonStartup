import {User} from "./User";
import {Exercise} from "./Exercise";

export abstract class WorkoutPlan {
    private _availableEquipment: string[];
    private _exerciseMap: Map<string, Exercise[]>;

    constructor(availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        this._availableEquipment = availableEquipment;
        this._exerciseMap = exerciseMap;
    }
    get availableEquipment(){
        return this._availableEquipment;
    }
    get exerciseMap(){
        return this._exerciseMap;
    }
    set availableEquipment(value: string[]){
        this._availableEquipment = value;
    }
    set exerciseMap(value: Map<string, Exercise[]>){
        this._exerciseMap = value;
    }
}

export class BeginnerWorkoutPlan extends WorkoutPlan{
    private beginnerWorkouts: Map<string, Exercise[]>;

    constructor(availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        super(availableEquipment, exerciseMap);
        this.beginnerWorkouts = this.generateWorkouts();
    }

    generateWorkouts(){
        return new Map<string, Exercise[]>();
    }

}

export class IntermediateWorkoutPlan extends WorkoutPlan{
    private intermediateWorkouts: Map<string, Exercise[]>;

    constructor(availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        super(availableEquipment, exerciseMap);
        this.intermediateWorkouts = this.generateWorkouts();
    }

    generateWorkouts(){
        return new Map<string, Exercise[]>();
    }
}

export class AdvancedWorkoutPlan extends WorkoutPlan{
    private advancedWorkouts: Map<string, Exercise[]>;

    constructor(availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        super(availableEquipment, exerciseMap);
        this.advancedWorkouts = this.generateWorkouts();
    }

    generateWorkouts(){
        return new Map<string, Exercise[]>();
    }
}