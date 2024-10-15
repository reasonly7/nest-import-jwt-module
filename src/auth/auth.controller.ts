import { Controller, Get, Query } from '@nestjs/common';
import { AuthService } from './auth.service';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get('login')
  login() {
    return this.authService.login();
  }

  @Get('me')
  getUserInfo(@Query('token') token: string) {
    return this.authService.getUserInfo(token);
  }
}
