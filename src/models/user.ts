import type { ModelConfig } from '@eleansphere/be-core';

export const userConfig = {
  name: 'user',
  prefix: 'u',
  fields: {
    username: { type: 'STRING' as const, required: true, minLength: 2, maxLength: 50 },
    password: { type: 'STRING' as const, required: true, minLength: 6 },
    email: { type: 'STRING' as const, required: true, unique: true, format: 'email' as const },
    role: { type: 'STRING' as const, required: true },
  },
} satisfies ModelConfig;

// DTO types

export type UserDto = {
  id: string;
  username: string;
  email: string;
  role: string;
};

export type CreateUserDto = {
  username: string;
  password: string;
  email: string;
  role: string;
};

export type UpdateUserDto = Partial<CreateUserDto>;
