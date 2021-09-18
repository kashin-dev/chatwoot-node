import {
  ModelArgs,
  Model
} from './model'

export interface ClientData {
  identifier: number | string
  email: string
  name: string
  phone_number: string
  custom_attributes: any
  inbox_id: number
}

export class Contacts extends Model {
  constructor({
    client,
    accountId
  }: ModelArgs) {
    super({client, path: 'contacts', accountId});
  }

  get(page = 1, sortAttr = 'name') {
    return this.client.get(`${this.path}?page=${page}&sort=${sortAttr}`);
  }

  findOne(id: string | number) {
    return this.client.get(`${this.path}/${id}`);
  }

  update(id: string | number, c: ClientData) {
    return this.client.put(`${this.path}/${id}`, c);
  }

  create(c: ClientData) {
    return this.client.post(`${this.path}`, c);
  }

  search(q: string, page = 1, sort = 'name') {
    return this.client.get(`${this.path}/search?q=${q}&page=${page}&sort=${sort}`);
  }
}

