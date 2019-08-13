"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function handleError(err, response) {
    // TODO add errors []
    // TODO add logger
    const res = { message: err.message };
    // tslint:disable-next-line:no-console
    console.error("ERROR", err);
    const status = err.status ? err.status : 500;
    return response.status(status).json(res).end();
}
exports.default = handleError;
//# sourceMappingURL=errors.js.map