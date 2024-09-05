import { Injectable } from '@nestjs/common';

interface User {
  userId: number;
  username: string;
  password: string;
}

@Injectable()
export class UsersService {
  private readonly users = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
    {
      userId: 3,
      username: 'fred',
      password: 'guessed',
    },
    {
      userId: 4,
      username: 'Chris',
      password: 'password',
    },
  ];

  async getUser(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }
}
