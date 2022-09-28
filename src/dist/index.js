"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var cors_1 = __importDefault(require("cors"));
var dotenv_1 = __importDefault(require("dotenv"));
var express_1 = __importDefault(require("express"));
var routes_1 = __importDefault(require("./routes"));
var notFound_1 = require("./middlewares/notFound");
var errorHandler_1 = require("./middlewares/errorHandler");
var cloudinary_1 = require("cloudinary");
var logger_1 = __importDefault(require("./misc/logger"));
dotenv_1.default.config();
cloudinary_1.v2.config();
var app = (0, express_1.default)();
app.use(express_1.default.json());
app.use((0, cors_1.default)());
app.get("/", function (req, res, next) {
    res.send("API is running....");
});
app.use(routes_1.default);
app.use(notFound_1.notFound);
app.use(errorHandler_1.errorHandler);
var PORT = process.env.PORT || 3001;
app.listen(PORT, function () {
    console.clear();
    logger_1.default.info("Server is running on port ".concat(PORT));
});
//# sourceMappingURL=index.js.map