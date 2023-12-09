import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { TicketEscalationGateway } from "./ticket-escalation.gateway";

@Injectable()
export class TicketEscalationService {

    constructor( @Inject(forwardRef(() => TicketEscalationGateway)) private ticketEscalationGateway: TicketEscalationGateway) { }

    async pushTicketEscalation(data: any): Promise<any> {
        return this.ticketEscalationGateway.pushTicketEscalation(data);
    }
}