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
exports.getUser = getUser;
exports.getUserByToken = getUserByToken;
exports.getAllUsers = getAllUsers;
exports.createUser = createUser;
exports.authenticateUser = authenticateUser;
exports.logoutUser = logoutUser;
exports.updateUserWorkoutPlan = updateUserWorkoutPlan;
exports.updateUserNutritionPlan = updateUserNutritionPlan;
var User_1 = require("@/app/Classes/User");
var mongodb_1 = require("mongodb");
var bcrypt_1 = require("bcrypt");
var uuid_1 = require("uuid");
var dbConfig_json_1 = require("./secret/dbConfig.json");
var url = "mongodb+srv://".concat(dbConfig_json_1.default.userName, ":").concat(dbConfig_json_1.default.password, "@").concat(dbConfig_json_1.default.hostname);
var client = new mongodb_1.MongoClient(url, { tls: true, serverSelectionTimeoutMS: 3000, autoSelectFamily: false, });
var db = client.db('Sandbox');
var userCollection = db.collection('user');
(function testConnection() {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, client.connect()];
                case 1:
                    _a.sent();
                    return [4 /*yield*/, db.command({ ping: 1 })];
                case 2:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
})().catch(function (ex) {
    console.log("Unable to connect to database with ".concat(url, " because ").concat(ex.message));
    process.exit(1);
});
function getUser(name) {
    return __awaiter(this, void 0, void 0, function () {
        var userDoc, name1, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userCollection.findOne({ _name: name })];
                case 1:
                    userDoc = _a.sent();
                    name1 = userDoc === null || userDoc === void 0 ? void 0 : userDoc._name;
                    if (!userDoc || userDoc.token == undefined)
                        return [2 /*return*/, null];
                    user = new User_1.User(userDoc._name, userDoc._age, userDoc._weight, userDoc._height, userDoc._level, userDoc._workoutPlan, userDoc._nutritionPlan);
                    return [2 /*return*/, user];
            }
        });
    });
}
function getUserByToken(token) {
    return __awaiter(this, void 0, void 0, function () {
        var userDoc, user;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userCollection.findOne({ token: token })];
                case 1:
                    userDoc = _a.sent();
                    if (!userDoc)
                        return [2 /*return*/, null];
                    user = new User_1.User(userDoc.name, userDoc.age, userDoc.weight, userDoc.height, userDoc.level, userDoc.workoutPlan, userDoc.nutritionPlan);
                    return [2 /*return*/, Promise.resolve(user)];
            }
        });
    });
}
function getAllUsers() {
    return __awaiter(this, void 0, void 0, function () {
        var users;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userCollection.find().toArray()];
                case 1:
                    users = _a.sent();
                    return [2 /*return*/, users.map(function (userDoc) {
                            return new User_1.User(userDoc._name, userDoc._age, userDoc._weight, userDoc._height, userDoc._level, userDoc._workoutPlan, userDoc._nutritionPlan);
                        })];
            }
        });
    });
}
function createUser(user, password) {
    return __awaiter(this, void 0, void 0, function () {
        var passwordHash, token, userPlusToken;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, bcrypt_1.default.hash(password, 10)];
                case 1:
                    passwordHash = _a.sent();
                    token = (0, uuid_1.v4)();
                    userPlusToken = {
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
                    return [4 /*yield*/, userCollection.insertOne(userPlusToken)];
                case 2:
                    _a.sent();
                    return [2 /*return*/, [user, token, passwordHash]];
            }
        });
    });
}
function authenticateUser(name, password) {
    return __awaiter(this, void 0, void 0, function () {
        var userDoc, valid, token;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userCollection.findOne({ _name: name })];
                case 1:
                    userDoc = _a.sent();
                    if (!userDoc)
                        return [2 /*return*/, null];
                    return [4 /*yield*/, bcrypt_1.default.compare(password, userDoc._password)];
                case 2:
                    valid = _a.sent();
                    if (!valid)
                        return [2 /*return*/, null];
                    token = (0, uuid_1.v4)();
                    return [4 /*yield*/, userCollection.updateOne({ _name: name }, { $set: { token: token } })];
                case 3:
                    _a.sent();
                    return [2 /*return*/, token];
            }
        });
    });
}
function logoutUser(token) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userCollection.updateOne({ token: token }, { $set: { token: "" } })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateUserWorkoutPlan(token, workoutPlan) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userCollection.updateOne({ token: token }, { $set: { _workoutPlan: workoutPlan } })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
function updateUserNutritionPlan(token, nutritionPlan) {
    return __awaiter(this, void 0, void 0, function () {
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, userCollection.updateOne({ token: token }, { $set: { _nutritionPlan: nutritionPlan } })];
                case 1:
                    _a.sent();
                    return [2 /*return*/];
            }
        });
    });
}
module.exports = {
    getUser: getUser,
    getUserByToken: getUserByToken,
    createUser: createUser,
    logoutUser: logoutUser,
    updateUserWorkoutPlan: updateUserWorkoutPlan,
    updateUserNutritionPlan: updateUserNutritionPlan,
    getAllUsers: getAllUsers,
    authenticateUser: authenticateUser
};
