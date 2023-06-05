import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ProductModule } from './product/product.module';
import { TestoatModule } from './testoat/testoat.module';

@Module({
  imports: [ProductModule, TestoatModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
