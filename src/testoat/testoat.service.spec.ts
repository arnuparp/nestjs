import { Test, TestingModule } from '@nestjs/testing';
import { TestoatService } from './testoat.service';

describe('TestoatService', () => {
  let service: TestoatService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [TestoatService],
    }).compile();

    service = module.get<TestoatService>(TestoatService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
