import { Test, TestingModule } from '@nestjs/testing';
import { ReservationDefaultController } from './reservation-default.controller';
import { ReservationDefaultService } from './reservation-default.service';

describe('ReservationDefaultController', () => {
  let controller: ReservationDefaultController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ReservationDefaultController],
      providers: [ReservationDefaultService],
    }).compile();

    controller = module.get<ReservationDefaultController>(ReservationDefaultController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
