import { Controller, Get, Put, Body, Res, Post, HttpStatus } from "@nestjs/common";
import { TicketEscalationService } from "./ticket-escalation.service";
import { Response } from 'express';

@Controller('ticket-escalation')
export class TicketEscalationController {

    constructor(private service: TicketEscalationService) { }

    @Post("/push")
    async pushTicketEscalation(@Res() res: Response,@Body() req: any) : Promise<any>{
        var result = await this.service.pushTicketEscalation(req);
        if (result){
            res.status(HttpStatus.OK).json(
                {
                    status_code: HttpStatus.OK,
                    message: "message sent"
                }
            )
        }else{
            res.status(HttpStatus.INTERNAL_SERVER_ERROR).json({
                status_code: HttpStatus.INTERNAL_SERVER_ERROR,
                message: "failed when sending message"
            });
        }
    }
}