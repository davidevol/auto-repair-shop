import { Body, Post, Route } from 'tsoa';
import {
  Credentials,
  AuthResponse,
  loginClient,
  NewToken,
  refreshToken,
  Token,
} from '../service/authService';

@Route('client')
export default class AuthController {
  @Post('/')
  public async loginClient(
    @Body() body: Credentials,
  ): Promise<AuthResponse | null> {
    return loginClient(body);
  }
  @Post('/')
  public async refreshToken(@Body() body: Token): Promise<NewToken | null> {
    return refreshToken(body);
  }
}
