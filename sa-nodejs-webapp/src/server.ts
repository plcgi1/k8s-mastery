import "dotenv/config";
import App from "./app";
import validateEnv from "./helpers/validate-env";

import SentimentController from "./controllers/api/sentiment/sentiment.controller";

validateEnv();

const app = new App(
    [
        new SentimentController()
    ]
);

app.listen();
