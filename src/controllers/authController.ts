import { Body, Post, Route } from 'tsoa';
import { AuthResponse, Credentials, loginClient } from '../service/authService';

@Route('client')
export default class AuthController {
  @Post('/')
  public async loginClient(
    @Body() body: Credentials,
  ): Promise<AuthResponse | null> {
    return loginClient(body);
  }
}
