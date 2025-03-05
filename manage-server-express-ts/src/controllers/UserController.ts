import { Route, Get, Post, Body, Query } from 'tsoa';

// 引入prisma
import { PrismaClient } from '@prisma/client';
const prisma = new PrismaClient();

@Route('users')
export class UserController {
    @Get('/')
    public async getUsers(@Query() name?: string): Promise<string> {
        // prisma测试
        const users = await prisma.user.findMany();

        return `prisma测试 ${JSON.stringify(users)}`;
    }

    @Post('/')
    public async createUser(@Body() user: any): Promise<string> {
        return `Create user: ${JSON.stringify(user)}`;
    }
}