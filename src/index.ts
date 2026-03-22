// ── BE: Model configs ─────────────────────────────────────────────────────────
export { userConfig } from './models/user';
export { bookConfig } from './models/book';
export { loanConfig } from './models/loan';
export { profileImageConfig } from './models/profile-image';

// ── Shared: DTO classes ───────────────────────────────────────────────────────
export { LoginRequest, LoginResponse } from './dtos/auth.dto';
export { UserDto, CreateUserDto, UpdateUserDto } from './dtos/user.dto';
export { BookDto, CreateBookDto, UpdateBookDto } from './dtos/book.dto';
export { LoanDto, CreateLoanDto, UpdateLoanDto } from './dtos/loan.dto';
export { ProfileImageDto, CreateProfileImageDto } from './dtos/profile-image.dto';

// ── FE: Service classes ───────────────────────────────────────────────────────
export { AuthService } from './services/auth.service';
export { UserService } from './services/user.service';
export { BookService } from './services/book.service';
export { LoanService } from './services/loan.service';
export { FileService } from './services/file.service';

// ── FE: Service container ─────────────────────────────────────────────────────
export { KnihoHlodServices, configureServices, getServices } from './service-container';
