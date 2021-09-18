import {AxiosInstance} from 'axios'
import {buildClient, Config} from './client/build'
import {Model, ModelArgs} from './modules/model'
import {Contacts} from './modules/contacts'
import {Conversations} from './modules/conversations'

export default class ChatwootClient {
  private client: AxiosInstance
  public contacts: (accountId: number) => Contacts
  public conversations: (accountId: number) => Conversations
  constructor({config}: Config) {
    this.client = buildClient({
      config: {
        host: config.host,
        apiVersion: config.apiVersion,
        apiAccessToken: config.apiAccessToken
      }
    })
    this.contacts = this.getInstance(Contacts)
    this.conversations = this.getInstance(Conversations)
  }

  private getInstance<T extends Model>(c: {new(m: ModelArgs): T}): (accountId: number) => T {
    return (accId: number) => new c({client: this.client, accountId: accId})
  }

}

export {ClientData} from './modules/contacts'
