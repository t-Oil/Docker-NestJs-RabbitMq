import { RabbitSubscribe } from '@golevelup/nestjs-rabbitmq';
import { Injectable, Logger } from '@nestjs/common';
import { ConsumeMessage, Channel } from 'amqplib';
import { KeyService } from '@modules/key/key.service';

@Injectable()
export class KeyEventConsumerService {
  constructor(private keyService: KeyService) {}

  @RabbitSubscribe({
    exchange: 'test.generate.key',
    queue: 'test.queue.generate.key',
    errorHandler: (channel: Channel, msg: ConsumeMessage, error: Error) => {
      Logger.error(error);
      channel.reject(msg, false);
    },
  })
  public async onQueueConsumption(msg: any) {
    const { key } = msg;

    Logger.log(`EventData: ${key}, successfully consumed!`);

    this.keyService.store(key);
  }
}
