import { Module } from '@nestjs/common';
import { TestoatController } from './testoat.controller';
import { TestoatService } from './testoat.service';

@Module({
  controllers: [TestoatController],
  providers: [TestoatService]
})
export class TestoatModule {}
