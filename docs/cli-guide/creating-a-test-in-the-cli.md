---
sidebar_position: 2
---

# Creating a test in the CLI

You can create your first test by running the `test add` command and answering prompt questions, pressing Enter/Return when done.

```bash
$ testmatic test add

Please enter test title: Homepage loads

Thank you!

Now, please enter your steps, one-by-one.
(Empty line to finish)

1. Navigate to homepage
2. Observe homepage has loaded
3.

$
```

Your test "Homepage loads" should now have been created.

You can verify this by running the `test list` command:

```bash
$ testmatic test list

TITLE                  NAME                   DOC
Should load homepage   should_load_homepage   ./.testmatic/tests/should_load_homepage.md

$
```

#### Adding tags in the CLI

Suppose you want to categorise your new test as applicable only to guest users (users who have not yet logged in).

You can add a tag to the test by running the `test tag add {tag-title}` command.

```bash
$ testmatic test tag add "should_load_homepage" "guest user"

$
```

> **Note:** We're using the test name `should_load_homepage` here. It's just the title condensed into one word using underlines: `_`. This makes it easier to copy/paste when needed.

Your new tag "Guest user" should now have been created and adeed to the "Homepage loads" test.

You can verify this by running the `test show` command:

```bash
$ testmatic test show should_load_homepage

Should load homepage
====================

Doc: ./.testmatic/tests/should_load_homepage.md

Steps
-----
    STEP
1   Navigate to homepage
2   Observe homepage has loaded

Links
-----
(No items)

Tags
----
NAME         TITLE        DOC
guest_user   Guest user   ./.testmatic/tags/guest_user.md

Runs
----
(No items)

$
```

You can see that your new tag was added.

If you explore your local `.testmatic` folder you'll see that the test and tag files were created:

- .testmatic
  - tests
    - should_load_homepage.md ⚡️
  - tags
    - guest_user.md ⚡️
  - runs

#### Finding tests by tag in the CLI

Suppose you added a few other tests involving various kinds of users. But now you want to filter by only tests involving a guest user. You can filter the list of tests by the "Guest user" tag using `test list` command with the `--tag` switch.

```bash
testmatic test list --tag "Guest user"

TITLE                  NAME                   DOC
Should load homepage   should_load_homepage   ./.testmatic/tests/should_load_homepage.md
```