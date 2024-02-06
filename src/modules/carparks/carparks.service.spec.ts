import { Test } from '@nestjs/testing';
import { CarparkService } from './carparks.service';
import { CarparkRepository } from './carparks.repository';
import { QueryListCarpark } from './carparks.dto';

describe('CarparkService', () => {
  let service: CarparkService;
  const mockCarparkRepo = {
    getListCarpark: jest.fn(),
  };
  beforeEach(async () => {
    const module = await Test.createTestingModule({
      providers: [CarparkService, CarparkRepository],
    })
      .overrideProvider(CarparkRepository)
      .useValue(mockCarparkRepo)
      .compile();

    service = module.get<CarparkService>(CarparkService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  it('getListCarpark should return an array of carparks', async () => {
    mockCarparkRepo.getListCarpark.mockResolvedValue([
      [
        {
          car_park_no: 1,
          address: 'something',
          x_coord: 10,
          y_coord: 10,
          car_park_type: 'something',
          type_of_parking_system: 'something',
          short_term_parking: 'something',
          free_parking: true,
          night_parking: true,
          car_park_decks: 10,
          gantry_height: 10,
          car_park_basement: 'something',
        },
      ],
      10,
    ]);
    const returnedFromMethod = await service.getListCarpark({} as QueryListCarpark);
    expect(returnedFromMethod.data instanceof Array).toBeTruthy();
  });

  it('getListCarpark should return an exception', async () => {
    try {
      mockCarparkRepo.getListCarpark.mockRejectedValue({});
      await service.getListCarpark({} as QueryListCarpark);
    } catch (error) {
      expect(error.message).toEqual('Failed to retrieve carpark list');
    }
  });
});
