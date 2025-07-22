
# Repo Installation

You can point a dependency at any Git repo (public or private). Yarn will clone it at install time.

```json
{
  "devDependencies": {
    // install from main branch
    "@your-org/cli‑scripts": "git+ssh://git@github.com/your‑org/cli‑scripts.git",

    // or install a specific tag/semver
    "@your-org/eslint‑config": "git+ssh://git@github.com/your‑org/eslint‑config.git#v1.2.3"
  }
}
```

Versioning is driven by Git tags. If you push v1.2.3 in the repo, then specifying #v1.2.3 will fetch exactly that commit.

If you omit the #…, npm will grab whatever is on the default branch at that moment.

Yarn will attempt to grab the matching semver range resolution, however using npm won't.

# Usage in repos

Vite: `vite.config.ts`
```
import { defineConfig } from 'vite'
import { config } from '@jalapenolabs/cli/vite'

export default defineConfig({
  ...config
})
```

Eslint: `.eslintrc.cjs`
```
module.exports = {
  extends: ["@jalapenolabs/cli/eslint"]
}
```

# Permission

To let npm or npx clone private GitHub repos, you need credentials:

1. **SSH key**

Add your public key to GitHub

Use git+ssh://git@github.com/… URLs

2. **CI / CD**
In CI, set GITHUB_TOKEN env var

# CLI with Npx
You can invoke a Git‑hosted CLI without installing by using yarn:
```bash
yarn dlx git+ssh://git@github.com/your‑org/cli‑scripts.git <command> <args>
```

# Aliases

```bash
alias jala="yarn dlx git+ssh://git@github.com/your‑org/cli‑scripts.git"
```

```powershell
Set-Alias jala "yarn dlx git+ssh://git@github.com/your‑org/cli‑scripts.git"
```
