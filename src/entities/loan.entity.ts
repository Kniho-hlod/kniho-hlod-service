import { defineEntity, type InferDto } from '@eleansphere/entity-core';

const loanFields = {
  borrower: { type: 'STRING' as const, required: true as const },
  loanDate: { type: 'DATE' as const, required: true as const },
  returnDate: { type: 'DATE' as const },
  bookId: { type: 'STRING' as const, required: true as const },
  ownerId: { type: 'STRING' as const, required: true as const },
  isReturned: { type: 'BOOLEAN' as const, default: false as const },
};

export const loanEntity = defineEntity({
  name: 'loan',
  prefix: 'l',
  basePath: '/api/loans',
  userScoped: true,
  fields: loanFields,
  extend: (Base) =>
    class extends Base {
      getByBook(bookId: string): Promise<InferDto<typeof loanFields>[]> {
        return this.get<InferDto<typeof loanFields>[]>(`${this.basePath}?bookId=${bookId}`);
      }
    },
});
