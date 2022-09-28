"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var winston_1 = require("winston");
var logFormat = winston_1.format.printf(function (_a) {
    var level = _a.level, message = _a.message, timestamp = _a.timestamp, stack = _a.stack;
    return "[".concat(timestamp, "] [").concat(level, "] : ").concat(stack || message);
});
var logger = (0, winston_1.createLogger)({
    format: winston_1.format.combine(winston_1.format.colorize(), winston_1.format.timestamp({ format: "YYYY-MM-DD HH:mm:ss" }), logFormat),
    transports: [new winston_1.transports.Console()],
});
exports.default = logger;
//# sourceMappingURL=logger.js.map