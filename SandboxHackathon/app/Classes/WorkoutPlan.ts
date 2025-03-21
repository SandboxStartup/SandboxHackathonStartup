import {User} from "./User";
import {Exercise} from "./Exercise";

export abstract class WorkoutPlan {
    protected _availableEquipment: string[];
    protected _exerciseMap: Map<string, Exercise[]>;

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

    abstract getListWorkouts(): Map<string, Exercise[]>;

    abstract generateWorkouts(): Map<string, Exercise[]>;
}

export class BeginnerWorkoutPlan extends WorkoutPlan{
    private beginnerWorkouts: Map<string, Exercise[]>;

    constructor(availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        super(availableEquipment, exerciseMap);
        this.beginnerWorkouts = this.getListWorkouts();
    }

    public generateWorkouts() {
        this.exerciseMap =  new Map<string, Exercise[]>([
            ["Monday", [
                new Exercise("Bench Press", "Chest", "Barbell", "Press the barbell from chest level upwards.", 4, 8, 60, "Beginner"),
                new Exercise("Pull-Ups", "Back", "Bodyweight", "Pull your chin above the bar.", 3, 10, 60, "Beginner"),
                new Exercise("Bicep Curls", "Arms", "Dumbbells", "Curl the dumbbells towards your shoulders.", 3, 12, 45, "Beginner")
            ]],
            ["Tuesday", [
                new Exercise("Squats", "Legs", "Barbell", "Lower your body by bending knees, then stand back up.", 4, 10, 90, "Beginner"),
                new Exercise("Lunges", "Legs", "Dumbbells", "Step forward and lower your back knee close to the floor.", 3, 12, 60, "Beginner"),
                new Exercise("Calf Raises", "Legs", "Bodyweight", "Rise up on your toes and lower down slowly.", 4, 15, 30, "Beginner")
            ]],
            ["Wednesday", [
                new Exercise("Push-Ups", "Chest", "Bodyweight", "Lower your body to the ground and push back up.", 3, 15, 45, "Beginner"),
                new Exercise("Dumbbell Rows", "Back", "Dumbbells", "Pull the dumbbells towards your hips.", 3, 12, 60, "Beginner"),
                new Exercise("Tricep Extensions", "Arms", "Dumbbell", "Extend your arms overhead with a dumbbell.", 3, 12, 60, "Beginner")
            ]],
            ["Thursday", [
                new Exercise("Incline Dumbbell Press", "Chest", "Dumbbells", "Press dumbbells up at an incline.", 4, 8, 60, "Beginner"),
                new Exercise("Lat Pulldown", "Back", "Machine", "Pull the bar down to chest level.", 3, 10, 60, "Beginner"),
                new Exercise("Tricep Dips", "Arms", "Bodyweight", "Lower your body by bending elbows, then push up.", 3, 10, 60, "Beginner")
            ]],
            ["Friday", [
                new Exercise("Deadlifts", "Back", "Barbell", "Lift the barbell from the floor to standing.", 4, 6, 120, "Beginner"),
                new Exercise("Leg Press", "Legs", "Machine", "Press the platform upwards using your legs.", 3, 10, 90, "Beginner"),
                new Exercise("Hamstring Curls", "Legs", "Machine", "Curl the weight towards your glutes.", 3, 12, 60, "Beginner")
            ]],
            ["Saturday", [
                new Exercise("Planks", "Core", "Bodyweight", "Hold a straight-body position for time.", 3, 60, 30, "Beginner"),
                new Exercise("Russian Twists", "Core", "Dumbbell", "Twist your torso while holding a dumbbell.", 3, 20, 30, "Beginner"),
                new Exercise("Hanging Leg Raises", "Core", "Bodyweight", "Raise your legs while hanging from a bar.", 3, 12, 45, "Beginner")
            ]]
        ]);

        return this.exerciseMap;
    }


    getListWorkouts(){
        return new Map<string, Exercise[]>();
    }

}

export class IntermediateWorkoutPlan extends WorkoutPlan {
    private intermediateWorkouts: Map<string, Exercise[]>;

    constructor(availableEquipment: string[], exerciseMap: Map<string, Exercise[]>) {
        super(availableEquipment, exerciseMap);
        this.intermediateWorkouts = this.getListWorkouts();
    }

