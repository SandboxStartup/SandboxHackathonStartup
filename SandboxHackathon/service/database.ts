import {User} from "@/app/Classes/User";
import {MongoClient} from 'mongodb';
import bcrypt from 'bcrypt';
import { v4 as uuidv4 } from 'uuid';
import config from "./secret/dbConfig.json";
import { WorkoutPlan } from "@/app/Classes/WorkoutPlan";
import {NutritionPlan} from "@/app/Classes/NutritionPlan";

const url = `mongodb+srv://${config.userName}:${config.password}@${config.hostname}`;
const client = new MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
const db = client.db('Sandbox');
const userCollection = db.collection('user');

(async function testConnection() {
    await client.connect();
    await db.command({ ping: 1 });
})().catch((ex) => {
    console.log(`Unable to connect to database with ${url} because ${ex.message}`);
    process.exit(1);
});

export async function getUser(name: string): Promise<User | null> {
    const userDoc = await userCollection.findOne({ _name: name });
    let name1: string = userDoc?._name;
    if (!userDoc || userDoc.token == undefined) return null;

    let user = new User(
        userDoc._name,
        userDoc._age,
        userDoc._weight,
        userDoc._height,
        userDoc._level,
        userDoc._workoutPlan,
        userDoc._nutritionPlan
    );

    return user
}

export async function getUserByToken(token: string): Promise<User | null> {
    const userDoc = await userCollection.findOne({ token: token });
    if (!userDoc) return null;
    let user = new User(
        userDoc.name,
        userDoc.age,
        userDoc.weight,
        userDoc.height,
        userDoc.level,
        userDoc.workoutPlan,
        userDoc.nutritionPlan
    );
    return Promise.resolve(user);
}

export async function getAllUsers(): Promise<User[]> {
    const users = await userCollection.find().toArray();
    return users.map((userDoc) => {
        return new User(
            userDoc._name,
            userDoc._age,
            userDoc._weight,
            userDoc._height,
            userDoc._level,
            userDoc._workoutPlan,
            userDoc._nutritionPlan
        );
    });
}

export async function createUser(user: User, password: string): Promise<[User, string, string]> {
    const passwordHash = await bcrypt.hash(password, 10);
    const token = uuidv4();
    const userPlusToken = {
        _name: user.name,
        _age: user.age,
        _weight: user.weight,
        _height: user.height,
        _level: user.level,
        _workoutPlan: user.workoutPlan,
        _nutritionPlan: user.nutritionPlan,
        token: "token",
        password: passwordHash
    };
    await userCollection.insertOne(userPlusToken);
    return [user, token, passwordHash];
}

export async function authenticateUser(name: string, password: string) {
    const userDoc = await userCollection.findOne({ _name: name });
    if (!userDoc) return null;
    const valid = await bcrypt.compare(password, userDoc._password);
    if (!valid) return null;
    const token = uuidv4();
    await userCollection.updateOne({ _name: name }, { $set: { token: token } });
    return token;
}

export async function logoutUser(token: string) {
    await userCollection.updateOne({token: token}, {$set: {token: ""}});
}

export async function updateUserWorkoutPlan(token: string, workoutPlan: WorkoutPlan | null) {
    await userCollection.updateOne({token: token}, {$set: {_workoutPlan: workoutPlan}});
}

export async function updateUserNutritionPlan(token: string, nutritionPlan: NutritionPlan | null) {
    await userCollection.updateOne({token: token}, {$set: {_nutritionPlan: nutritionPlan}});
}

module.exports = {
    getUser,
    getUserByToken,
    createUser,
    logoutUser,
    updateUserWorkoutPlan,
    updateUserNutritionPlan,
    getAllUsers,
    authenticateUser
};