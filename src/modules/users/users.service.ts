import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserInterface } from './interfaces';

@Injectable()
export class UsersService {
    constructor(private readonly prisma: PrismaService) { }

    async create({
        name,
        lastName,
        avatar,
        email,
        backupEmail,
        phone,
        password,
        country,
        language,
        emailConfirm,
        backupEmailConfirm,
        phoneConfirm,
        twoFactorEnabled,
        twoFactorSecret,
        status,
        authProvider
    }: CreateUserInterface) {
        return await this.prisma.user.create({
            data: {
                name,
                lastName,
                avatar,
                email,
                backupEmail,
                phone,
                password,
                country,
                language,
                emailConfirm,
                backupEmailConfirm,
                phoneConfirm,
                twoFactorEnabled,
                twoFactorSecret,
                status,
                authProvider
            }
        })
    }
    async update() { }
    async findOne() { }
    async delete() { }
}