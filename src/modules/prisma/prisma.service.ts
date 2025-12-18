import {
  Injectable,
  Logger,
  OnModuleInit,
  OnModuleDestroy,
} from '@nestjs/common';
import { PrismaClient } from '@prisma/client';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  private readonly logger = new Logger('Auth - App');

  async onModuleInit() {
    await this.$connect();
    this.logger.log('Database Connected');
  }

  async onModuleDestroy() {
    await this.$disconnect();
    this.logger.log('Database Disconnected');
  }
}
