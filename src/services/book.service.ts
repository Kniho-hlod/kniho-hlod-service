import { AbstractCrudService } from '@eleansphere/service-core';
import { BookDto, CreateBookDto, UpdateBookDto } from '../dtos/book.dto';

export class BookService extends AbstractCrudService<BookDto, CreateBookDto, UpdateBookDto> {
  protected readonly basePath = '/api/books';
}
