import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { TicketOpenGateway } from './ticket-open.gateway';
import { TicketOpenService } from "./ticket-open.service";
import { TicketOpenController } from "./ticket-open.controller";

@Module({
    imports: [
        HttpModule,
      ],
      providers: [TicketOpenService,TicketOpenGateway],
      controllers: [TicketOpenController],
})
export class TicketOpenModule {}
