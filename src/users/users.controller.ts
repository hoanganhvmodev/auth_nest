import { Body, Controller, Get, Param, Post, Req, Res } from "@nestjs/common";
import { CreateUserDto } from "./dto/create-user.dto";
import { FindUserDto } from "./dto/find-user.dto";
import { UsersService } from "./users.service";
import { Response, Request } from "express";
import { UpdateUserDto } from "./dto/update-user.dto";

@Controller('user')
export class UsersController {
    constructor(private userService:UsersService){}
    @Post('/create')
    async create(
        @Body() body: CreateUserDto,
    ): Promise<any> {
        return await this.userService.createUser(body);
    }

    @Post('/update/:id')
    async updateUser(
        @Param() id: string,
        @Body() body: UpdateUserDto,
    ): Promise<any> {
        return await this.userService.updateUser(id, body);
    }

    @Post('/login')
    async loginUser(
        @Body() body: FindUserDto,
        @Res({passthrough: true}) res: Response,
    ): Promise<any> {
       return await this.userService.findUser(body, res);
    }

    @Get('/get')
    async getUser(
        @Req() req: Request,
    ): Promise<any> {
       return await this.userService.getUser(req);
    }

    @Post('/logout')
    async logOutUser(
        @Res({passthrough: true}) res: Response,
    ): Promise<any> {
       return await this.userService.logOutUser(res);
    }
}