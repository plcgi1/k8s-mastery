import { Response } from "express";
import HttpException from "../exceptions/http.exception";

export default function handleError(err: HttpException, response: Response) {
    // TODO add errors []
    // TODO add logger
    const res = { message: err.message };
    // tslint:disable-next-line:no-console
    console.error("ERROR", err);

    const status = err.status ? err.status : 500;
    return response.status(status).json(res).end();
}
