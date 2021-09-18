"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.buildClient = void 0;
const axios_1 = __importDefault(require("axios"));
const DEFAULT_HOST = 'https://app.chatwoot.com';
const DEFAULT_API_VERSION = 'api/v1';
const buildClient = ({ config }) => {
    return axios_1.default.create({
        baseURL: `${config.host || DEFAULT_HOST}/${config.apiVersion || DEFAULT_API_VERSION}`,
        timeout: 20000,
        headers: { api_access_token: config.apiAccessToken }
    });
};
exports.buildClient = buildClient;
