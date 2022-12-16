"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var fs_1 = __importDefault(require("fs"));
var common_1 = require("../common");
it("should write data to file ", function () {
    (0, common_1.writeDataToFile)("abc.json", { name: "Mahima", age: "22" });
    var data = fs_1.default.existsSync("abc.json");
    console.log(data);
    expect(data).toEqual(true);
});
//# sourceMappingURL=common.test.js.map