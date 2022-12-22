import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RabbitMqModule } from 'src/common/modules/rabbitMq/rabbitMq.Module';
import { EventModule } from 'src/events/event.module';
import { KeyController } from './key.controller';
import { KeyEntity } from './key.entity';
import { KeyService } from './key.service';
import { GenerateKeySchedule } from './schedule/generateKey.schedule';

@Module({
  imports: [TypeOrmModule.forFeature([KeyEntity]), EventModule, RabbitMqModule],
  controllers: [KeyController],
  providers: [KeyService, GenerateKeySchedule],
  exports: [KeyService],
})
export class KeyModule {}
