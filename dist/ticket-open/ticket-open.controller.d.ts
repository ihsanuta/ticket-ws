import { TicketOpenService } from "./ticket-open.service";
import { Response } from 'express';
export declare class TicketOpenController {
    private service;
    constructor(service: TicketOpenService);
    pushTicketOpen(res: Response, req: any): Promise<any>;
}
