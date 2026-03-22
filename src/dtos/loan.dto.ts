export class LoanDto {
  id!: string;
  borrower!: string;
  loanDate!: string;
  returnDate?: string;
  bookId!: string;
  ownerId!: string;
  isReturned!: boolean;
  createdAt?: string;
  updatedAt?: string;

  constructor(data: Partial<LoanDto> = {}) {
    Object.assign(this, data);
  }
}

export class CreateLoanDto {
  borrower!: string;
  loanDate!: string;
  returnDate?: string;
  bookId!: string;
  ownerId!: string;
  isReturned?: boolean;

  constructor(data: Partial<CreateLoanDto> = {}) {
    Object.assign(this, data);
  }
}

export class UpdateLoanDto {
  borrower?: string;
  loanDate?: string;
  returnDate?: string;
  bookId?: string;
  ownerId?: string;
  isReturned?: boolean;

  constructor(data: Partial<UpdateLoanDto> = {}) {
    Object.assign(this, data);
  }
}
