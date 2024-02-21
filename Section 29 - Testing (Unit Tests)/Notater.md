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

### Running a First Test (App.test.js)

- This is a file which is there to test this app component because the convention is to name your testing files like your component files, just with the word test in the file name. So name.test.JS as an extension to be precise.
- Test function, takes two arguments: The first argument is a description of the test. The second argument is which contains the actual test and code. So that's the code which will be executed once we run our test.
- We need to add a second argument to this test function, which is an anonymous function, which will contain the actual testing code.

### Writing Our First Test

- The Three "A"s:
  Arrange: Set up the test data, test conditions and test environment.
  Act: Run logic that should be tested (e.g., execute function). Do the thing, f.eks. button click.
  Assert: Compare execution result with expected results. Output vs expectation.

describe("Greeting component", () => { //Group test, under test suites.
test("renders Hello World as a text", () => {
//Arrange
render(<Greeting />);

    //Act
    //... nothing

    //Assert - look at dom and see if we find such a text
    const helloWorldElement = screen.getByText("Hello World!");
    expect(helloWorldElement).toBeInTheDocument();

});
});

### Testing User Interaction & State

- See state before change, and after click. Test all possible scenarios.
- User event is an object that helps us trigger user events in this virtual screen. We can perform like clicking, double clicking, hovering, typing into inputs. Click then needs one argument at least. It needs the element on which you want to simulate a click.

test('renders "Changed!" if the button was clicked', () => {
//Arrange: Sets up the initial conditions for the test. In this case, it renders the Greeting component.
render(<Greeting />);

//Act: Performs the action you want to test. Here, it clicks on a button within the rendered Greeting component.
const buttonElement = screen.getByRole("button");
userEvent.click(buttonElement);

//Assert: Checks whether the expected outcome of the action occurred. It looks for an element containing the text "Changed!" and verifies that it's present in the rendered output.
const outputElement = screen.getByText("Changed!");
expect(outputElement).toBeInTheDocument();
});

- Testing Connected Components: So that's the good thing about render which we use to render the greeting component.
  It really renders this entire component tree that is required here. So it renders not just greeting and ignores other components used in that JSX code but it renders the content of those components like in this case, the output component as well.
  It renders the component and theirs child also.

### Testing Asynchronous Code (HTTP)

- It is important to understand that getAllByRole, will instantly look for these elements on the screen. But keep in mind that here we are sending an HTTP request, which is an asynchronous action.
- Instead of getAllByRole, you can use findAllByRole. The difference is that find queries instead of the get queries, return a promise. Here you get back a promise, and actually react testing library will basically reevaluate the screen a couple of times until this succeeds. So therefore now, this will then wait for this HTTP request to succeed.
- With help of defined queries, we are able to wait for our data to be rendered.

describe("Async component", () => {
test("renders posts if request succeeds", async () => {
render(<Async />);

const listItemElements = await screen.findAllByRole("listitem");
expect(listItemElements).not.toHaveLength(0);

});
});

### Working With Mocks

- We generally don't wanna send Http requests to our servers. We don't wanna send requests because A: that will cause a lot of network traffic AND B: You don't wanna send requests to servers that start changing things there(like in post, your tests might start inserting data into a database).
- I don't wanna test whether fetch successfully sends a request technically behind the scenes. I instead wanna test if my Component behaves correctly depending on the different outcomes of sending a request. So I wanna check if my Component behaves correctly once I got the response data.
- Using mock function, that does not send real request.
- jest.fn(): Creates a mock function.

describe("Async component", () => {
test("renders posts if request succeeds", async () => {
window.fetch = jest.fn();
window.fetch.mockResolvedValueOnce({
json: async () => [{ id: "p1", title: "First post" }],
});
render(<Async />);

    const listItemElements = await screen.findAllByRole("listitem");
    expect(listItemElements).not.toHaveLength(0);

});
});

- window.fetch = jest.fn();: This line mocks the fetch function using Jest's mocking functionality. It replaces the global fetch function with a Jest mock function.
- window.fetch.mockResolvedValueOnce({ ... });: This sets up a mock response for the mocked fetch function. It resolves with an object containing a json method that returns a promise, simulating a successful API response with one post.
- render(<Async />);: This renders the Async component.
- const listItemElements = await screen.findAllByRole("listitem");: This line queries for all elements with the role "listitem" in the rendered component using findAllByRole from the testing library's screen object. It waits for the asynchronous operation to complete, as indicated by the await keyword.
- expect(listItemElements).not.toHaveLength(0);: This expectation checks that there is at least one list item element rendered in the component. If there are no list item elements, the test will fail.
