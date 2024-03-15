import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ReservationDefaultService } from './reservation-default.service';
import { CreateReservationDefaultDto } from './dto/create-reservation-default.dto';
import { UpdateReservationDefaultDto } from './dto/update-reservation-default.dto';

@Controller('reservation-default')
export class ReservationDefaultController {
  constructor(private readonly reservationDefaultService: ReservationDefaultService) {}

  @Post()
  create(@Body() createReservationDefaultDto: CreateReservationDefaultDto) {
    return this.reservationDefaultService.create(createReservationDefaultDto);
  }

  @Get()
  findAll() {
    return this.reservationDefaultService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.reservationDefaultService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateReservationDefaultDto: UpdateReservationDefaultDto) {
    return this.reservationDefaultService.update(+id, updateReservationDefaultDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.reservationDefaultService.remove(+id);
  }
}
