---
"@kniho-hlod/kniho-hlod-service": minor
---

- Bump `@eleansphere/entity-core` to `^1.3.0`. No behaviour change; downstream type-checking of
  `getServices().books` / `.users` now resolves to the precise CRUD service type instead of `any`.
- **Stop re-exporting the entity toolkit.** `defineEntity`, `FieldDef`, `Fields`, `InferDto`,
  `InferCreateDto`, `InferUpdateDto`, `DtoClass` and `AbstractUserScopedCrudService` are no longer
  re-exported from this package — import them from `@eleansphere/entity-core` directly. Nothing in
  the backend or frontend used the re-exports; this package composes entities, it isn't the
  toolkit. Every entity object, DTO, `allEntities`, `configureServices` / `getServices` and the
  auth exports are unchanged.
