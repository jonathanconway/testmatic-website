---
sidebar_position: 1
---

# Tests and steps

At the heart of Testmatic is **tests** which are simple numbered lists of **steps**.

You simply follow the the steps to test the system.

Here's an example of a test:

![Sign in \n 1. Go to the website \n 2. Click the sign in button \n 3. Enter the username and password of a registered user \n 4. Click the submit button \n 5. Observe that you are signed in](/docs/concepts/tests_and_steps/test_example.svg)

<!--
**Sign in**

1. Go to the website
2. Click the sign in button
3. Enter the username and password of a registered user
4. Click the submit button
5. Observe that you are signed in
-->

You'll notice some steps are actions, such as:

> 2. Click the sign in button

Whereas others are expectations, such as:

> 5. Observe that you are signed in

The **actions** tell us what to do but the **expectations** tell us how the system should behave or respond.

If the system does not behave as expected then either there is a fault in the system or our expectation is wrong.

The title and steps should be as short and succinct as possible but also clear and specific enough to easily follow and understand.