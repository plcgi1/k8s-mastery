"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const errors_1 = __importDefault(require("../../../helpers/errors"));
const sentiment_provider_1 = __importDefault(require("../../../providers/sentiment.provider"));
class SentimentController {
    constructor() {
        this.path = "/sentiment";
        this.router = express_1.default.Router();
        this.client = new sentiment_provider_1.default();
        this.sentiment = (req, response) => __awaiter(this, void 0, void 0, function* () {
            try {
                const postData = req.body;
                const result = yield this.client.post(Object.assign({}, postData));
                return response.json(result);
            }
            catch (error) {
                return errors_1.default(error, response);
            }
        });
        this.intializeRoutes();
    }
    intializeRoutes() {
        this.router.post(this.path, this.sentiment);
    }
}
exports.default = SentimentController;
//# sourceMappingURL=sentiment.controller.js.map