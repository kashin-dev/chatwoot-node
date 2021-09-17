import axios from 'axios'

const DEFAULT_HOST = 'https://app.chatwoot.com';
const DEFAULT_API_VERSION = 'api/v1';

export interface Config {
  config: ClientConfig
}

interface ClientConfig {
  host: string
  apiVersion: string
  apiAccessToken: string
}

export const buildClient = ({config}: Config) => {
  return axios.create({
    baseURL: `${config.host || DEFAULT_HOST}/${config.apiVersion || DEFAULT_API_VERSION}`,
    timeout: 20000,
    headers: {api_access_token: config.apiAccessToken}
  })
}

