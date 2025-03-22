"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cors = require("cors");
var User_1 = require("@/app/Classes/User");
var database_1 = require("./database");
var app = express();
app.use(cors()); // Allow cross-origin requests
app.use(express.json());
app.get("/", function (req, res) {
    res.send("Hello from Express!");
});
app.post("/api/createUser", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var _a, _name, _age, _weight, _height, _level, _workoutPlan, _nutritionPlan, _password, userObj, _b, user, token, password;
    return __generator(this, function (_c) {
        switch (_c.label) {
            case 0:
                _a = req.body, _name = _a._name, _age = _a._age, _weight = _a._weight, _height = _a._height, _level = _a._level, _workoutPlan = _a._workoutPlan, _nutritionPlan = _a._nutritionPlan, _password = _a._password;
                if (!_name || !_age || !_weight || !_height || !_level) {
                    res.status(401).send("User data is incomplete");
                    return [2 /*return*/];
                }
                return [4 /*yield*/, (0, database_1.getUser)(_name)];
            case 1:
                if (!((_c.sent()) !== null)) return [3 /*break*/, 2];
                res.status(401).send("User already exists");
                return [3 /*break*/, 4];
            case 2:
                userObj = new User_1.User(_name, _age, _weight, _height, _level, _workoutPlan, _nutritionPlan);
                return [4 /*yield*/, (0, database_1.createUser)(userObj, _password)];
            case 3:
                _b = _c.sent(), user = _b[0], token = _b[1], password = _b[2];
                res.send("User created successfully!");
                _c.label = 4;
            case 4: return [2 /*return*/];
        }
    });
}); });
app.get("/api/getUsers", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, database_1.getAllUsers)()];
            case 1:
                users = _a.sent();
                res.send(users);
                return [2 /*return*/];
        }
    });
}); });
app.post("/api/update/workoutPlan", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, database_1.getUser)(req.body.userName)];
            case 1:
                user = _a.sent();
                if (user === null) {
                    res.status(401).send("User not found");
                    return [2 /*return*/];
                }
                user.workoutPlan = req.body.workoutPlan;
                return [4 /*yield*/, (0, database_1.updateUserWorkoutPlan)(req.body.token, user.workoutPlan)];
            case 2:
                _a.sent();
                res.send("Workout plan updated successfully!");
                return [2 /*return*/];
        }
    });
}); });
app.post("/api/update/nutritionPlan", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, database_1.getUser)(req.body.userName)];
            case 1:
                user = _a.sent();
                if (user === null) {
                    res.status(401).send("User not found");
                    return [2 /*return*/];
                }
                user.nutritionPlan = req.body.nutritionPlan;
                return [4 /*yield*/, (0, database_1.updateUserNutritionPlan)(req.body.token, user.nutritionPlan)];
            case 2:
                _a.sent();
                res.send("Nutrition plan updated successfully!");
                return [2 /*return*/];
        }
    });
}); });
app.post("/api/login/user", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, database_1.authenticateUser)(req.body.userName, req.body.password)];
            case 1:
                if ((_a.sent()) === null) {
                    res.status(401).send("Invalid username or password");
                }
                return [4 /*yield*/, (0, database_1.getUser)(req.body.userName)];
            case 2:
                user = _a.sent();
                res.send(user);
                return [2 /*return*/];
        }
    });
}); });
app.post("/api/authUser", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, database_1.authenticateUser)(req.body.userName, req.body.password)];
            case 1:
                if ((_a.sent()) === null) {
                    res.status(401).send("Not authenticated");
                }
                res.send("Authenticated");
                return [2 /*return*/];
        }
    });
}); });
app.post("/api/logout", function (req, res) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4 /*yield*/, (0, database_1.logoutUser)(req.body.token)];
            case 1:
                _a.sent();
                res.send("Logged out");
                return [2 /*return*/];
        }
    });
}); });
var PORT = 3000;
app.listen(PORT, function () {
    console.log("Server running on http://localhost:".concat(PORT));
});
