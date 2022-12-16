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
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getAllUsers = exports.signin = void 0;
var UserAccount_1 = __importDefault(require("../models/UserAccount"));
var jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var signin = function (email, password) { return __awaiter(void 0, void 0, void 0, function () {
    var user, isPasswordMatch, accessToken;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, UserAccount_1.default.getUserByEmail(email)];
            case 1:
                user = _a.sent();
                if (!user) {
                    return [2, {
                            message: "Invalid email or password",
                        }];
                }
                return [4, bcrypt_1.default.compare(password, user.password)];
            case 2:
                isPasswordMatch = _a.sent();
                if (!isPasswordMatch) {
                    return [2, {
                            message: "Password does not match",
                        }];
                }
                accessToken = jsonwebtoken_1.default.sign({ userId: user.id }, process.env.JWT_SECRET);
                return [2, {
                        data: { accessToken: accessToken, id: user.id },
                        message: "User signed in successfully",
                    }];
        }
    });
}); };
exports.signin = signin;
var getAllUsers = function () { return __awaiter(void 0, void 0, void 0, function () {
    var users;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, UserAccount_1.default.getAllUsers()];
            case 1:
                users = _a.sent();
                return [2, {
                        data: users,
                        message: "Users fetched successfully",
                    }];
        }
    });
}); };
exports.getAllUsers = getAllUsers;
var getUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    var user;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, UserAccount_1.default.getUser(userId)];
            case 1:
                user = _a.sent();
                return [2, {
                        data: user,
                        message: "User fetched successfully",
                    }];
        }
    });
}); };
exports.getUser = getUser;
var createUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var insertedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, UserAccount_1.default.createUser(user)];
            case 1:
                insertedUser = _a.sent();
                return [2, {
                        data: insertedUser,
                        message: "User created successfully",
                    }];
        }
    });
}); };
exports.createUser = createUser;
var updateUser = function (user) { return __awaiter(void 0, void 0, void 0, function () {
    var updatedUser;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, UserAccount_1.default.updateUser(user)];
            case 1:
                updatedUser = _a.sent();
                return [2, {
                        data: updatedUser,
                        message: "User updated successfully",
                    }];
        }
    });
}); };
exports.updateUser = updateUser;
var deleteUser = function (userId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, UserAccount_1.default.deleteUser(userId)];
            case 1:
                _a.sent();
                return [2, {
                        message: "User deleted successfully",
                    }];
        }
    });
}); };
exports.deleteUser = deleteUser;
//# sourceMappingURL=userService.js.map