---
sidebar_position: 8
---

# Benefits of using Testmatic

Manual testing can be achieved in various ways with various systems.

Some key benefits of using Testmatic for your manual tests are:

- Fast and easy to create and update via CLI or text editor
- Easy to share with business and tech people alike
- Organised, structured and repeatable, enabling rigor and consistency in the testing effort
- Searchable by tag, allowing second-order impacts of failures to be identified, tested and fixed
- Can be used to generate automated unit test code scaffolding if desired (see: [Roadmap](/docs/contributing/roadmap))

#### Testing steps are simple and easy for people to read

Given/When/Then syntax is cumbersome and requires a learning curve and is generally the domain of software engineers.

In contrast, simple lists of testing steps, much like the method in a cooking recipe, are easy to understand for a broad set of team members – e.g. agile managers, product owners, QA, designers, engineers.

#### Testing steps support simple, fast and rigorous manual testing

It's easier and faster to manually test software when you are clear on what specific actions need to be taken and in what order.

By documenting and organising testing procedures, manual testing can be performed consistently, ensuring a rigorously tested product.

#### Testmatic tests can be incrementally automated

Testmatic focusses on helping you write and organise your testing steps first, generating empty placeholder functions without you having to immediately write code to automate them.

If and when you decide to add automation, it's easy to locate the places in which to write code, and you can automate step by step, rather than having to automate a whole test sequence all at once.

#### Testmatic tests are easy to share

You can share your test steps with team members and stakeholders easily.

You can link to a whole test, or a list of related tests.

#### Testmatic tests can be hosted in version control, with zero third-party dependencies or additional setup

This makes it easy to get started quickly - simply fork the testmatic project, begin generating and committing your tests, and push to your own repository.

If your organisation has a version control system, and you have permission to create a new repository, you already have everything you need to get started.

#### Testmatic tests are version-controlled and implemented in code

As your testmatic instance is a forked Git repository by default, you reap all the benefits of version control - tracking the history of changes, branching, ability to revert changes, etc.

As tests, steps and tags are stored internally as Typescript code, you can easily make modifications - large or small - using the standard tools of your IDE. For example, in VS Code, you can rename a token and automatically have it update all usages, by renaming the file with [Update imports on file move](https://code.visualstudio.com/docs/typescript/typescript-refactoring#_update-imports-on-file-move) and [Rename symbol](https://code.visualstudio.com/docs/editor/refactoring#_rename-symbol).

#### Testmatic tags provide a powerful way to group related tests

For example, you can instantly retrieve a list of all tests for a particular screen, e.g. Login screen or Dashboard screen.

Or you can instantly retrieve a list of tests that utilise a particular test account.

These lists can be conveniently linked from external repositories of information, such as a Solution design in a Wiki, a task tracking system or company chat.

For example, a wiki page for the Login screen could link to a testmatic doc listing all tests for that screen: http://github.com/myaccount/mytests/blob/main/docs/tags/login_screen.md.