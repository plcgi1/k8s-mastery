import {
    cleanEnv, port, str
} from "envalid";

export default function validateEnv() {
    cleanEnv(process.env, {
        SA_LOGIC_API_URL: str(),
        PORT: str()
    });
}
