export class UserDto {
  id!: string;
  username!: string;
  email!: string;
  role!: string;
  createdAt?: string;
  updatedAt?: string;

  constructor(data: Partial<UserDto> = {}) {
    Object.assign(this, data);
  }
}

export class CreateUserDto {
  username!: string;
  password!: string;
  email!: string;
  role!: string;

  constructor(data: Partial<CreateUserDto> = {}) {
    Object.assign(this, data);
  }
}

export class UpdateUserDto {
  username?: string;
  password?: string;
  email?: string;
  role?: string;

  constructor(data: Partial<UpdateUserDto> = {}) {
    Object.assign(this, data);
  }
}
