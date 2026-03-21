import type { ModelConfig } from 'be-core';

export const bookConfig = {
  name: 'book',
  prefix: 'b',
  fields: {
    title: { type: 'STRING' as const, required: true, maxLength: 200 },
    author: { type: 'STRING' as const, maxLength: 100 },
    description: { type: 'TEXT' as const },
    publicationYear: { type: 'INTEGER' as const, min: 1000, max: 9999 },
    isAvailable: { type: 'BOOLEAN' as const, required: true },
    ownerId: { type: 'STRING' as const, required: true },
  },
} satisfies ModelConfig;

// DTO types

export type BookDto = {
  id: string;
  title: string;
  author?: string;
  description?: string;
  publicationYear?: number;
  isAvailable: boolean;
  ownerId: string;
};

export type CreateBookDto = Omit<BookDto, 'id'>;
export type UpdateBookDto = Partial<CreateBookDto>;
