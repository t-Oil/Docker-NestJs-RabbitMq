import { KeyModule } from '@modules/key/key.module';
import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import configuration from '@config/configuration';
import { ScheduleModule } from '@nestjs/schedule';
import { TypeOrmModule } from '@nestjs/typeorm';
import { RabbitMqModule } from 'src/common/modules/rabbitMq/rabbitMq.Module';
import { EventModule } from 'src/events/event.module';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { KeyController } from '@modules/key/key.controller';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [configuration],
      envFilePath: '.env',
      isGlobal: true,
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) =>
        configService.get('database.mysql'),
      inject: [ConfigService],
    }),
    EventModule,
    RabbitMqModule,
    KeyModule,
    ScheduleModule.forRoot(),
  ],
  controllers: [AppController, KeyController],
  providers: [AppService],
})
export class AppModule {}
