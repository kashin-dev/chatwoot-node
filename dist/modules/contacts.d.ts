import { ModelArgs, Model } from './model';
export interface ClientData {
    identifier?: number | string;
    email?: string;
    name?: string;
    phone_number?: string;
    custom_attributes?: any;
    inbox_id?: number;
    city?: string;
}
export declare class Contacts extends Model {
    constructor({ client, accountId }: ModelArgs);
    get(page?: number, sortAttr?: string): Promise<import("axios").AxiosResponse<any>>;
    findOne(id: string | number): Promise<import("axios").AxiosResponse<any>>;
    update(id: string | number, c: ClientData): Promise<import("axios").AxiosResponse<any>>;
    create(c: ClientData): Promise<import("axios").AxiosResponse<any>>;
    search(q: string, page?: number, sort?: string): Promise<import("axios").AxiosResponse<any>>;
}
