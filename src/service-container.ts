import { createServiceContainer, type ServiceContainer } from '@eleansphere/entity-core';
import { AuthService } from './services/auth.service';
import {
  bookEntity,
  loanEntity,
  userEntity,
  profileImageEntity,
  systemNotificationEntity,
} from './entities';

// Keys are the public accessor names — `getServices().books`, `.auth`, … — kept identical to the
// old hand-written `KnihoHlodServices` class so nothing in the frontend changes.
const registry = {
  auth: AuthService,
  users: userEntity,
  books: bookEntity,
  loans: loanEntity,
  files: profileImageEntity,
  systemNotifications: systemNotificationEntity,
} as const;

export type KnihoHlodServices = ServiceContainer<typeof registry>;

let _instance: KnihoHlodServices | null = null;

export function configureServices(
  baseUrl: string,
  tokenProvider: () => string | null
): KnihoHlodServices {
  _instance = createServiceContainer(registry, baseUrl, tokenProvider);
  return _instance;
}

export function getServices(): KnihoHlodServices {
  if (!_instance) {
    throw new Error('Services not configured. Call configureServices() in app.ts first.');
  }
  return _instance;
}
