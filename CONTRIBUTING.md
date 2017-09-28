

# Contributing

----------

## Submit a Change
Please send a GitHub **Pull Request** to the [solitude](https://github.com/mpolizzotti/solitude/pulls) repository. Please adhere to the below guidelines when submitting your pull request.

### Committing 
- All commits should be atomic (one feature per commit).
- A commit should include the **SOL:** prefix with a short **declarative description**.
	- `git commit -am 'SOL: Add favicon.ico to theme directory.'`
- Individual commits should be small, succinct and scoped to the feature or defect.
	- `git commit -am 'SOL: Add command-line build:dev command to project build.'`

### Pull Requests
- A **Pull Request** or **PR** for a **feature** or **defect** should be submitted against the **develop** branch.
- A **PR** title field should include the **SOL:** prefix with a **feature** or **defect** description.
	- `SOL: Implement typeahead functionality for search feature.`
- Add screenshots to front-end PR's (if needed for clarification).

## Code Conventions

## Folder Naming

Folder names should be lowercased. When needed, longer folder names should be separated with a hyphen. Please review the below code snippet for examples of acceptable naming patterns.

### *Example*

    /solitude
        /assets
            /css
            /fonts
            /images
            /less
            /js
                /src
                    /components
                        /navigation
                        /page-loader
                        /comments

## JavaScript Naming

JavaScript files should use the **camelCase** syntax, use proper **dot notation** and be **explicitly** labeled without abbreviations. Please review the below code snippet for examples of acceptable naming patterns.

### *Example*

    /js
        /components
            /comments
                comments.service.js
            /keyboard
                keyCodes.service.js
                restrict.tabbing.service.js

## HTML

HTML files should be lowercased.  When needed, longer folder names should be separated with a hyphen. HTML files should be explicitly labeled without abbreviations. HTML files that are not defined by the Ghost platform should also be placed within the `solitude/partials` directory. **Class names** should use **hyphens** instead of camelCasing (i.e., `author-header` or `post-article`) and **IDs** should be **camelCased** (i.e., `#authorHeader` or `#postArticle`). Please review the below code snippet for examples of acceptable naming patterns.

### *Example*

    /solitude
        /partials
            author-header.hbs
            comments.hbs
            footer.hbs

## LESS

LESS files should be lowercased.  When needed, longer file names should be separated with a hyphen. Fonts, mixins, color palette, global variables and components should all be broken out into individual modules. **Class names** should use **hyphens** instead of camelCasing (i.e., `author-header` or `post-article`) and **IDs** should be **camelCased** (i.e., `#authorHeader` or `#postArticle`). Lastly, CSS implementations should be name-spaced to their relevant component for feature.

## Comments

This codebase takes a *"minimum requirements, maximum efficacy"* type of approach. **Module/Class level comments** are required and need to briefly describe the **what/why** for the module or class. As far as comments beyond these requirements, strive to explain anything that a new developer down the road couldn't pick out from the code (i.e. specialized logic, specialized performance optimizations, etc..). 

    // Describes the interface of a Monkey.
    class Monkey {
        constructor(nanas) {
            this._nanas = nanas;
        }

        eat() {
            if (this._nanas > 0) {
                this._nanas -= 1;
            } else {
                throw(new Error('No more nanas!!'));
            }
        }
    }

Generally speaking, review the existing code and try to adhere to the style that is currently in place.