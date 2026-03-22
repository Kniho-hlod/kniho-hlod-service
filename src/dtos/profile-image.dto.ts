export class ProfileImageDto {
  id!: string;
  name?: string;
  user?: string;
  createdAt?: string;
  updatedAt?: string;

  constructor(data: Partial<ProfileImageDto> = {}) {
    Object.assign(this, data);
  }
}

export class CreateProfileImageDto {
  name?: string;
  user?: string;

  constructor(data: Partial<CreateProfileImageDto> = {}) {
    Object.assign(this, data);
  }
}
