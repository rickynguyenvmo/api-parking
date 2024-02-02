import { Body, ClassSerializerInterceptor, Controller, Post, UseInterceptors } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { AuthRefreshToken, AuthRegister, AuthSignInRequest } from './auth.dto';
import { GuardPublic } from 'src/common/guard/guard.decorator';

@Controller('auth')
@ApiTags('Auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('sign-in')
  @GuardPublic()
  signIn(@Body() body: AuthSignInRequest) {
    return this.authService.signIn(body);
  }

  @Post('register')
  @GuardPublic()
  @UseInterceptors(ClassSerializerInterceptor)
  register(@Body() body: AuthRegister) {
    return this.authService.register(body);
  }

  @Post('refresh-token')
  @GuardPublic()
  refreshToken(@Body() body: AuthRefreshToken) {
    return this.authService.refreshToken(body.refreshToken);
  }
}
