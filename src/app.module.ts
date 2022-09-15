import { Module } from '@nestjs/common';
import { TicketOpenModule } from './ticket-open/ticket-open.module';

@Module({
  imports: [
    TicketOpenModule
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
