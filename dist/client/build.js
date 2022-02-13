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
    const conn = axios_1.default.create({
        baseURL: `${config.host || DEFAULT_HOST}/${config.apiVersion || DEFAULT_API_VERSION}`,
        timeout: 20000,
        headers: { api_access_token: config.apiAccessToken }
    });
    conn.interceptors.response.use((response) => response, (error) => {
        if (error.response) {
            // The request was made and the server responded with a status code
            // that falls out of the range of 2xx
            const data = error.response.data;
            const status = error.response.status;
            //const headers = error.response.headers
            const errmsg = `${status} -> ${data.error}`;
            throw new Error(errmsg);
        }
        else if (error.request) {
            // The request was made but no response was received
            // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
            // http.ClientRequest in node.js
            const request = error.request;
            throw new Error(`Error on request: ${JSON.stringify(request)}`);
        }
        else {
            // Something happened in setting up the request that triggered an Error
            const message = error.message;
            throw new Error(`Error on setting request: ${JSON.stringify(message)}`);
        }
        //throw new Error(`Something happened: ${error.config}`)
        //console.log(error.config);
    });
    return conn;
};
exports.buildClient = buildClient;
