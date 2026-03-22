export class LoginRequest {
  email!: string;
  password!: string;

  constructor(data: Partial<LoginRequest> = {}) {
    Object.assign(this, data);
  }
}

export class LoginResponse {
  token!: string;
  email!: string;
  role!: string;

  constructor(data: Partial<LoginResponse> = {}) {
    Object.assign(this, data);
  }
}
