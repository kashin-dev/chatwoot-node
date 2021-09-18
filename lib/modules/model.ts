import {AxiosInstance} from 'axios'

export interface ModelArgs {
  client: AxiosInstance
  path?: string
  accountScoped?: boolean
  accountId: number
}

export class Model {
  protected client: AxiosInstance
  protected path: string
  constructor({
    client,
    path,
    accountScoped = true,
    accountId
  }: ModelArgs) {
    this.client = client;
    this.path = accountScoped ? `/accounts/${accountId}/${path}` : `/${path}`;
  }

}
