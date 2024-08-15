---
sidebar_position: 1
---

# Tests and steps

At the heart of Testmatic is **tests** which are simple numbered lists of **steps**.

You simply follow the the steps to test the system.

Here's an example of a test:

> User can login
>
> 1. Go to the homepage
> 2. Click the sign in button
> 3. Enter the username and password of a registered user
> 4. Click the sign in submit button
> 5. Observe that you are now signed in

Notice some steps are **_actions_**, such as:

> 2. Click the sign in button

Whereas others are **_expectations_**, such as:

> 5. Observe that you are signed in

The **_actions_** tell us what to do but the **_expectations_** tell us how the system should behave or respond.

If the system does not behave as expected then either there is a fault in the system or our expectation is wrong.

The title and steps should be as short and succinct as possible but also clear and specific enough to easily follow and understand.