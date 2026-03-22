import { AbstractCrudService } from '@eleansphere/service-core';
import { UserDto, CreateUserDto, UpdateUserDto } from '../dtos/user.dto';

export class UserService extends AbstractCrudService<UserDto, CreateUserDto, UpdateUserDto> {
  protected readonly basePath = '/api/users';
}
