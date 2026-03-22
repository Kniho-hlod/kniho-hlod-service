export class BookDto {
  id!: string;
  title!: string;
  author?: string;
  description?: string;
  publicationYear?: number;
  isAvailable!: boolean;
  ownerId!: string;
  createdAt?: string;
  updatedAt?: string;

  constructor(data: Partial<BookDto> = {}) {
    Object.assign(this, data);
  }
}

export class CreateBookDto {
  title!: string;
  author?: string;
  description?: string;
  publicationYear?: number;
  isAvailable!: boolean;
  ownerId!: string;

  constructor(data: Partial<CreateBookDto> = {}) {
    Object.assign(this, data);
  }
}

export class UpdateBookDto {
  title?: string;
  author?: string;
  description?: string;
  publicationYear?: number;
  isAvailable?: boolean;
  ownerId?: string;

  constructor(data: Partial<UpdateBookDto> = {}) {
    Object.assign(this, data);
  }
}
