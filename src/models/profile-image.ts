import type { ModelConfig } from 'be-core';

export const profileImageConfig = {
  name: 'profileImage',
  prefix: 'f',
  routePath: '/api/profile-images',
  fields: {
    name: { type: 'STRING' as const },
    avatar: { type: 'BLOB' as const },
    user: { type: 'STRING' as const },
  },
} satisfies ModelConfig;

// DTO types

export type ProfileImageDto = {
  id: string;
  name?: string;
  user?: string;
};

export type CreateProfileImageDto = Omit<ProfileImageDto, 'id'>;
