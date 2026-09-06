---
"@kniho-hlod/kniho-hlod-service": patch
---

Bump `@eleansphere/entity-core` to `^1.3.0`. No source change — with entity-core 1.3.0, downstream
type-checking of `getServices().books` / `.users` resolves to the precise CRUD service type instead
of `any` (the `.d.ts` reference resolves against whatever entity-core version the consumer has).
