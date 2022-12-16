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
exports.deletePatient = exports.updatePatient = exports.createPatient = exports.getPatient = exports.getAllPatients = void 0;
var logger_1 = __importDefault(require("../misc/logger"));
var PatientModel_1 = __importDefault(require("../models/PatientModel"));
var fs_1 = __importDefault(require("fs"));
var cloudinary_1 = require("cloudinary");
var getAllPatients = function (id) { return __awaiter(void 0, void 0, void 0, function () {
    var patients;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, PatientModel_1.default.getAllPatients(id)];
            case 1:
                patients = _a.sent();
                return [2, {
                        data: patients,
                        message: "Patients fetched successfully",
                    }];
        }
    });
}); };
exports.getAllPatients = getAllPatients;
var getPatient = function (patientId) { return __awaiter(void 0, void 0, void 0, function () {
    var patient;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, PatientModel_1.default.getPatient(patientId)];
            case 1:
                patient = _a.sent();
                return [2, {
                        data: patient,
                        message: "Patient fetched successfully",
                    }];
        }
    });
}); };
exports.getPatient = getPatient;
var createPatient = function (patient) { return __awaiter(void 0, void 0, void 0, function () {
    var result, insertedPatient, error_1;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!fs_1.default.existsSync(patient.photo)) {
                    throw new Error("File not found!!");
                }
                return [4, cloudinary_1.v2.uploader.upload(patient.photo, {
                        resource_type: "image",
                        use_filename: true,
                        width: 500,
                        height: 500,
                        crop: "limit",
                    })];
            case 1:
                result = _a.sent();
                fs_1.default.unlinkSync(patient.photo);
                return [4, PatientModel_1.default.createPatient(__assign(__assign({}, patient), { photo: result.url }))];
            case 2:
                insertedPatient = _a.sent();
                return [2, {
                        data: insertedPatient,
                        message: "Patient created successfully",
                    }];
            case 3:
                error_1 = _a.sent();
                logger_1.default.error(error_1);
                return [2, {
                        message: "Patient could not be created",
                    }];
            case 4: return [2];
        }
    });
}); };
exports.createPatient = createPatient;
var updatePatient = function (patient) { return __awaiter(void 0, void 0, void 0, function () {
    var result, updatedPatient, error_2;
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0:
                _a.trys.push([0, 3, , 4]);
                if (!fs_1.default.existsSync(patient.photo)) {
                    throw new Error("File not found!!");
                }
                return [4, cloudinary_1.v2.uploader.upload(patient.photo, {
                        resource_type: "image",
                        use_filename: true,
                        width: 500,
                        height: 500,
                        crop: "limit",
                    })];
            case 1:
                result = _a.sent();
                fs_1.default.unlinkSync(patient.photo);
                return [4, PatientModel_1.default.updatePatient(__assign(__assign({}, patient), { photo: result.url }))];
            case 2:
                updatedPatient = _a.sent();
                return [2, {
                        data: updatedPatient,
                        message: "Patient created successfully",
                    }];
            case 3:
                error_2 = _a.sent();
                logger_1.default.error(error_2);
                return [2, {
                        message: "Patient could not be updated",
                    }];
            case 4: return [2];
        }
    });
}); };
exports.updatePatient = updatePatient;
var deletePatient = function (PatientId) { return __awaiter(void 0, void 0, void 0, function () {
    return __generator(this, function (_a) {
        switch (_a.label) {
            case 0: return [4, PatientModel_1.default.deletePatient(PatientId)];
            case 1:
                _a.sent();
                return [2, {
                        message: "Patient deleted successfully",
                    }];
        }
    });
}); };
exports.deletePatient = deletePatient;
//# sourceMappingURL=patientService.js.map