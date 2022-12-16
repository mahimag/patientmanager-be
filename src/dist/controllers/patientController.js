"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.deletePatient = exports.updatePatient = exports.createPatient = exports.getPatient = exports.getAllPatients = void 0;
var patientService = __importStar(require("../services/patientService"));
var getAllPatients = function (req, res, next) {
    var id = req.body.id;
    patientService
        .getAllPatients(+id)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return next(err); });
};
exports.getAllPatients = getAllPatients;
var getPatient = function (req, res, next) {
    var patientId = req.params.patientId;
    patientService
        .getPatient(+patientId)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return next(err); });
};
exports.getPatient = getPatient;
var createPatient = function (req, res, next) {
    var _a;
    var _b = req.body, firstname = _b.firstname, lastname = _b.lastname, number = _b.number, dob = _b.dob, email = _b.email, address = _b.address, user_id = _b.user_id, is_fav = _b.is_fav;
    var path = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
    patientService
        .createPatient({
        firstname: firstname,
        lastname: lastname,
        number: number,
        dob: dob,
        email: email,
        address: address,
        user_id: JSON.parse(user_id),
        is_fav: JSON.parse(is_fav),
        photo: path,
    })
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return next(err); });
};
exports.createPatient = createPatient;
var updatePatient = function (req, res, next) {
    var _a;
    var patientId = req.params.patientId;
    var _b = req.body, firstname = _b.firstname, lastname = _b.lastname, number = _b.number, dob = _b.dob, email = _b.email, address = _b.address, user_id = _b.user_id, is_fav = _b.is_fav;
    var path = (_a = req.file) === null || _a === void 0 ? void 0 : _a.path;
    patientService
        .updatePatient({
        id: +patientId,
        firstname: firstname,
        lastname: lastname,
        number: number,
        dob: dob,
        email: email,
        address: address,
        user_id: JSON.parse(user_id),
        is_fav: JSON.parse(is_fav),
        photo: path,
    })
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return next(err); });
};
exports.updatePatient = updatePatient;
var deletePatient = function (req, res, next) {
    var patientId = req.params.patientId;
    patientService
        .deletePatient(+patientId)
        .then(function (data) { return res.json(data); })
        .catch(function (err) { return next(err); });
};
exports.deletePatient = deletePatient;
//# sourceMappingURL=patientController.js.map