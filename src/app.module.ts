import { Module } from '@nestjs/common';
import { TicketOpenModule } from './ticket-open/ticket-open.module';
import { TicketPointModule } from './ticket-point/ticket-point.module';
import { TicketEscalationModule } from './ticket-escalation/ticket-escalation.module';

@Module({
  imports: [
    TicketOpenModule,
    TicketPointModule,
    TicketEscalationModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
