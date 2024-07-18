---
sidebar_position: 3
---

# Advanced CLI usage

#### Using Runs in the CLI

When you perform a test, you might want to record certain details:

- Date/time you performed the test
- Result of the test – success, failure, mixed
- Text and links
- Screen recordings (videos, images, etc.)
- Outputs (JSON or CSV files, etc.)

Testmatic has a Runs feature to help you with this.

Each test can have one or more runs.

Each run has:

- **One dated folder** containing a Markdown file and any other files you wish to include (screen recordings, outputs, etc.)
- **One dated Markdown file** containing the date/time, text and links (if any)

To create a run, simply run the `run add` command, providing the test name (or title) as the first parameter:

```bash
testmatic run add should_load_homepage
```

> **Note:** You can optionally provide a date-time stamp in the format: `YYYY-MM-DD_HH-MM`. For example: `2024-10-01_11:30` for October 1, 2024 at 11:30 AM.

The new run folder and Markdown file should now have been created.

You can verify this using the `run show` command:

```bash
$ testmatic run show should_load_homepage

Should load homepage – 24/3/2024 2:44
=====================================

Files
-----
FILE
./.testmatic/runs/should_load_homepage/2024-04-24_02-44/2024-04-24_02-44.md
```

A new folder and Markdown file will have been added:

- .testmatic
  - runs
    - should_load_homepage
      - 2024-04-24_02-44 ⚡️
        - 2024-04-24_02-44.md ⚡️

You can open that folder in Finder (on Mac) using the `run open` command:

```bash
testmatic run open should_load_homepage
```

> **Note:** How does Testmatic know which run to show / open? It uses the latest by default. But if you prefer to target an older run, can provide an additional argument of the date/time stamp of the run to the `run show` or `run open` command. See [run show](/docs/cli-guide/reference/run-show), [run open](/docs/cli-guide/reference/run-open) for details.

#### Using Links in the CLI

You might want to attach links to tests or tags.

For example:

- Links to documentation
- Links to web pages under test
- Links to screenshots or screen recordings
- Links to mock accounts

You can add/remove links manually by editing the test, tag or run Markdown files.

Testmatic also includes `test link add` and `tag link add` commands, allowing you to quickly add links to tests or tags respectively without leaving the command line.

```bash
$ testmatic test link add should_load_homepage http://website.com/

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
NAME                  URL
http://website.com/   http://website.com/
```

```bash
$ testmatic tag link add guest_user http://test-accounts.com/guests

$ testmatic tag show guest_user

Guest user
==========

Doc: ./.testmatic/tags/guest_user.md

Links
-----
NAME                              URL
http://test-accounts.com/guests   http://test-accounts.com/guests

Tests
-----
TITLE                  NAME                   DOC
Should load homepage   should_load_homepage   ./.testmatic/tests/should_load_homepage.md
```

#### Using Impacts in the CLI

You might want to quickly find out, for a specific test or tag, which other tests or tags are related.

For example, some tests involving guest users might also involve other kinds of users or other systems, e.g. email notifications. So an error that causes failure of one test might cause failures of other related tests.

Testmatic has an Impacts feature which shows you a graph of impacts of a given test or tag. You can use the `test impacts` command to view a test's impacts or the `tag impacts` command for a tag's impacts.

```bash
$ testmatic test impact should_load_homepage

Test: Should load homepage - Impacts
====================================

--> Homepage screen (homepage_screen) [tag]
  --> Footer (footer) [tag]
    --> Should show copyright info (should_show_copyright_info) [test]
  --> Header (header) [tag]
    --> Should show log out button (should_show_log_out_button) [test]
--> Homepage url (homepage_url) [tag]
  --> Should indicate logged in status after log in (should_indicate_logged_in_status_after_log_in) [test]
    --> Header login link (header_login_link) [tag]
    --> Login form (login_form) [tag]
    --> Valid existing user login credentials (valid_existing_user_login_credentials) [tag]
    --> Header logged in status (header_logged_in_status) [tag]
```

```bash
$ testmatic tag impacts homepage_url

Tag: Homepage url - Impacts
===========================

--> Should indicate logged in status after log in (should_indicate_logged_in_status_after_log_in) [test]
--> Should load homepage (should_load_homepage) [test]
  --> Homepage screen (homepage_screen) [tag]
    --> Footer (footer) [tag]
      --> Should show copyright info (should_show_copyright_info) [test]
    --> Header (header) [tag]
      --> Should show log out button (should_show_log_out_button) [test]
```