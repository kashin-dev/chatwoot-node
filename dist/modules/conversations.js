"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Conversations = void 0;
const model_1 = require("./model");
class Conversations extends model_1.Model {
    constructor({ client, accountId }) {
        super({ client, path: 'conversations', accountId });
    }
    create(inbox_id, contact_id, status, source_id, asignee_id, team_id) {
        return this.client.post(this.path, {
            source_id: source_id || null,
            inbox_id,
            contact_id,
            status,
            asignee_id,
            team_id
        });
    }
    get(inbox_id, status, assignee_type, page, labels, team_id) {
        return this.client.get(this.path, {
            params: {
                inbox_id,
                team_id,
                status,
                assignee_type,
                page,
                labels
            }
        });
    }
    search(q, page) {
        return this.client.get(`${this.path}/search`, {
            params: { q, page }
        });
    }
    toggleStatus(conversationId, status) {
        return this.client.post(`${this.path}/${conversationId}/toggle_status`, {
            status
        });
    }
    assignAgent(conversationId, agentId) {
        return this.client.post(`${this.path}/${conversationId}/assignments?assignee_id=${agentId}`, {});
    }
    assignTeam(conversationId, teamId) {
        const params = { team_id: teamId };
        return this.client.post(`${this.path}/${conversationId}/assignments`, params);
    }
    markMessageRead(conversationId) {
        return this.client.post(`${this.path}/${conversationId}/update_last_seen`);
    }
    toggleTyping(conversationId, status = 'on') {
        return this.client.post(`${this.path}/${conversationId}/toggle_typing_status`, {
            typing_status: status
        });
    }
    mute(conversationId) {
        return this.client.post(`${this.path}/${conversationId}/mute`);
    }
    unmute(conversationId) {
        return this.client.post(`${this.path}/${conversationId}/unmute`);
    }
    sendEmailTranscript(conversationId, email) {
        return this.client.post(`${this.path}/${conversationId}/transcript`, { email });
    }
    getLabels(conversationId) {
        return this.client.get(`${this.path}/${conversationId}/labels`);
    }
    updateLabels(conversationId, labels) {
        return this.client.post(`${this.path}/${conversationId}/labels`, { labels });
    }
}
exports.Conversations = Conversations;
