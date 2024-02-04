## ADVANCED REDUX

1. Handling Async task with Redux (Http request)
2. Where to put your code
3. The redux devtools

### The problem with Redux

- Reducer must be pure, side-effect free, synchronous functions.
- Side effect should be done inside the component via useEffect or isndie the action creators.
- Redux actually has a solution that allows us to perform side effects and run asynchronous tasks as part of this action creators without changing the reducer function because that function must stay side effect free.

### React Redux Refresher Part 1/2

- Then we need the reducers key, which is a map of all the reducers or to be precise it's a map of methods that represent all the different cases, the different actions we wanna handle with that reducer.
- Provider to give our store to the whole application.
- A "slice" is a collection of Redux reducer logic and actions for a single feature in your app, typically defined together in a single file. The name comes from splitting up the root Redux state object into multiple "slices" of state.
- Dispatch will send you action to the store, through each reducer and potentially change its internal state.
- Get data from redux: Allows you to extract data from the Redux store state for use in this component, with useselector. Extract data from redux.
- To use selector, we need to pass a function which receives the Redux state automatically because this function which we pass to use selector will be executed by React Redux. So it receives the current state automatically and we should return the data which we wanna use in this component: const showCart = useSelector((state) => state.ui.cartIsVisible);
- Now we also need functions in our reducer, so different actions which this part of our state should handle in the end.
- The payload property which Redux Toolkit sets for you which contains any extra data you add it to the action.

### React Redux Refresher Part 2/2

SE CART-SLICE.JS

<pre>
import { createSlice } from "@reduxjs/toolkit";

removeItemFromCart(state, action) {
const id = action.payload;
const exisitingItem = state.items.find((item) => item.idd == id);
if (exisitingItem.quantity === 1) {
state.items = state.items.filter((item) => item.id !== id);
} else {
exisitingItem.quantity--;
}
}
</pre>

- state is the value from before, and action is the new value. is allowed to push like this, when working with redux toolkit.
- So, we keep all the items, where the ids do not match the one id we're trying to remove.That's how we can update these items to remove the one item that should be removed from the array whilst keeping all the other items.
- And therefore for the item where the id is equal, we'll filter that out and remove it therefore. That's how we can update these items to remove the one item that should be removed from the array whilst keeping all the other items.
- We'll export it as a file default, and we will also export the actions because of course we will need to dispatch those actions.
- we can now read data from the state by also importing useSelector and then selecting a piece of data. So, we call useSelector, past is function for selecting data from the state and dive into state.cart, dot cart because in index.js here, we gave this a cart key and then into the properties we set up in the state of our cartSlice. So, in this case, we're interested in the totalQuantity, hence here we dive into state.card.totalQuantity and store this in, let's say CartQuantity constant: const cartQuantity = useSelector((state) => state.cart.totalQuantity);
- Need data from redux, we use useSelector.

### Redux & Async Code

- Whenever the card changes, I wanna update it on the backend.
  -But how do we now integrate that backend and the HTTP requests that we need to send to that backend into our React application that uses Redux?
- Keep in mind, reducers must be pure, side effect free, and synchronous. So when we have any code that produces a side effect or is asynchronous, like sending a HTTP request, such code must not go into our reducer functions. So we can't send our HTTP request inside of the reducers in our cart slice after we edited our state here.
- Instead, when it comes to running such code, we have two main options where to put such code. We can execute it in the components (e.g., via useEffect). So we can simply ignore Redux, if you want to call it like this. Or we create something which is called a action creator which we only used indirectly thus far which also would allow us to run asynchronous code or generally any side effect code. These are our two main options.
- Frontend Code Depends on backend code. Because we of course have our backend API, our backend server talking to our frontend application with help of these http requests and the responses which we send around.
- Synchronous, side-effect free code : Prefer reducers, avoid creator or components.
- Async code or code with side-effects: Prefer action creators or components. Never use reducers.

### Using useEffect with Redux

- Let's start with running the async code, the side effect inside of our components.
- We need to do something with data, that is begin done in redux , before sending it to HTTP. But in redux you can not have HTTP.
- But if we now wanna sync our new state to the server so if we wanna update the server with that new state which we derived on the front end we can simply switch the order. We can first do the work on the front end and let Redux update its store. And then in a second step thereafter we send the request to the server but we don't necessarily need to do that here inside of the Reducer function where we wouldn't be allowed to do it.
- Now, the great thing is that useSelector sets up a subscription to Redux. So whenever our Redux store does change this component function will be re-executed and we will get to the latest state:
  const cart = useSelector((state) => state.cart);

  useEffect(() => {
  fetch("https://redux-412df-default-rtdb.firebaseio.com/cart.json", {
  method: "PUT",
  body: JSON.stringify(cart),
  });
  }, [cart]);

- We face one problem when using useEffect the way we currently do it: It will execute when our app starts. Why is this an issue? It's a problem because this will send the initial (i.e. empty) cart to our backend and overwrite any data stored there: Have a value outside of component , set it to true and then false.

### Using an Action Creator Thunk

- Alternative of putting all that side effect logic into our component. That is perfectly fine, but we learned that it's only one of the two options. The other option would be the usage of an action creator.
- Now we can also write our own action creators and we can write them to create so-called thunks.
- A thunk is simply a function, that delays an action until later, until something else finished. And we could write an action creator as a thunk, to write an action creator, which does not immediately return the action object, but which instead, returns another function which eventually returns the action. So that we can run some other code before we then dispatch the actual action object that we did want to create.
- An action creator function that does NOT return the action itself but instead another function which eventually returns the action.
- const sendCartData = (cartData) => {
  return (dispatch) => {
  //before we call dispatch, we can perform any asynchronous code, any side effects, because we will not yet, have reached our reducer.
  dispatch(
  uiActions.showNotification({
  status: "pending",
  title: "Sending...",
  message: "Sending cart data!",
  })
  );
  };
  };
  - Now in cart slice, we are instead dispatching a function that returns another function.
  - Both option is good.

### Redux DevTools

- These are extra tools which we can use which make debugging Redux and our Redux state a bit easier. Because in more complex applications with a lot of Redux state handled by a lot of different slices and a lot of different actions going on it can be difficult to find errors in your debug state in the order of your actions and so on.
