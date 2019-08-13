import express from "express";
import handleError from "../../../helpers/errors";
import IController from "../../../interfaces/controller.interface";
import SentimentClient from "../../../providers/sentiment.provider";
import SentimentDto from "./sentiment.dto";

export default class SentimentController implements IController {
    public path = "/sentiment";
    public router = express.Router();
    public client = new SentimentClient();

    constructor() {
        this.intializeRoutes();
    }

    public intializeRoutes() {
        this.router.post(this.path, this.sentiment);
    }

    private sentiment = async (req: express.Request, response: express.Response) => {
        try {
            const postData: SentimentDto = req.body;

            const result = await this.client.post({
                ...postData
            });
            return response.json(result);
        } catch (error) {
            return handleError(error, response);
        }
    }

}
