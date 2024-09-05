import { Injectable } from '@nestjs/common';
import { UsersService } from '../users/users.service';

@Injectable()
export class AuthService {
  constructor(private usersService: UsersService) {}

  async validateUser(username: string, inputPassword: string): Promise<any> {
    const user = await this.usersService.getUser(username);

    if (user && user.password === inputPassword) {
      const { password, ...result } = user;
      return result;
    }

    return null;
  }
}
