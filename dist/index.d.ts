import { Config } from './client/build';
import { Contacts } from './modules/contacts';
import { Conversations } from './modules/conversations';
export default class ChatwootClient {
    private client;
    contacts: (accountId: number) => Contacts;
    conversations: (accountId: number) => Conversations;
    constructor({ config }: Config);
    private getInstance;
}
export { ClientData } from './modules/contacts';
