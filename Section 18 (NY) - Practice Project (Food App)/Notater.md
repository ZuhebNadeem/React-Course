## SECTION 18: PRACTICE PROJECT: BUILDING A FOOD ORDER APP

Time to practice: Food order app (Components, state, context, effects, HTTP request & More!)

- Building a Complete Project from the ground up
- Building & configuring components
- Using state & context
- Managing HTTP Requests & Side Effects

1. Add the header component
2. Add the meals-related components & the logic to fetch meals data from a backend
3. Add cart logic (add items to cart, edit cart item) & Checkout page logic.

### Fetching Meals Data (GET HTTP Request)

- Fetch then returns a promise and you can use the "then" method to define a function that will be executed when that promise resolves when you gut back a response.
- Must not convert your React component to a async method, because that is not allowed by React.
- That meals data will not be there initially, we have to get it from backend and it will take time so we will be using useState.
- Where we have a side effect that would cause an infinite loop, we should use the useEffect hook about which you also learned earlier in the course.
- This hook allows us to run side effects after the component rendered, and it also allows us to define a dependencies array that controls when exactly the side effect function will run.

### Forskjelling

- If you wrap a custom component around something, around some text or JSX code, that text or JSX code will be received through that built in children prop.
- And it's therefore this children prop which I also want to use here to output that content which is passed between my button tags between these button tags.
- ...props => A simpler alternative is to use this rest properties syntax here, where you basically look for all other props you might be getting, all other properties that are set on that incoming props object, and you merge them into a new object, a new object called props in my case. And that will then simply be an object that contains all the other props that might have been set here.
- We're collecting all remaining props and we're then spreading those props onto the button element, the built-in button element.

### Cart Context & Reducer

- Add to cart button, and see the carts: Let's make sure that we start managing some cart data whenever this button or this button is clicked.
-
