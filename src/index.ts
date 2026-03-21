// Model configs (for BE)
export { userConfig } from './models/user';
export { bookConfig } from './models/book';
export { loanConfig } from './models/loan';
export { profileImageConfig } from './models/profile-image';

// DTO types (for FE + BE)
export type { UserDto, CreateUserDto, UpdateUserDto } from './models/user';
export type { BookDto, CreateBookDto, UpdateBookDto } from './models/book';
export type { LoanDto, CreateLoanDto, UpdateLoanDto } from './models/loan';
export type { ProfileImageDto, CreateProfileImageDto } from './models/profile-image';
