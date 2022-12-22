import { Module } from '@nestjs/common';
import { RabbitMqModule } from 'src/common/modules/rabbitMq/rabbitMq.Module';
import { KeyEventConsumerModule } from './key/keyEventConsumer.module';

@Module({
  imports: [RabbitMqModule, KeyEventConsumerModule],
})
export class EventModule {}
