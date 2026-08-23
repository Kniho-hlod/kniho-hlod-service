# @kniho-hlod/kniho-hlod-service

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
