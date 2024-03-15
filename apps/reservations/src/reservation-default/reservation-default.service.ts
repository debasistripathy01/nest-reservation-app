import { Injectable } from '@nestjs/common';
import { CreateReservationDefaultDto } from './dto/create-reservation-default.dto';
import { UpdateReservationDefaultDto } from './dto/update-reservation-default.dto';

@Injectable()
export class ReservationDefaultService {
  create(createReservationDefaultDto: CreateReservationDefaultDto) {
    return 'This action adds a new reservationDefault';
  }

  findAll() {
    return `This action returns all reservationDefault`;
  }

  findOne(id: number) {
    return `This action returns a #${id} reservationDefault`;
  }

  update(id: number, updateReservationDefaultDto: UpdateReservationDefaultDto) {
    return `This action updates a #${id} reservationDefault`;
  }

  remove(id: number) {
    return `This action removes a #${id} reservationDefault`;
  }
}
