"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const build_1 = require("./client/build");
const contacts_1 = require("./modules/contacts");
const conversations_1 = require("./modules/conversations");
class ChatwootClient {
    constructor({ config }) {
        this.client = (0, build_1.buildClient)({
            config: {
                host: config.host,
                apiVersion: config.apiVersion,
                apiAccessToken: config.apiAccessToken
            }
        });
        this.contacts = this.getInstance(contacts_1.Contacts);
        this.conversations = this.getInstance(conversations_1.Conversations);
    }
    getInstance(c) {
        return (accId) => new c({ client: this.client, accountId: accId });
    }
}
exports.default = ChatwootClient;
