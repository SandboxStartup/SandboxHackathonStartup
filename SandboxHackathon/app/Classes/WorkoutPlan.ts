import {User} from "./User";
import {Exercise} from "./Exercise";

export abstract class WorkoutPlan<T> {
    private _user: User<T>;
    private _availableEquipment: string[];
    private _exerciseMap: Map<string, Exercise[]>;

    constructor(user: User<T>, availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        this._user = user;
        this._availableEquipment = availableEquipment;
        this._exerciseMap = exerciseMap;
    }

    get user(){
        return this._user;
    }
    get availableEquipment(){
        return this._availableEquipment;
    }
    get exerciseMap(){
        return this._exerciseMap;
    }
    set user(value: User<T>){
        this._user = value;
    }
    set availableEquipment(value: string[]){
        this._availableEquipment = value;
    }
    set exerciseMap(value: Map<string, Exercise[]>){
        this._exerciseMap = value;
    }
}

export class BeginnerWorkoutPlan extends WorkoutPlan<BeginnerWorkoutPlan>{
    private beginnerWorkouts: Map<string, Exercise[]>;

    constructor(user: User<BeginnerWorkoutPlan>, availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        super(user, availableEquipment, exerciseMap);
        this.beginnerWorkouts = this.generateWorkouts();
    }

    generateWorkouts(){
        return new Map<string, Exercise[]>();
    }

}

export class IntermediateWorkoutPlan extends WorkoutPlan<IntermediateWorkoutPlan>{
    private intermediateWorkouts: Map<string, Exercise[]>;

    constructor(user: User<IntermediateWorkoutPlan>, availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        super(user, availableEquipment, exerciseMap);
        this.intermediateWorkouts = this.generateWorkouts();
    }

    generateWorkouts(){
        return new Map<string, Exercise[]>();
    }
}

export class AdvancedWorkoutPlan extends WorkoutPlan<AdvancedWorkoutPlan>{
    private advancedWorkouts: Map<string, Exercise[]>;

    constructor(user: User<AdvancedWorkoutPlan>, availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        super(user, availableEquipment, exerciseMap);
        this.advancedWorkouts = this.generateWorkouts();
    }

    generateWorkouts(){
        return new Map<string, Exercise[]>();
    }
}