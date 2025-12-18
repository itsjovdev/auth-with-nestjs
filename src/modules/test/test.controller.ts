import { Body, Controller, Post } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import type { CreateUserInterface } from '../users/interfaces';

@Controller('test')
export class TestController {
    constructor(private readonly usersSerivece: UsersService) {}

    @Post()
    async test(@Body() data: CreateUserInterface){
        return await this.usersSerivece.create(data)
    }
}
