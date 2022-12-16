"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.notFound = void 0;
var http_status_codes_1 = require("http-status-codes");
var CustomError_1 = __importDefault(require("../misc/CustomError"));
var notFound = function (req, res, next) {
    var error = new CustomError_1.default("Not Found - ".concat(req.originalUrl), http_status_codes_1.StatusCodes.NOT_FOUND);
    next(error);
};
exports.notFound = notFound;
//# sourceMappingURL=notFound.js.map