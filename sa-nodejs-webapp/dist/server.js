"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const app_1 = __importDefault(require("./app"));
const validate_env_1 = __importDefault(require("./helpers/validate-env"));
const sentiment_controller_1 = __importDefault(require("./controllers/api/sentiment/sentiment.controller"));
validate_env_1.default();
const app = new app_1.default([
    new sentiment_controller_1.default()
]);
app.listen();
//# sourceMappingURL=server.js.map