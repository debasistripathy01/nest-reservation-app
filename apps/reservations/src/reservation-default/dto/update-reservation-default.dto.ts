import { PartialType } from '@nestjs/mapped-types';
import { CreateReservationDefaultDto } from './create-reservation-default.dto';

export class UpdateReservationDefaultDto extends PartialType(CreateReservationDefaultDto) {}
