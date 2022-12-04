import { Injectable, Inject, forwardRef } from "@nestjs/common";
import { TicketPointGateway } from "./ticket-point.gateway";

@Injectable()
export class TicketPointService {

    constructor( @Inject(forwardRef(() => TicketPointGateway)) private ticketPointGateway: TicketPointGateway) { }

    async pushTicketOpen(data: any): Promise<any> {
        return this.ticketPointGateway.pushTicketPoint(data);
    }
}