const buildClient = require('./client/build');
const Contacts = require('./modules/contacts');
const Conversations = require('./modules/conversations');
const rateLimit = require('axios-rate-limit');

class ChatwootClient {
  constructor({ config: { host, apiVersion, apiAccessToken } }, maxRPS = 5) {
    this.client = rateLimit(buildClient({
      config: {
        host, apiVersion, apiAccessToken
      }
    }), { maxRPS });

    this.contacts = this.getInstance(Contacts);
    this.conversations = this.getInstance(Conversations);
  }

  getInstance(Model) {
    return (accountId) => new Model({ accountId, client: this.client });
  }
}

module.exports = ChatwootClient;
