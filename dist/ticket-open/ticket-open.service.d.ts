import { TicketOpenGateway } from "./ticket-open.gateway";
export declare class TicketOpenService {
    private ticketOpenGateway;
    constructor(ticketOpenGateway: TicketOpenGateway);
    pushTicketOpen(data: any): Promise<any>;
}
