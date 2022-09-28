"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var knex_1 = __importDefault(require("knex"));
var knexfile_1 = __importDefault(require("./knexfile"));
var knex_stringcase_1 = __importDefault(require("knex-stringcase"));
var knex = (0, knex_1.default)((0, knex_stringcase_1.default)(knexfile_1.default.development));
exports.default = knex;
//# sourceMappingURL=db.js.map