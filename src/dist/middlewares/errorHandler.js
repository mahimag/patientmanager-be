"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.errorHandler = void 0;
var errorHandler = function (err, req, res, next) {
    res.status(err.statusCode);
    res.json({
        message: err.message,
        stack: process.env.NODE_ENV === "production" ? null : err.stack,
    });
};
exports.errorHandler = errorHandler;
//# sourceMappingURL=errorHandler.js.map