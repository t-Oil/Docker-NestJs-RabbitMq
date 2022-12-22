import configuration from '@config/configuration';
import { RabbitMQModule } from '@golevelup/nestjs-rabbitmq';
import { Global, Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';

@Global()
@Module({
  controllers: [],
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
      load: [configuration],
    }),
    RabbitMQModule.forRootAsync(RabbitMQModule, {
      imports: [ConfigModule],
      useFactory: async (configService: ConfigService) => ({
        exchanges: [
          {
            name: 'test.generate.key',
            type: 'topic',
          },
        ],
        uri: `amqp://${configService.get(
          'rabbitMq.username',
        )}:${configService.get('rabbitMq.password')}@${configService.get(
          'rabbitMq.host',
        )}/${configService.get('rabbitMq.vhost')}`,
        connectionInitOptions: { wait: false },
        enableControllerDiscovery: true,
      }),
      inject: [ConfigService],
    }),
  ],
  providers: [],
  exports: [RabbitMQModule],
})
export class RabbitMqModule {}
