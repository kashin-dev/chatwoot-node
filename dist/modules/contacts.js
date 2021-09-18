"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Contacts = void 0;
const model_1 = require("./model");
class Contacts extends model_1.Model {
    constructor({ client, accountId }) {
        super({ client, path: 'contacts', accountId });
    }
    get(page = 1, sortAttr = 'name') {
        return this.client.get(`${this.path}?page=${page}&sort=${sortAttr}`);
    }
    findOne(id) {
        return this.client.get(`${this.path}/${id}`);
    }
    update(id, c) {
        return this.client.put(`${this.path}/${id}`, c);
    }
    create(c) {
        return this.client.post(`${this.path}`, c);
    }
    search(q, page = 1, sort = 'name') {
        return this.client.get(`${this.path}/search?q=${q}&page=${page}&sort=${sort}`);
    }
}
exports.Contacts = Contacts;
