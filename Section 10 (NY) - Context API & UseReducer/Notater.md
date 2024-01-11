## SECTION 10: REACT'S CONTEXT API & USEREDUCER - ADVANCED STATE MANAGEMENT

Beyond basic appps & "Lifting up State"

- The poblem of shared State: Prop drilling
- Embracing Componet Composition
- Sharing State with Context
- Managing Complext State with Reducers

### Prop Drilling

- What is Prop Drilling? Prop drilling occurs when a parent component generates its state and passes it down as props to its children components that do not consume the props – instead, they only pass it down to another component that finally consumes it. Passing shared data throught multiple components layers.
- Application that consts of multiple components. Components is structure in a component-tree and component has child components. And you need to manage a state in one component, and updated in another component.
- Need to share state through props, and update it through props. Shared data throught multuple layers of components.
- Prop Drilling - Component Composition as a Solution: Cut things from one component and move code to App component, bwetween shop component, opening and closing tags. And with that, we still have the shop component as a wrapper but we have the logic for outputting the products and the usage of that product component in the app component now.
  Which now means that we no longer have to pass a pointer at this handleAddItemToCart function here to the shop component. Instead there we can now get rid of this prop because in the shop component, it's not needed anymore. And with that, we're embracing component composition, and we're using the shop component around the wrapper of that list of products.
  All the component will end up in App component, that is not so smart.

### Context API

Introducing the Context API:

- A feature that's there to make sharing data across Components and across component layers a breeze.
- You create a context value and that you then provide that value that you wrap this context, you could say around multiple Components. Can easly be conncected to state.
- And therefore, you can get rid of all those props. You don't need to pass the state or the state updating functions through multiple component layers anymore.
- The Components that do need access, that do need to change or read the State can directly reach out to that context, and therefore, also to that State.

Creating & Providing The Context:

- The App component is a great place to wrap Header and Shop with our context so that those components, or their child components, can use that context.
- export const CartContext = createContext({
  items: [],
  });
- <CartContext.Provider value={{shoppingCart}}> : My value will be accesable. We are providing the context. That provider component is required to provide a context value to all interested components.
- My value will be accessible through that context, but the context itself, this context object here, is created by React, and for example has this Provider component.
- And with that, we're providing that context. The next step now is to consume it in the components that need it to output some data.

Consuming the Context:

- useContext: This is a hook that allows us to use context, here to access the context value. const { items, updateItemQuanitty } = useContext(CartContext);
- const cartCtx = useContext(CartContext): This establishes the connection to that context you could say. And we'll get back a value from use context and therefore this value should have an items property because we added an items property here in this initial value.
- Able to read this context value. But that's how we can now access the context and its value. How can we now link this context to state though?

Linking the Context to State:

- <CartContext.Provider value={{ctxValue}}> : My value will be accesable. We are providing the context.
- So now with that, we actually already linked our context to the state because now the state simply is the value we're providing to the wrap components
- const ctxValue = {
  items: shoppingCart.items,
  addItemsToCart: handleAddItemToCart
  }
- Any component that can read this context, so any component that's in the end wrapped by this provider component here or that's in a child of a wrapped component, can in the end call this handle addItemToCart function through that addItemToCart property in my context value.
- So therefore, we can now provide this ctxValue constant. So this object here as a value of our context.
- And we're now using the context not just to provide values that can be read but also values functions that can be called in order to then change the state
- And that is how you can use context to share values and state updating functions with multiple Components in your app without using prop drilling.
- UseContext for accessing context.

What Happens When Context Values Change:

- A Different Way Of Consuming Context: When you do access a context value in a component and that value then changes the component function that accesses the context value, will get re-executed by React.
- Just as the component function would also get re-executed if it would be using some internal state that was updated or if its parent component were executed again.
- So the UI get updated: it also gets re-executed if a component function uses the useContext hook and therefore is connected to some context value.
- And that's why React will re-execute a component function if it's connected context value changes so that that component function can then produce some new user interface.

Outsourcing Context & State Into a Separate Provider Component:

- This context provider feature can be very useful for sharing data across multiple components in your application.
- To get all this context related data management out of the app component into a separate context component.
- And since this component function will be all about managing context data and providing that data to your application and it will be all about context related to the shopping cart.
- Handler om å dra alt som er knyttet til verdien ut i egen fil, og bare wrappe APP med den kompoennten. Istedenfor å ha alt i app.
- To use the Context API, you'll need to do three main things: Create a context, Provide the context value (which includes the theme property and the toggleTheme() method), Consume the context.

A Different Way Of Consuming Context:

- Can use useContext hooks, that this hook does kind of connect a component function to the context and make that context value available in that function.
- The Consumer component can be used to wrap JSX code that should have access to a context value with it.

### UseReducer

- reducer: A function that reduce one or more complex values to a simpler one.
- And the action you will then dispatch with this dispatch function will indeed be the action you'll receive on that second parameter.
- Now the state you'll get here , on the other hand will be the guaranteed latest state snapshot of that state that is managed by useReducer.
- function shoppingCartReducer(state, action) action checks with the dispatch function and type.
- action er det det du får tilbake, nå du dispatcher.
- state we'll always get that latest state snapshot automatically.
- When dispatching actions, you should make sure that every action is an object that has a type property.

- In the solution, as a first step, the existing counterReducer() function is edited to accept two parameters: A state value, A dispatched action.
- useReducer() then returns an array with exactly two elements: The current state + A "dispatch" function that can be called to dispatch a new action.
