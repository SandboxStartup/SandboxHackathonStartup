"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var User_1 = require("@/app/Classes/User");
var app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
var users = [];
var userAuths = [];
app.get("/", function (req, res) {
    res.send("Hello from Express!");
});
app.post("/api/createUser", function (req, res) {
    var _a = req.body, _name = _a._name, _age = _a._age, _weight = _a._weight, _height = _a._height, _level = _a._level, _workoutPlan = _a._workoutPlan, _nutritionPlan = _a._nutritionPlan, _password = _a._password;
    if (!_name || !_age || !_weight || !_height || !_level) {
        res.status(401).send("User data is incomplete");
        return;
    }
    if (users.find(function (u) { return u._name === req.body._name; })) {
        res.status(400).send("User already exists");
        return;
    }
    else {
        users.push(new User_1.User(_name, _age, _weight, _height, _level, _workoutPlan, _nutritionPlan));
        userAuths.push({ userName: req.body._name, password: req.body._password });
        res.send("User created successfully!");
    }
});
app.get("/api/getUsers", function (req, res) {
    res.send(users);
});
app.post("/api/auth/user", function (req, res) {
    var user = userAuths.find(function (u) { return u.userName === req.body.userName && u.password === req.body.password; });
    if (user) {
        var userObject = users.find(function (u) { return u._name === req.body.userName; });
        res.json(userObject);
    }
    else {
        res.status(404).send("User not found");
    }
});
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
