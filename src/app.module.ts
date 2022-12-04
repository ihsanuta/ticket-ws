import { Module } from '@nestjs/common';
import { TicketOpenModule } from './ticket-open/ticket-open.module';
import { TicketPointModule } from './ticket-point/ticket-point.module';

@Module({
  imports: [
    TicketOpenModule,
    TicketPointModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
