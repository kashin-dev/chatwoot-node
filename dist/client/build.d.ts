export interface Config {
    config: ClientConfig;
}
interface ClientConfig {
    host: string;
    apiVersion: string;
    apiAccessToken: string;
}
export declare const buildClient: ({ config }: Config) => import("axios").AxiosInstance;
export {};
