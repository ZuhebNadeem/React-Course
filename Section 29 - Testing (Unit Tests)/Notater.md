## TESTING REACT APPS (UNIT TESTS)

Automated Testing

- What is "Testing"? And why?
- Understanding Unit Tests
- Testing React components & bulding blocks.

### Intro

- What & Why:
  Manual testing, its hard to always test all possible combinations & scenarios.
  Automated testing: Write code that automatically tests your code. You test the individual building blocks of your app. Allows you to test all building blocks of your app.
- Understanding Different Kinds Of Tests:
  Unit Tests: Test the individual building blocks (functions, components in isolation). Projects typically contain dozens or hundreds of unit tests. Writing test for the samllest units, components, independely. The most common/important kind of test.  
  Integration Tests: Test the combination of multiple building blocks. Projects typically contain a couple of integration tests. To verify that the overall application really works. Also important, but focus on unit test in most cases.
  End-toEnd (E2E) Tests: Test complete scenarios / user flows in your app (as the user would experience them). Projects typically contain only a few E2E tests. Important but can also be done manually (partially).
- What To Test & How To Test:
  What: Test the diffrent app building blocks. Small building blocks, so that you have small, focused tests, that only test one main thing each. So, that you really have a lot of focused tests, which then also fail for a clear reason, if they do fail, instead of having a few large tests, which could fail for all kinds of reasons. Unit tests: The smallest building blocks that make up your app.
  How: Test success and error cases, also test rare (but possible) results.
- Understanding the Technical Setup & Involved Tools:
  Required Tools & Setup: We need a tool for running our tests and asserting the results + We need a tool for "simulating" (rendering) our React app / components. And then in our react app, we also need a way of simulating of rendering our react app and components for those automated tests to then interact with them. So we need to simulate the browser, so to say.
  Now, for the first part for running our testing code and asserting the results, we typically use Jest. Now for simulating and rendering our components and the react app, we typically use the "react testing" library these days.

### Running a First Test

-
