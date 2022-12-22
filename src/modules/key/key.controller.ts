import { Controller, Get } from '@nestjs/common';
import { KeyEntity } from './key.entity';
import { KeyService } from './key.service';

@Controller('keys')
export class KeyController {
  constructor(private readonly keyService: KeyService) {}

  @Get()
  async get(): Promise<KeyEntity[]> {
    return this.keyService.get();
  }
}
