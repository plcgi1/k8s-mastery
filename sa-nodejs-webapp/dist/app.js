"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bodyParser = __importStar(require("body-parser"));
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const express_1 = __importDefault(require("express"));
const error_1 = __importDefault(require("./middleware/error"));
class App {
    constructor(controllers) {
        this.app = express_1.default();
        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }
    listen() {
        this.app.listen(process.env.PORT, () => {
            // tslint:disable-next-line:no-console
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }
    initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookie_parser_1.default());
    }
    initializeControllers(controllers) {
        controllers.forEach((controller) => {
            this.app.use("/api", controller.router);
        });
    }
    initializeErrorHandling() {
        this.app.use(error_1.default);
    }
}
exports.default = App;
//# sourceMappingURL=app.js.map