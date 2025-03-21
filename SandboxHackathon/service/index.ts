import {awaitExpression} from "@babel/types";

const express = require("express");
const cors = require("cors");
import { User } from "@/app/Classes/User";
import {
    createUser,
    getUser,
    getAllUsers,
    authenticateUser,
    logoutUser,
    updateUserWorkoutPlan,
    updateUserNutritionPlan
} from "./database"
const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json());

app.get("/", (req: any, res: any) => {
  res.send("Hello from Express!");
});

app.post("/api/createUser", async (req: any, res: any) => {
    const {_name, _age, _weight, _height, _level, _workoutPlan, _nutritionPlan, _password} = req.body;
    if (!_name || !_age || !_weight || !_height || !_level) {
        res.status(401).send("User data is incomplete");
        return;
    }
    if (await getUser(_name) !== null) {
        res.status(401).send("User already exists");
    } else {
        let userObj = new User(_name, _age, _weight, _height, _level, _workoutPlan, _nutritionPlan);
        const [user, token, password] = await createUser(userObj, _password);
        res.send("User created successfully!");
    }
});

app.get("/api/getUsers", async (req: any, res: any) => {
    let users: User[] = await getAllUsers()
    res.send(users);
});

app.post("/api/update/workoutPlan", async (req: any, res: any) => {
    let user = await getUser(req.body.userName);
    if (user === null) {
        res.status(401).send("User not found");
        return;
    }
    user.workoutPlan = req.body.workoutPlan;
    await updateUserWorkoutPlan(req.body.token, user.workoutPlan);
    res.send("Workout plan updated successfully!");
});

app.post("/api/update/nutritionPlan", async (req: any, res: any) => {
    let user = await getUser(req.body.userName);
    if (user === null) {
        res.status(401).send("User not found");
        return;
    }
    user.nutritionPlan = req.body.nutritionPlan;
    await updateUserNutritionPlan(req.body.token, user.nutritionPlan);
    res.send("Nutrition plan updated successfully!");
});



app.post("/api/login/user", async (req: any, res: any) => {
    if (await authenticateUser(req.body.userName, req.body.password) === null) {
        res.status(401).send("Invalid username or password");
    }
    let user = await getUser(req.body.userName);
    res.send(user);
});

app.post("/api/authUser",async (req: any, res: any) => {
    if (await authenticateUser(req.body.userName, req.body.password) === null) {
        res.status(401).send("Not authenticated");
    }
    res.send("Authenticated");
});

app.post("/api/logout",async (req: any, res: any) => {
    await logoutUser(req.body.token);
    res.send("Logged out");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
