import { Test, TestingModule } from '@nestjs/testing';
import { CarparkController } from './carparks.controller';
import { CarparkService } from './carparks.service';
import { QueryListCarpark } from './carparks.dto';

describe('CarparkController', () => {
  let controller: CarparkController;
  const CarparkServiceMock = {
    getListCarpark: jest.fn(),
  };
  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [CarparkController],
      providers: [CarparkService],
    })
      .overrideProvider(CarparkService)
      .useValue(CarparkServiceMock)
      .compile();
    controller = module.get<CarparkController>(CarparkController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('getListCarpark  should return an array of carparks', async () => {
    CarparkServiceMock.getListCarpark.mockResolvedValue([]);
    await controller.getList({} as QueryListCarpark);
    expect(CarparkServiceMock.getListCarpark).toHaveBeenCalledWith({});
  });
});
