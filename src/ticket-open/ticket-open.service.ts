import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { TicketOpenGateway } from "./ticket-open.gateway";

@Injectable()
export class TicketOpenService {

    constructor( @Inject(forwardRef(() => TicketOpenGateway)) private ticketOpenGateway: TicketOpenGateway) { }

    async pushTicketOpen(data: any): Promise<any> {
        return this.ticketOpenGateway.pushTicketOpen(data);
    }
}