    generateWorkouts() {
        this.exerciseMap = new Map<string, Exercise[]>([
            ["Monday", [
                new Exercise("Dumbbell Bench Press", "Chest", "Dumbbells", "Press the dumbbells from chest level upwards.", 4, 10, 60, "Intermediate"),
                new Exercise("Pull-Ups", "Back", "Bodyweight", "Pull your chin above the bar.", 4, 8, 60, "Intermediate"),
                new Exercise("Hammer Curls", "Arms", "Dumbbells", "Curl the dumbbells with a neutral grip.", 3, 12, 45, "Intermediate")
            ]],
            ["Tuesday", [
                new Exercise("Barbell Squats", "Legs", "Barbell", "Lower your body by bending knees, then stand back up.", 4, 8, 90, "Intermediate"),
                new Exercise("Bulgarian Split Squats", "Legs", "Dumbbells", "Lower your back knee towards the floor while holding dumbbells.", 3, 10, 60, "Intermediate"),
                new Exercise("Seated Calf Raises", "Legs", "Machine", "Press upwards with the balls of your feet.", 4, 15, 30, "Intermediate")
            ]],
            ["Thursday", [
                new Exercise("Incline Dumbbell Press", "Chest", "Dumbbells", "Press dumbbells up at an incline.", 4, 10, 60, "Intermediate"),
                new Exercise("Lat Pulldown", "Back", "Machine", "Pull the bar down to chest level.", 4, 10, 60, "Intermediate"),
                new Exercise("Overhead Tricep Extensions", "Arms", "Dumbbell", "Extend your arms overhead with a dumbbell.", 3, 12, 60, "Intermediate")
            ]],
            ["Friday", [
                new Exercise("Romanian Deadlifts", "Back & Hamstrings", "Barbell", "Lower the bar while keeping a slight bend in the knees.", 4, 8, 90, "Intermediate"),
                new Exercise("Leg Press", "Legs", "Machine", "Press the platform upwards using your legs.", 3, 12, 90, "Intermediate"),
                new Exercise("Hamstring Curls", "Legs", "Machine", "Curl the weight towards your glutes.", 3, 12, 60, "Intermediate")
            ]],
            ["Saturday", [
                new Exercise("Hanging Knee Raises", "Core", "Bodyweight", "Raise your knees while hanging from a bar.", 3, 12, 45, "Intermediate"),
                new Exercise("Bicycle Crunches", "Core", "Bodyweight", "Alternate touching elbows to opposite knees.", 3, 20, 30, "Intermediate"),
                new Exercise("Side Planks", "Core", "Bodyweight", "Hold a side position on your elbow.", 3, 45, 30, "Intermediate")
            ]]
        ]);
        return this.exerciseMap;
    }


    getListWorkouts() {
        return new Map<string, Exercise[]>();
    }
}

export class AdvancedWorkoutPlan extends WorkoutPlan{
    private advancedWorkouts: Map<string, Exercise[]>;

    constructor(availableEquipment: string[], exerciseMap: Map<string, Exercise[]>){
        super(availableEquipment, exerciseMap);
        this.advancedWorkouts = this.getListWorkouts();
    }

    generateWorkouts() {
        this.exerciseMap = new Map<string, Exercise[]>([
            ["Monday", [
                new Exercise("Barbell Bench Press", "Chest", "Barbell", "Press the barbell from chest level upwards.", 5, 6, 90, "Advanced"),
                new Exercise("Weighted Pull-Ups", "Back", "Bodyweight + Weight", "Pull your chin above the bar while carrying extra weight.", 4, 8, 75, "Advanced"),
                new Exercise("EZ Bar Preacher Curls", "Arms", "EZ Bar", "Curl the EZ bar while keeping arms supported on a pad.", 4, 10, 60, "Advanced")
            ]],
            ["Tuesday", [
                new Exercise("Front Squats", "Legs", "Barbell", "Lower your body by bending knees while holding the barbell in front.", 5, 6, 120, "Advanced"),
                new Exercise("Bulgarian Split Squats", "Legs", "Dumbbells", "Lower your back knee towards the floor while holding dumbbells.", 4, 10, 75, "Advanced"),
                new Exercise("Standing Calf Raises", "Legs", "Machine", "Press upwards with the balls of your feet.", 4, 15, 45, "Advanced")
            ]],
            ["Thursday", [
                new Exercise("Incline Barbell Press", "Chest", "Barbell", "Press the barbell up at an incline.", 5, 6, 90, "Advanced"),
                new Exercise("Weighted Wide-Grip Pull-Ups", "Back", "Bodyweight + Weight", "Pull the bar down with a wide grip.", 4, 8, 75, "Advanced"),
                new Exercise("Ring Dips", "Arms", "Gymnastic Rings", "Lower your body by bending elbows, then push up.", 4, 10, 60, "Advanced")
            ]],
            ["Friday", [
                new Exercise("Conventional Deadlifts", "Back & Legs", "Barbell", "Lift the barbell from the floor to a standing position.", 5, 5, 150, "Advanced"),
                new Exercise("Pistol Squats", "Legs", "Bodyweight", "Squat down on one leg while extending the other forward.", 4, 8, 75, "Advanced"),
                new Exercise("Nordic Hamstring Curls", "Legs", "Bodyweight", "Lower your torso under control using hamstring strength.", 3, 8, 90, "Advanced")
            ]],
            ["Saturday", [
                new Exercise("Dragon Flags", "Core", "Bodyweight", "Lower and raise your body while keeping it straight.", 3, 8, 45, "Advanced"),
                new Exercise("Cable Woodchoppers", "Core", "Cable Machine", "Rotate your torso diagonally while pulling a cable.", 3, 12, 60, "Advanced"),
                new Exercise("Ab Rollouts", "Core", "Ab Wheel", "Extend forward and return while keeping core engaged.", 4, 10, 45, "Advanced")
            ]]
        ]);
        return this.exerciseMap;
    }


    getListWorkouts(){
        return new Map<string, Exercise[]>();
    }
}