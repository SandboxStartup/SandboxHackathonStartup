const express = require("express");
const cors = require("cors");
import { User } from "@/app/Classes/User";
const app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
const users: User[] = [];
const userAuths: {userName: string, password: string}[] = [];

app.get("/", (req: any, res: any) => {
  res.send("Hello from Express!");
});

app.post("/api/createUser", (req: any, res: any) => {
    const { _name, _age, _weight, _height, _level,_workoutPlan,_nutritionPlan, _password } = req.body;
    if (!_name || !_age || !_weight || !_height || !_level) {
        res.status(401).send("User data is incomplete");
        return;
    }
    if (users.find((u) => u._name === req.body._name)) {
        res.status(400).send("User already exists");
        return
    }
    else {
        users.push(new User(_name, _age, _weight, _height, _level, _workoutPlan, _nutritionPlan));
        userAuths.push({userName: req.body._name, password: req.body._password});
        res.send("User created successfully!");
    }
});

app.get("/api/getUsers", (req: any, res: any) => {
    res.send(users);
});

app.post("/api/auth/user", (req: any, res: any) => {
    const user = userAuths.find((u) => u.userName=== req.body.userName && u.password === req.body.password);
    if (user) {
        let userObject = users.find((u) => u._name === req.body.userName);
        res.json(userObject);
    }
    else {
        res.status(404).send("User not found");
    }
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
