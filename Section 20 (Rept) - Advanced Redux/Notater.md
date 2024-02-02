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
-
