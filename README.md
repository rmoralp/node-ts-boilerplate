# Minimalistic node typescript boilerplate

[![TypeScript version][ts-badge]][typescript-4-8]
[![Node.js version][nodejs-badge]][nodejs]

⚡️ Tools included and configured:

- [TypeScript][typescript] [4.8][typescript-4-8]
- [ESLint][eslint] with some initial rules recommendation
- [Prettier][prettier] to enforce consistent code style
- [Vitest][vitest] for testing
- NPM [scripts](#available-scripts) for common operations
- Example configuration for [GitHub Actions][gh-actions]

> Works out of the box for most [Node.js][nodejs] projects.

## Getting Started

This project is intended to be used with the latest Active LTS release of [Node.js][nodejs].

### Start new project

#### Use as a repository template

To start, just click the **[Use template][template-action]** link or the green button.

#### Clone repository

To clone the repository, use the following commands:

```sh
git clone https://github.com/rmoralp/node-ts-boilerplate
cd node-ts-boilerplate
npm install
```

## Available Scripts

- `build` - Transpile TypeScript to ES6
- `dev` - Interactive watch mode to automatically transpile source files
- `lint` - Lint source files and tests
- `lint:fix` - Lint source files and tests and fix issues
- `phoenix` - Clean install dependencies
- `prettier` - Reformat files
- `start` - Run the built app
- `test` - Run tests once
- `test:watch` - Run tests but watch for changes and rerun when they change


[gha-badge]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml/badge.svg
[nodejs-badge]: https://img.shields.io/badge/Node.js->=%2016.13-blue.svg
[ts-badge]: https://img.shields.io/badge/TypeScript-4.8-blue.svg

[eslint]: https://github.com/eslint/eslint
[gh-actions]: https://github.com/features/actions
[gha-ci]: https://github.com/jsynowiec/node-typescript-boilerplate/actions/workflows/nodejs.yml
[nodejs]: https://nodejs.org/dist/latest-v16.x/docs/api/
[prettier]: https://prettier.io
[typescript-4-8]: https://devblogs.microsoft.com/typescript/announcing-typescript-4-8/
[typescript]: https://www.typescriptlang.org/
[template-action]: https://github.com/rmoralp/node-ts-boilerplate/generate
[vitest]: https://vitest.dev/