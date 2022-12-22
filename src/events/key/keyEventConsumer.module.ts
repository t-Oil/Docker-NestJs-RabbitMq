import { KeyEntity } from '@modules/key/key.entity';
import { KeyService } from '@modules/key/key.service';
import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { KeyEventConsumerService } from './KeyEventConsumer.service';

@Module({
  imports: [TypeOrmModule.forFeature([KeyEntity])],
  providers: [KeyEventConsumerService, KeyService],
})
export class KeyEventConsumerModule {}
