"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.writeDataToFile = void 0;
var fs_1 = __importDefault(require("fs"));
var writeDataToFile = function (filename, content) {
    fs_1.default.writeFileSync(filename, JSON.stringify(content), "utf8");
};
exports.writeDataToFile = writeDataToFile;
//# sourceMappingURL=common.js.map