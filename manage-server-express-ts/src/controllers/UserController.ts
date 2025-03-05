import { Route, Get, Post, Body, Query } from 'tsoa';

@Route('users')
export class UserController {
    @Get('/')
    public async getUsers(@Query() name?: string): Promise<string> {
        return `Get users with name: ${name}`;
    }

    @Post('/')
    public async createUser(@Body() user: any): Promise<string> {
        return `Create user: ${JSON.stringify(user)}`;
    }
}