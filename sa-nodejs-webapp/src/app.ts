import * as bodyParser from "body-parser";
import cookieParser from "cookie-parser";
import express from "express";
import errorMiddleware from "./middleware/error";

class App {
    public app: express.Application;
    public port: number;

    constructor(controllers: any) {
        this.app = express();

        this.initializeMiddlewares();
        this.initializeControllers(controllers);
        this.initializeErrorHandling();
    }

    public listen() {
        this.app.listen(process.env.PORT, () => {
            // tslint:disable-next-line:no-console
            console.log(`App listening on the port ${process.env.PORT}`);
        });
    }

    private initializeMiddlewares() {
        this.app.use(bodyParser.json());
        this.app.use(bodyParser.urlencoded({ extended: false }));
        this.app.use(cookieParser());
    }

    private initializeControllers(controllers: any) {
        controllers.forEach((controller: any) => {
            this.app.use("/api", controller.router);
        });
    }

    private initializeErrorHandling() {
        this.app.use(errorMiddleware);
    }
}

export default App;
