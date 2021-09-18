import { AxiosInstance } from 'axios';
export interface ModelArgs {
    client: AxiosInstance;
    path?: string;
    accountScoped?: boolean;
    accountId: number;
}
export declare class Model {
    protected client: AxiosInstance;
    protected path: string;
    constructor({ client, path, accountScoped, accountId }: ModelArgs);
}
