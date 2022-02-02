"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const axios_rate_limit_1 = __importDefault(require("axios-rate-limit"));
const build_1 = require("./client/build");
const contacts_1 = require("./modules/contacts");
const conversations_1 = require("./modules/conversations");
class ChatwootClient {
    constructor({ config }, maxRPS = 5) {
        this.client = (0, axios_rate_limit_1.default)((0, build_1.buildClient)({
            config: {
                host: config.host,
                apiVersion: config.apiVersion,
                apiAccessToken: config.apiAccessToken
            }
        }), { maxRPS });
        this.contacts = this.getInstance(contacts_1.Contacts);
        this.conversations = this.getInstance(conversations_1.Conversations);
    }
    getInstance(c) {
        return (accId) => new c({ client: this.client, accountId: accId });
    }
}
exports.default = ChatwootClient;
