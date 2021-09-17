import {
  ModelArgs,
  Model
} from './model'

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

  search(q: string, page = 1, sort = 'name') {
    return this.client.get(`${this.path}/search?q=${q}&page=${page}&sort=${sort}`);
  }

  getLabels(contactID: number) {
    return this.client.get(`${this.path}/${contactID}/labels`);
  }

  updateLabels(contactID: number, labels: string[]) {
    return this.client.post(`${this.path}/${contactID}/labels`, {labels});
  }
}

