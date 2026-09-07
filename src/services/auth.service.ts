import { AuthService as BaseAuthService, type AuthUser } from '@eleansphere/entity-core';
import { ChangePasswordRequest, LoginResponse, RegisterRequest } from '../dtos/auth.dto';

/**
 * `login` / `me` / `forgotPassword` / `resetPassword` come from `@eleansphere/entity-core`'s
 * `AuthService` (they match be-core's `createAuthRouter` and were identical to the hand-written
 * versions this class used to carry). Only the kniho-hlod-specific routes are declared here.
 */
export class AuthService extends BaseAuthService<AuthUser, LoginResponse> {
  register(dto: RegisterRequest): Promise<void> {
    return this.post<void>('/api/auth/register', dto);
  }

  changePassword(dto: ChangePasswordRequest): Promise<void> {
    return this.post<void>('/api/auth/change-password', dto);
  }
}
