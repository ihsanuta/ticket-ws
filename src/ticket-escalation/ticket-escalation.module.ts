import { Module } from '@nestjs/common';
import { HttpModule } from '@nestjs/axios'
import { TicketEscalationGateway } from './ticket-escalation.gateway';
import { TicketEscalationService } from "./ticket-escalation.service";
import { TicketEscalationController } from "./ticket-escalation.controller";

@Module({
    imports: [
        HttpModule,
      ],
      providers: [TicketEscalationService,TicketEscalationGateway],
      controllers: [TicketEscalationController],
})
export class TicketEscalationModule {}
