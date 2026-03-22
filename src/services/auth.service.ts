import { AbstractAuthService } from '@eleansphere/service-core';
import { LoginRequest, LoginResponse } from '../dtos/auth.dto';

export class AuthService extends AbstractAuthService<LoginRequest, LoginResponse, { id: string; email: string }> {
  login(credentials: LoginRequest): Promise<LoginResponse> {
    return this.post<LoginResponse>('/api/auth/login', credentials);
  }

  me(): Promise<{ id: string; email: string }> {
    return this.get('/api/auth/me');
  }
}
