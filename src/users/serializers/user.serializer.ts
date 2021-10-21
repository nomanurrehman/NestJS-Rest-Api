import { Exclude } from 'class-transformer';

export class UserSerializer {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;

  @Exclude()
  password: string;

  constructor(partial: Partial<UserSerializer>) {
    Object.assign(this, partial);
  }
}
