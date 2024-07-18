---
sidebar_position: 5
---

# Drawbacks of automated testing

Much of the industry has focussed on the benefits of automated testing and some have downplayed manual testing, claiming it to be time-consuming, inefficient and error-prone.

These criticisms may be strong in theory, but in practice they can ignore some important issues with automated testing:

- Automated test coverage can be limited.
- Automating all important flows can be time-consuming.
- Automating certain kinds of behaviour can be very difficult. E.g. full user interface testing including observing smoothness, performance, accessibility, etc. or long complex flows involving multiple systems, both internal and external to the organisation, can be very difficult to automate.
- Automating testing may limit incidental or unplanned but desirable discoveries. These would more likely be picked in manual testing. E.g. testing a login flow, one might discover a small UI glitch with the password entry field.

In most situations, the optimal choice is probably some combination of automated and manual testing.

Automated tests are useful and widely applicable, but not the "one ring to rule them all".