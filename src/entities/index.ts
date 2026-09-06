import { bookEntity } from './book.entity';
import { loanEntity } from './loan.entity';
import { userEntity } from './user.entity';
import { profileImageEntity } from './profile-image.entity';
import { systemNotificationEntity } from './system-notification.entity';

export { bookEntity, loanEntity, userEntity, profileImageEntity, systemNotificationEntity };

/**
 * Every entity in the project — the single source of truth for backend model registration
 * (`toModelConfigs(allEntities, …)`) and the frontend service container.
 */
export const allEntities = {
  book: bookEntity,
  loan: loanEntity,
  user: userEntity,
  profileImage: profileImageEntity,
  systemNotification: systemNotificationEntity,
} as const;
