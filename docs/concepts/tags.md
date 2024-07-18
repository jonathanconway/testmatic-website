---
sidebar_position: 2
---

# Tags

As you write many tests, you'll no doubt notice common recurring elements.

These elements can be referenced by **tags**, which are re-usable tokens that can be used to group and organise tests.

Tags are indicated in steps by surrounding a piece of text with round brackets like this: `(tag)`.

For example, the "sign in" button might be a recurring element. Here's how it would look if we make it tag:

![Reset password \n 1. Go to the website \n 2. Click the (sign in button) \n 3. Enter the username and incorrect password of a registered user \n 4. Click the submit button \n 5. Observe that an error appears indicating the incorrect password \n 6. Observe that a forgotten password link appears \n 7. Click the forgotten password link \n 8. Open your email, copy the code \n 9. Switch back to the website, paste in the code \n 10. Enter a new password and click submit \n 11. Click the (sign in button) again \n 12. Enter the username and new password \n 13. Observe that you are signed in](/docs/concepts/tags/tags_example.svg)

<!--
**Reset password**

1. Go to the website
2. Click the (sign in button)
3. Enter the username and incorrect password of a registered user
4. Click the submit button
5. Observe that an error appears indicating the incorrect password
6. Observe that a forgotten password link appears
7. Click the forgotten password link
8. Open your email, copy the code
9. Switch back to the website, paste in the code
10. Enter a new password and click submit
11. Click the (sign in button) again
12. Enter the username and new password
13. Observe that you are signed in
-->

Tags can be the following:

- Visual elements in the UI
- Pages of a website
- Screens of an app
- Test user accounts
- Flows, e.g. sign in flow
- Anything else that might be common between different tests

Note: You can also attach tags to a test itself. This is useful when you want a tag to apply to a whole test, not just one or more steps.