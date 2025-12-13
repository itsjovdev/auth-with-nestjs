import { Module } from '@nestjs/common';
import { PrismaModule } from './modules/prisma/prisma.module';
import { CacheModule } from '@nestjs/cache-manager';
import KeyvRedis from '@keyv/redis';
import { Keyv } from 'keyv';
import { envs } from './config/envs';
import { UsersModule } from './modules/users/users.module';

@Module({
  imports: [ CacheModule.registerAsync({
      isGlobal: true,
      useFactory: async () => {
        return {
          ttl: 5000, // tiempo de vida en segundos
          stores: [
            new KeyvRedis(envs.REDIS_URL),
          ],
        };
      },
    }), PrismaModule, UsersModule],
  controllers: [],
  providers: [],
})
export class AppModule {}
