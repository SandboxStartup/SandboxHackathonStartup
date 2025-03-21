import {User} from "@/app/Classes/User";

import {MongoClient} from 'mongodb';
import config from './secret/dbConfig.json';
import {createUser, getUser, logoutUser, getUserByToken, updateUserNutritionPlan, updateUserWorkoutPlan} from "./database"
import {BeginnerWorkoutPlan} from "@/app/Classes/WorkoutPlan";
import {NutritionPlan} from "@/app/Classes/NutritionPlan";



const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false });

async function testConnection() {
    try {
        await client.connect();
        await client.db('admin').command({ ping: 1 });
        console.log('Connected successfully to MongoDB');
    } catch (ex) {
        console.error(`Unable to connect to database`);
    } finally {
        await client.close();
    }
}

async function main() {
    try {
        await client.connect();
        await client.db('admin').command({ ping: 1 });
        console.log('Connected successfully to MongoDB');

        let workout: BeginnerWorkoutPlan = new BeginnerWorkoutPlan([], new Map());
        let nutrition: NutritionPlan = new NutritionPlan(new Map());
        await createUser(new User("test", 20, 150, 70, "Beginner", null, null), "password").then(r => console.log(r));
        let user1 = await getUser("test")
        console.log(user1)
        await updateUserWorkoutPlan("token", workout)
        console.log("updated workout")
        let user2 = await getUser("test")
        console.log(user2)
        await updateUserNutritionPlan("token", nutrition)
        console.log("updated nutrition")
        let user3 = await getUser("test")
        console.log(user3)
        workout.exerciseMap = workout.generateWorkouts()
        await updateUserWorkoutPlan("token", workout)
        await logoutUser("token")
        console.log("logged out")
        let user4 = await getUser("test")
        console.log(user4)
    } catch (ex) {
        console.error(`Unable to connect to database`);
    } finally {
        await client.close();
    }
}

main();

