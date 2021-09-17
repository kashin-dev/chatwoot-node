import {AxiosInstance} from 'axios'

export interface ModelArgs {
  client: AxiosInstance
  path?: string
  accountScoped?: boolean
  accountId: number
}

export type AvailabilityStatus = "online" | "busy" | "offline"

export interface Inbox {
  id: number
  name: string
  website_url: string
  channel_type: string
  avatar_url: string
  widget_color: string
  website_token: string
  enable_auto_assignment: true
  web_widget_script: string
  welcome_title: string
  welcome_tagline: string
  greeting_enabled: true
  greeting_message: string
}

export interface ClientData {
  id: number
  email: string
  name: string
  phone_number: string
  thumbnail: string
  additional_attributes: any,
  contact_inboxes: {source_id: string, inbox: Inbox}[],
  availability_status: AvailabilityStatus
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
