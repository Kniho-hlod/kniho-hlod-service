---
"@kniho-hlod/kniho-hlod-service": minor
---

Move to `@eleansphere/entity-core@^2.0.0` and drop the `@eleansphere/service-core` dependency
(service-core is merged into entity-core). `AuthService` now extends entity-core's `AuthService`.

`loan` and `systemNotification` dropped `(Base as any)` / `(this as any)` in their `extend`
blocks — so `getServices().loans.getByBook(...)` and `getServices().systemNotifications.getActive()`
are precisely typed now (they were `any`), alongside the inherited CRUD. No behaviour change.
