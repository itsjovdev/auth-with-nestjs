import { Module } from '@nestjs/common';
import { TestController } from './test.controller';
import { UsersModule } from '../users/users.module';

@Module({
  controllers: [TestController],
  imports: [UsersModule],
})
export class TestModule {}
