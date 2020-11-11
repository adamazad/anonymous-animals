"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.get = void 0;
const animals_json_1 = __importDefault(require("./animals.json"));
exports.get = () => animals_json_1.default[(animals_json_1.default.length * Math.random()) | 0];
const anonymousAnimals = {
    get: exports.get,
};
exports.default = anonymousAnimals;
//# sourceMappingURL=index.js.map