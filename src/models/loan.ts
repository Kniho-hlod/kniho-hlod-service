import type { ModelConfig } from 'be-core';

export const loanConfig = {
  name: 'loan',
  prefix: 'l',
  fields: {
    borrower: { type: 'STRING' as const, required: true },
    loanDate: { type: 'DATE' as const, required: true },
    returnDate: { type: 'DATE' as const },
    bookId: { type: 'STRING' as const, required: true },
    ownerId: { type: 'STRING' as const, required: true },
    isReturned: { type: 'BOOLEAN' as const, default: false },
  },
} satisfies ModelConfig;

// DTO types

export type LoanDto = {
  id: string;
  borrower: string;
  loanDate: string;
  returnDate?: string;
  bookId: string;
  ownerId: string;
  isReturned: boolean;
};

export type CreateLoanDto = Omit<LoanDto, 'id'>;
export type UpdateLoanDto = Partial<CreateLoanDto>;
