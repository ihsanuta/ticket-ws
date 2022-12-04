import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { TicketPointGateway } from './ticket-point.gateway';
import { TicketPointService } from "./ticket-point.service";
import { TicketPointController } from "./ticket-point.controller";

@Module({
    imports: [
        HttpModule,
      ],
      providers: [TicketPointService,TicketPointGateway],
      controllers: [TicketPointController],
})
export class TicketPointModule {}
