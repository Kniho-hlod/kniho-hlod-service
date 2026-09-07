import { defineEntity } from '@eleansphere/entity-core';
import type { InferDto } from '@eleansphere/entity-core';

const fields = {
  title: { type: 'STRING' as const, required: true as const, maxLength: 200 },
  message: { type: 'TEXT' as const, required: true as const },
  severity: { type: 'STRING' as const, required: true as const, default: 'info' },
  activeFrom: { type: 'DATE' as const, required: true as const },
  activeTo: { type: 'DATE' as const, required: true as const },
};

export const systemNotificationEntity = defineEntity({
  name: 'systemNotification',
  prefix: 'sn',
  basePath: '/api/system-notifications',
  userScoped: false,
  fields,
  extend(Base) {
    return class extends Base {
      getActive(): Promise<InferDto<typeof fields>[]> {
        return this.get<InferDto<typeof fields>[]>(`${this.basePath}/active`);
      }
    };
  },
});
