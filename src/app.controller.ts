import { Controller, Get, UseGuards, Request, Post } from "@nestjs/common";
import { AppService } from "./app.service";
import { AuthenticatedGuard } from "./auth/authenticated.guard";
import { LocalAuthGueard } from "./auth/local-auth.guard";

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @UseGuards(LocalAuthGueard)
  @Post('login')
  login(@Request() req): any {
    return {msg: "Logged in"}
  }

  @UseGuards(AuthenticatedGuard)
  @Get('protected')
  getHello(@Request() req): string {
    return req.user
  }
}