import { Model, ModelArgs } from './model';
export declare type ConversationStatus = "on" | "off";
export declare class Conversations extends Model {
    constructor({ client, accountId }: ModelArgs);
    create(inbox_id: string, contact_id: string, status: "open" | "resolved" | "pending", source_id?: string, asignee_id?: string, team_id?: string): Promise<import("axios").AxiosResponse<any>>;
    get(inbox_id: number, status: ConversationStatus, assignee_type: string, page: number, labels: string[], team_id: number): Promise<import("axios").AxiosResponse<any>>;
    search(q: string, page: number): Promise<import("axios").AxiosResponse<any>>;
    toggleStatus(conversationId: number | string, status: ConversationStatus): Promise<import("axios").AxiosResponse<any>>;
    assignAgent(conversationId: number | string, agentId: number): Promise<import("axios").AxiosResponse<any>>;
    assignTeam(conversationId: number | string, teamId: number): Promise<import("axios").AxiosResponse<any>>;
    markMessageRead(conversationId: number | string): Promise<import("axios").AxiosResponse<any>>;
    toggleTyping(conversationId: number | string, status?: string): Promise<import("axios").AxiosResponse<any>>;
    mute(conversationId: number | string): Promise<import("axios").AxiosResponse<any>>;
    unmute(conversationId: number | string): Promise<import("axios").AxiosResponse<any>>;
    sendEmailTranscript(conversationId: number | string, email: string): Promise<import("axios").AxiosResponse<any>>;
    getLabels(conversationId: number | string): Promise<import("axios").AxiosResponse<any>>;
    updateLabels(conversationId: number | string, labels: string[]): Promise<import("axios").AxiosResponse<any>>;
}
