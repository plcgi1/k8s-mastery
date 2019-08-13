import axios from "axios";
import { ISentiment } from "../interfaces/sentiment.interface";

export default class SentimentProvider {
    public async post(data: ISentiment) {
        try {
            const url = `${process.env.ANALYSE_URL}/analyse/sentiment`;

            const result = await axios.post(url, data);

            return result.data;
        } catch (error) {
            throw new Error(error);
        }
        // return Promise.resolve({});
    }
}
