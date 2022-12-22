import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  constructor(private readonly amqpConnection: AmqpConnection) {}

  getHello(): string {
    return 'Hello';
  }
}
