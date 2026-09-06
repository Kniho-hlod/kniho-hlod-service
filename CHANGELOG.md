# @kniho-hlod/kniho-hlod-service

## 1.17.0

### Minor Changes

- b8de0fa: Adopt `@eleansphere/entity-core` wiring helpers and the shared `AuthService`. Public API is
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

## 1.16.0

### Minor Changes

- 7ebda0b: `defineEntity` and `AbstractUserScopedCrudService` moved to the new `@eleansphere/entity-core`
  package — this repo now depends on it instead of shipping its own copy. `@eleansphere/be-core`
  dropped from devDependencies (it was only needed for a type-only import inside the old
  `entity-factory.ts`, which moved with the rest).

  Behavior change: a field marked `writeOnly: true` now also implies be-core's `sensitive: true`
  automatically (previously these were two separate flags — `userEntity`'s `password` field had
  only `writeOnly` set, so it was excluded from the frontend `UserDto` type but **was still being
  returned by the backend's JSON responses**). Consumers on a be-core version with `sensitive`
  support (>=1.10.0) will see `password` actually disappear from `/api/users` responses once they
  upgrade to this version — that's the fix, not a regression.
