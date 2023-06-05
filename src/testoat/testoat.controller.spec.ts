import { Test, TestingModule } from '@nestjs/testing';
import { TestoatController } from './testoat.controller';

describe('TestoatController', () => {
  let controller: TestoatController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [TestoatController],
    }).compile();

    controller = module.get<TestoatController>(TestoatController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
