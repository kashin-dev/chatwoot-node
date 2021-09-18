"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Model = void 0;
class Model {
    constructor({ client, path, accountScoped = true, accountId }) {
        this.client = client;
        this.path = accountScoped ? `/accounts/${accountId}/${path}` : `/${path}`;
    }
}
exports.Model = Model;
