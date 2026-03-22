import { AbstractServiceContainer } from '@eleansphere/service-core';
import { AuthService } from './services/auth.service';
import { UserService } from './services/user.service';
import { BookService } from './services/book.service';
import { LoanService } from './services/loan.service';
import { FileService } from './services/file.service';

export class KnihoHlodServices extends AbstractServiceContainer {
  readonly auth: AuthService;
  readonly users: UserService;
  readonly books: BookService;
  readonly loans: LoanService;
  readonly files: FileService;

  constructor(baseUrl: string, tokenProvider: () => string | null) {
    super(baseUrl, tokenProvider);
    this.auth = new AuthService(...this.args());
    this.users = new UserService(...this.args());
    this.books = new BookService(...this.args());
    this.loans = new LoanService(...this.args());
    this.files = new FileService(...this.args());
  }
}

let _instance: KnihoHlodServices | null = null;

export function configureServices(
  baseUrl: string,
  tokenProvider: () => string | null
): KnihoHlodServices {
  _instance = new KnihoHlodServices(baseUrl, tokenProvider);
  return _instance;
}

export function getServices(): KnihoHlodServices {
  if (!_instance) {
    throw new Error('Services not configured. Call configureServices() in app.ts first.');
  }
  return _instance;
}
