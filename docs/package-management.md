# Package management

This repo uses Yarn Berry, pinned to `yarn@4.17.0` via the `packageManager`
field in `package.json`. Corepack activates the pinned version, so run
`corepack enable` once and every `yarn` invocation uses 4.17.0.

## Why Berry

`@jalapenolabs/cli` is consumed straight from git, so downstream Yarn Berry
projects build it from source on install. Berry decides how to bootstrap that
build by inspecting `yarn.lock`: a Berry lockfile (with a `__metadata` key)
builds with Berry, while a classic lockfile forces a Yarn 1.22 bootstrap whose
tarball extraction is flaky in clean containers. Shipping a Berry lockfile
keeps from-source git installs on the Berry code path.

## Configuration

- `.yarnrc.yml` sets `nodeLinker: node-modules`, keeping a classic
  `node_modules` layout so nothing needs Plug'n'Play support.
- `enableGlobalCache: true` keeps the tarball cache out of the repo; only
  `yarn.lock` and `.yarnrc.yml` are committed, never `.yarn/cache`.
- `.gitignore` excludes `.yarn/*` except `patches`, `plugins`, `releases`,
  `sdks`, and `versions`.

## Validating a consumer install

To confirm a downstream Berry project can install this package from git, add
`"@jalapenolabs/cli": "https://github.com/JalapenoLabs/cli.git"` to a clean
Berry project and run `yarn install` in a fresh container (no seeded cache or
`node_modules`). The from-source pack step must report building with Yarn 4,
not "Using Yarn Classic for bootstrap".
