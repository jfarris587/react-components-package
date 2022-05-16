# GitHub Package Template

Template for releasing to GitHub Packages

## Technologies Used

- [GitHub Packages](https://docs.github.com/en/packages)
- [GitHub Actions](https://docs.github.com/en/actions)
- [Semantic Release](https://github.com/semantic-release/semantic-release)
- [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/)

## Developer Setup

- Create new [GitHub personal access token](https://github.com/settings/tokens)
  - Scopes needed: `repo`, `read:packages`, `write:packages`, & `delete:packages`
- `npm login --registry=https://npm.pkg.github.com`
  - Use new access token for password

## Usage

### In Application

Create `.npmrc` in the root of the project with the following:

```
@calizahq:registry=https://npm.pkg.github.com
```

Then add the package with `yarn`:

```
yarn add @calizahq/<YOUR_PACKAGE_NAME>
```

### In Package

Any push/merge to `main` will trigger a GitHub Action that will build, test, version, & release the package. It is configured to version the package based on [Conventional Commits](https://www.conventionalcommits.org/en/v1.0.0/). Commits that do not conform to the patterns below (i.e. `chore:`) will still run tests, but they will not release a new version.

| Commit Prefix | Description |
| --- | --- |
| `fix:` | Patch version (`1.0.0 -> 1.0.1`) |
| `feat:` | Minor version (`1.0.0 -> 1.1.0`) |
| `BREAKING CHANGE:` (in footer) | Major version (`1.0.0 -> 2.0.0`) |

## Local Development

### Web

To add:

- Run `yarn link` in package
- Run `yarn link @calizahq/<YOUR_PACKAGE_NAME>` in application

To remove:

- Run `yarn unlink` in package
- Run `yarn unlink @calizahq/<YOUR_PACKAGE_NAME>` in application
- Run `yarn install --force` to reinstall package from GitHub

### Mobile

Unfortunately, symlinks [do not work](https://github.com/facebook/metro/issues/1) in React Native, so we have to use a different pattern. See [here](https://github.com/calizahq/react-native-components#local-development) for more information.
