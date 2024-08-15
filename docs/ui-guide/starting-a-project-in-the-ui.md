---
sidebar_position: 1
---

# Starting a project in the UI

There is no need to explicitly create a new project in the UI. As soon as you open the UI, a new test project will be created if one does not already exist.
![Screenshot of the Testmatic UI with an empty project](/docs/ui_guide/starting_a_project_in_the_ui/empty_project.png)

#### Switching to a different project in the local UI

If you are running the Testmatic local UI, you can switch to a project in a different folder.

Simply exit the running Testmatic local UI instance (Ctrl+C or Cmd+C), use `cd` to switch to a different folder, then re-run `testmatic-ui`.

For example:

```bash
~/Sources/project-one $ testmatic-ui

Running Testmatic UI...
...

{ Cmd+C }

~/Sources/project-one $ cd ../project-two

~/Sources/project-two $ testmatic-ui

Running Testmatic UI...
...
```