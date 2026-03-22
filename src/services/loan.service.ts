import { AbstractCrudService } from '@eleansphere/service-core';
import { LoanDto, CreateLoanDto, UpdateLoanDto } from '../dtos/loan.dto';

export class LoanService extends AbstractCrudService<LoanDto, CreateLoanDto, UpdateLoanDto> {
  protected readonly basePath = '/api/loans';

  getByBook(bookId: string): Promise<LoanDto[]> {
    return this.get<LoanDto[]>(`/api/loans?bookId=${bookId}`);
  }
}
