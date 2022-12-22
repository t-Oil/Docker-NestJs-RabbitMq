import { AmqpConnection } from '@golevelup/nestjs-rabbitmq';
import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import * as moment from 'moment-timezone';
import { Repository } from 'typeorm';
import { v4 as uuidv4 } from 'uuid';
import { KeyEntity } from './key.entity';

@Injectable()
export class KeyService {
  constructor(
    private readonly amqpConnection: AmqpConnection,
    @InjectRepository(KeyEntity)
    private keyRepository: Repository<KeyEntity>,
  ) {}

  public generate() {
    this.amqpConnection.publish('test.generate.key', '', {
      key: uuidv4(),
    });
  }

  public store(key: string) {
    const data = this.keyRepository.create({
      code: key,
      createdAt: moment().tz('Asia/Bangkok').format('YYYY-MM-DD HH:mm:ss'),
    });

    this.keyRepository.save(data);
  }

  async get(): Promise<KeyEntity[]> {
    return this.keyRepository.createQueryBuilder().getMany();
  }
}
