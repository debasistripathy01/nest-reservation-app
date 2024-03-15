import { Test, TestingModule } from '@nestjs/testing';
import { ReservationDefaultService } from './reservation-default.service';

describe('ReservationDefaultService', () => {
  let service: ReservationDefaultService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ReservationDefaultService],
    }).compile();

    service = module.get<ReservationDefaultService>(ReservationDefaultService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
