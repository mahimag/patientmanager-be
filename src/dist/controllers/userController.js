"use strict";
var __assign = (this && this.__assign) || function () {
    __assign = Object.assign || function(t) {
        for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
                t[p] = s[p];
        }
        return t;
    };
    return __assign.apply(this, arguments);
};
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.deleteUser = exports.updateUser = exports.createUser = exports.getUser = exports.getAllUsers = void 0;
var http_status_codes_1 = require("http-status-codes");
var logger_1 = __importDefault(require("../misc/logger"));
var CustomError_1 = __importDefault(require("../misc/CustomError"));
var userService = __importStar(require("../services/userService"));
var bcrypt_1 = __importDefault(require("bcrypt"));
var getAllUsers = function (req, res, next) {
    userService
        .getAllUsers()
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return next(err); });
};
exports.getAllUsers = getAllUsers;
var getUser = function (req, res, next) {
    var userId = req.params.userId;
    userService
        .getUser(+userId)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return next(err); });
};
exports.getUser = getUser;
var createUser = function (req, res, next) {
    var password = req.body.password;
    bcrypt_1.default.hash(password, 14, function (err, hash) {
        userService
            .createUser(__assign(__assign({}, req.body), { password: hash }))
            .then(function (data) { return res.json(data); })
            .catch(function (err) { return next(err); });
    });
};
exports.createUser = createUser;
var updateUser = function (req, res, next) {
    var userId = req.params.userId;
    var _a = req.body, email = _a.email, password = _a.password;
    if (!userId || !password || !email) {
        logger_1.default.error("Missing parameters userId or name or email");
        throw new CustomError_1.default("UserId, Name and email are required", http_status_codes_1.StatusCodes.BAD_REQUEST);
    }
    userService
        .updateUser({ id: +userId, email: email, password: password })
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return next(err); });
};
exports.updateUser = updateUser;
var deleteUser = function (req, res, next) {
    var userId = req.params.userId;
    userService
        .deleteUser(+userId)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return next(err); });
};
exports.deleteUser = deleteUser;
//# sourceMappingURL=userController.js.map