import { Global, Module } from '@nestjs/common';
import { RedisPubSub } from 'graphql-redis-subscriptions';
import { PUB_SUB } from './constants';

@Global()
@Module({
  imports: [],
  providers: [
    {
      provide: PUB_SUB,
      useFactory: () =>
        new RedisPubSub({
          connection: {
            host: 'localhost',
            port: '6379',
          },
        }),
    },
  ],
  exports: [PUB_SUB],
})
export class PubSubModule {}
