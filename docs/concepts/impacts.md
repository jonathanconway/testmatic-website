---
sidebar_position: 4
---

# Impacts

Part of the benefit of tags (discussed earlier) is their usefulness for grouping and locating tests. If two or more tests reference the same tag then you can locate these tests by filtering by that tag.

This gives you a way of finding **impacts** – which tests might be impacted by a particular tag.

For example, suppose you are making a visual change to the website header, which might impact the sign up button. You can search for all tests that reference the `(sign up button)` tag.

Your search might turn up a list of tests like this:

- Sign in as user
- Sign in as admin
- Reset password
- Sign out

Now you can run some or all of these tests and check how the Sign up button behaves under various scenarios. If you change introduced a bug in one of the tests, you'll have a chance to find the bug and fix it early rather than waiting for it to crop up in production.

<!-- ------------------------------------------------------------------------------------------------- -->