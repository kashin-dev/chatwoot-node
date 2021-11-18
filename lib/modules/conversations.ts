import { Model, ModelArgs } from './model';

export type ConversationStatus = "on" | "off"

export class Conversations extends Model {
  constructor({
    client,
    accountId
  }: ModelArgs) {
    super({client, path: 'conversations', accountId});
  }

  create(inbox_id: string, contact_id: string, status: "open" | "resolved" | "pending", source_id?: string, asignee_id?: string, team_id?: string) {
    return this.client.post(this.path, {
      source_id: source_id || null,
      inbox_id,
      contact_id,
      status,
      asignee_id,
      team_id
    })
  }

  get(
    inbox_id: number,
    status: ConversationStatus,
    assignee_type: string,
    page: number,
    labels: string[],
    team_id: number
  ) {
    return this.client.get(this.path, {
      params: {
        inbox_id,
        team_id,
        status,
        assignee_type,
        page,
        labels
      }
    })
  }

  search(q: string, page: number) {
    return this.client.get(`${this.path}/search`, {
      params: {q, page}
    });
  }

  createMessage(conversationId: number | string, content: string, message_type?: "outgoing" | "incoming", private_message?: boolean, content_type?: "input_email" | "cards" | "input_select" | "form" | "article", content_attributes?: Record<string, unknown>) {
    return this.client.post(`${this.path}/${conversationId}/messages`, {
      content,
      message_type,
      ["private"]: private_message,
      content_type,
      content_attributes,
    })
  }

  toggleStatus(conversationId: number | string, status: ConversationStatus) {
    return this.client.post(`${this.path}/${conversationId}/toggle_status`, {
      status
    });
  }

  assignAgent(conversationId: number | string, agentId: number) {
    return this.client.post(
      `${this.path}/${conversationId}/assignments?assignee_id=${agentId}`,
      {}
    );
  }

  assignTeam(conversationId: number | string, teamId: number) {
    const params = {team_id: teamId};
    return this.client.post(`${this.path}/${conversationId}/assignments`, params);
  }

  markMessageRead(conversationId: number | string) {
    return this.client.post(`${this.path}/${conversationId}/update_last_seen`);
  }

  toggleTyping(conversationId: number | string, status = 'on') {
    return this.client.post(`${this.path}/${conversationId}/toggle_typing_status`, {
      typing_status: status
    });
  }

  mute(conversationId: number | string) {
    return this.client.post(`${this.path}/${conversationId}/mute`);
  }

  unmute(conversationId: number | string) {
    return this.client.post(`${this.path}/${conversationId}/unmute`);
  }

  sendEmailTranscript(conversationId: number | string, email: string) {
    return this.client.post(`${this.path}/${conversationId}/transcript`, {email});
  }

  getLabels(conversationId: number | string) {
    return this.client.get(`${this.path}/${conversationId}/labels`);
  }

  updateLabels(conversationId: number | string, labels: string[]) {
    return this.client.post(`${this.path}/${conversationId}/labels`, {labels});
  }
}
