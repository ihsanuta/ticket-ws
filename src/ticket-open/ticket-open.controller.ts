import { Controller, Get, Put, Body, Res, Post, HttpStatus } from "@nestjs/common";
import { TicketOpenService } from "./ticket-open.service";
import { Response } from 'express';

@Controller('ticket-open')
export class TicketOpenController {

    constructor(private service: TicketOpenService) { }

    @Post("/push")
    async pushTicketOpen(@Res() res: Response,@Body() req: any) : Promise<any>{
        var result = await this.service.pushTicketOpen(req);
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