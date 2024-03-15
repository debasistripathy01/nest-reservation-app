import { Module } from '@nestjs/common';
import { ReservationDefaultService } from './reservation-default.service';
import { ReservationDefaultController } from './reservation-default.controller';

@Module({
  controllers: [ReservationDefaultController],
  providers: [ReservationDefaultService],
})
export class ReservationDefaultModule {}
