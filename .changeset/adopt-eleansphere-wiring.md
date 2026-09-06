---
"@kniho-hlod/kniho-hlod-service": minor
---

Adopt `@eleansphere/entity-core` wiring helpers and the shared `AuthService`. Public API is
unchanged — `configureServices` / `getServices` and every DTO / entity / type export behave
exactly as before.

- `AuthService` now extends `@eleansphere/service-core`'s `AuthService` — `login` / `me` are the
  shared implementations (they were byte-identical to the hand-written ones). Only `register` and
  `changePassword` remain project-specific.
- `service-container.ts` is built with `createServiceContainer` instead of a hand-written
  `AbstractServiceContainer` subclass. `getServices().auth` is now precisely typed;
  `getServices().books` etc. are unchanged (`any`, pending entity-core service typing).
- New `entities/index.ts` exports `allEntities` — the single entity registry, consumed by the
  backend via `toModelConfigs(allEntities, …)`.
- Bumped to `@eleansphere/entity-core@^1.2.0` and `@eleansphere/service-core@^1.7.0`.
