"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var multer_1 = __importDefault(require("multer"));
var fs_1 = __importDefault(require("fs"));
var storage = multer_1.default.diskStorage({
    destination: function (req, file, cb) {
        var path = process.env.UPLOAD_PATH || "uploads";
        if (!fs_1.default.existsSync(path)) {
            fs_1.default.mkdirSync(path, { recursive: true });
        }
        if (file) {
            cb(null, path);
        }
        else {
            cb(new Error("Multer error!!"), "");
        }
    },
    filename: function (req, file, cb) {
        if (file) {
            cb(null, Date.now() + "_" + file.originalname);
        }
        else {
            cb(new Error("Multer error!!"), "");
        }
    },
});
var upload = (0, multer_1.default)({ storage: storage });
exports.default = upload;
//# sourceMappingURL=multer.js.map