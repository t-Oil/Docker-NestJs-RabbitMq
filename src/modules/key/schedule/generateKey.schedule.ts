import { Injectable } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { KeyService } from '../key.service';

@Injectable()
export class GenerateKeySchedule {
  constructor(private keyService: KeyService) {}

  @Cron(CronExpression.EVERY_2_HOURS)
  handleCron() {
    this.keyService.generate();
  }
}
