# EdTech



## Table of Contents ✨

- [Description](#description)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [Usage](#usage)
- [Contributing](#contributing)
- [Merging](#merging)


# Description

This platform bridges the gap between curriculum delivery and student engagement while empowering teachers with effective tools for content creation, assessment, and streamlined communication.

# Installation

First, run:

```bash
npm install
```

Then run:

```bash
npm run start
```

# Dependencies

- Iconsax React
- Tailwindcss
- Tw-merge


# Usage

## FONT

- Work Sans ---> usage "font-Worksans"

## Dev Server

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

# Contributing

EdTech is open to contributions, but I recommend creating an issue or replying in a comment to let us know what you are working on first that way we don't overwrite each other.

## Contribution Guidelines

3. Pull origin `git pull origin main`

4. Create a new branch for the task you were assigned to, eg `Assigned page - Name` : `git checkout -b Phoenix`

5. After making changes, format codes with `npm run format`

6. Then stage your files `git add .`

7. Commit your changes with a descriptive commit message : `git commit -m "your commit message"`.

8. IMPORTANT: To make sure there are no conflicts, run `git pull origin main`.

9. Push changes to your new branch, E.g: run `git push -u origin Phoenix`.

10. Create a pull request to the `main` 

11. Ensure to describe your pull request.

12. > If you've added code that should be tested, add some test examples.

# Merging

Under no circumstances should you merge a pull requests on a specific branch to the `dev` or `main` branch

### _Commit CheatSheet_

| Type     |                          | Description                                                                                                 |
| -------- | ------------------------ | ----------------------------------------------------------------------------------------------------------- |
| feat     | Features                 | A new feature                                                                                               |
| fix      | Bug Fixes                | A bug fix                                                                                                   |
| docs     | Documentation            | Documentation only changes                                                                                  |
| style    | Styles                   | Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)      |
| refactor | Code Refactoring         | A code change that neither fixes a bug nor adds a feature                                                   |
| perf     | Performance Improvements | A code change that improves performance                                                                     |
| test     | Tests                    | Adding missing tests or correcting existing tests                                                           |
| build    | Builds                   | Changes that affect the build system or external dependencies (example scopes: gulp, broccoli, npm)         |
| ci       | Continuous Integrations  | Changes to our CI configuration files and scripts (example scopes: Travis, Circle, BrowserStack, SauceLabs) |
| chore    | Chores                   | Other changes that don't modify , frontend or test files                                                    |
| revert   | Reverts                  | Reverts a previous commit                                                                                   |

> _Sample Commit Messages_

- `chore: Updated README file` := `chore` is used because the commit didn't make any changes to the , frontend or test folders in any way.
- `feat: Added plugin info endpoints` := `feat` is used here because the feature was non-existent before the commit.

