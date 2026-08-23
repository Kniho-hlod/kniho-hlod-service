# Contributing to kniho-hlod-service

## Normal workflow

```bash
npm install
npm run dev      # tsc --watch
npm run build     # one-off compile to dist/
```

Before committing a change that should ship, add a changeset (`npx changeset add`), same as
[entity-core](https://github.com/Eleansphere/entity-core/blob/main/CONTRIBUTING.md). CI opens a
"Version Packages" PR from pending changesets on `master`; merging it publishes.

## Developing against kniho-hlod-backend / kniho-hlod-frontend without publishing

```bash
npm run build
npm link

cd ../kniho-hlod-backend   # or ../kniho-hlod-frontend
npm link @kniho-hlod/kniho-hlod-service

# ...iterate...

npm unlink @kniho-hlod/kniho-hlod-service
npm install
```

## Developing against a local @eleansphere/entity-core or @eleansphere/service-core

Same `npm link` mechanism, from the other side — see their own CONTRIBUTING.md
([entity-core](https://github.com/Eleansphere/entity-core/blob/main/CONTRIBUTING.md),
[service-core](https://github.com/Eleansphere/service-core/blob/master/CONTRIBUTING.md)) for the
steps to link *from* this repo.
