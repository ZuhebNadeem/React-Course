## DIVING INTO REDUX (AN ALTERNATIVE TO THE CONTEXT API)

1. Understanding Redux( Managing app-wide state with redux)
2. What is Redux and why.
3. How: Redux Basics & using redux with react
4. Redux Toolkit - simplify working with redux.

#### Understanding Redux

- Redux is a state management system for a cross-component or app-wide state.
- Helps us manage state, data that changes and affects our application and what we display on the screen.
- It helps us manage such data across multiple components
- State has 3 types:

1. Local state: State that belongs to a single component. Should be managed with useState or useReducer.
2. Cross-component state: State that affects multiple components. F.eks. open/closed state of a modal overlay. Managed with prop chains. React Context or Redux can also sove it.
3. App-wide state: State that affects the entire app (most / all components). F.eks. User authentication status. Can do it with prop chains, but can be complex. React Context or Redux can also sove it.

#### Why redux when we have react context

- Potential disadvantages in react context. If your app does not have these disadvantages, you can still use react context.

1. Complex setup / managment.
2. Difficult to maintain and manage.
3. Not great if your data/state changes a lot.

- For small apps , this might not matter.

#### How Redux works

- One central data (state) store.
- Only one store
- Dont need to directly manage the store all the time.
- Component subscribe to the store, and whenever the data changes, the store notifies components, and then components can get the data they need.
- How do we change data in store: Component never directly change/manipulate the data in store. We use a concept called reducers.
- Reducers: This function is responsible, for mutating. So for changing the store data. Mutates (= changes) data in store.
- The component should trigger the change.
- How do we connect components with reducer functions: Trigger.
- Components talk with store : We have actions and components dispatch actions.
- An action is really just a simple JavaScript object, which describes the kind of operation, the reducers should perform.
- Therefore, Redux then forwards actions to the reducer, reads that description of the desired operation, and then this operation is performed by the reducer.
- So components dispatch actions, which describe what should be done, but don't do it directly, then these actions are forwarded to the reducer, the reducer then does what the action wants, and then the reducer, spits out a new state, which effectively will replace the existing state in that Central Data Store.
- And when that happens, when that state in that data store is updated, subscribing components are notified, so that they can update their UI.

### The Core Redux Concepts

- A component that subscribes to the store.
- What do we do with that store? Well, that store should manage some data and the data which it manages is in the end determined by the reducer function, because it's the reducer function which will produce new state snapshots. And when we run this code for the first time, the reducer will also be executed with a default action,
- Add reducer function: A reducer function is a standard JavaScript function, two parameters, the old or existing state and the action that was dispatched. And then this reducer function must return a certain output.
- It must always return a new state object. And therefore a reducer function should be a pure function. Which basically means that the same inputs, the same values for inputs always should produce exactly the same output. Must not send a HTTP request or write something to local storage.
- Reducer works together with the store, so the store wants to know who the reducer function is that will manipulate the data.
- Someone who subscribes to that store, then we need an action that can be dispatched.
- Subscribtion: So this subscription function will soon be triggered whenever the state changes. And then when it is triggered, we can get to that latest state after it was changed with the get.state() method.
- Make redux aware of this subscriber function, and tell that this function should be executed whenever state change: Call store.subscribe(). So to subscribe method expects a function which Redux will then execute for us whenever the data and the store changed.
- In redux store we should have redux, subscriber, action.
- Action: Dispatch with type that has to be uniqe to tell what to run in the store. In the reducer, we can tell what to do with different actions type. if(action==='increment') osv.

### Redux with react

- In redux store: create store, create reducer, not subscribe. The component should dispatch and listen (subscribe), not the store.
- Now we wanna connect react app to redux store: Provide the store (only once).
- Providing the store: <Provider store={store}> <App /> </Provider>
- Now to store is provided, components can tap into that store. They can get data out of the store. They can set up a subscription to that data to be precise, and they also can dispatch actions.

### Get access to data manged by Redux (useSelector)

- Using Redux Data in React Components: useSelector, access to the redux store and the data in there. Select a part of our state managed by the store. Pass a function - which will be executed by Redux store.
- A function which will be executed by a React Redux, which then basically determines which piece of data we wanna extract from our store.
- Able to just get a slice just a tiny part of that overall state object in a easy way is worth a lot. And that's what use selector allows us to do.
- When you use the useSelector hook in React Redux, it's great because it automatically subscribes your component to changes in the Redux store.
- Any changes in the Redux store trigger the re-execution of your component function. This ensures that your component always reflects the latest counter value. That's why useSelector is a valuable hook for retrieving data from the store.
- useSelector((state) => state.value) - That will then always update and the component will be re-evaluated whenever that data which we're accessing here changes.

### Dispatching Actions From Inside Components

- Dispatch action from inside a react component: use dispatch().
- Dispatch is a function, and when we call it, it dispatches an action to our Redux store.
- dispatch({ type: "increment" }): Type is the same as in the store - to tell the dispatch which code to run.

### Attaching Payloads to Actions(dispatch)

- In the store: counter: state.counter + action.amount
- In the component: dispatch({ type: "increase", amount: 5 });
- This process involves extracting an action payload, which is achieved by adding an extra property to your action objects.

### Working with Multiple State Properties (How To Work With Redux State Correctly)

- Multiple state: Have multiple state for multiple values.
- const initalState = { counter: 0, showCounter: true } ->

1.  If we f.eks. only want to increase, we still need to return all the inital State and give it a value. Must always set all the other state.
2.  Always return brand new snapshot, so the object will not be merged with the existing state, it will be overwritten.
3.  If we dont include showCounter, it will be removed and get value undefined(false)

- Remember to have return in store and modify your state in return and only in return.

### Introducing Redux Toolkit

- Redux Toolkit: Easier to set up, and use. Easier for uniqe identifiers and we dont miss type.
- createSlice: Preparing a slice of our global state. When we have different pieaces of state, we could create different slices.
- createSlice needs a name, initalState and reducers.
- Reducers is an object, a map you could say, of all the reducers this state slice needs.
- Reducers hold all the "type", alle utfall som kan skje.
- We dont need action anymore: Each method automatically receives the latest state and is called by Redux, eliminating the need for manual if checks
- Redux toolkit is also easier because we don't have to create a copy manually and dont need to keep all the code we're not changing, instead, we just change the code we wanna change and internally it's translated into immutable code, because of redux.
- Dont need always to return a new object of inital state. Just return what we want to change.
- Payload: Our reducer receives still state and action, and use action to get payload.

### Connecting Redux Toolkit State with React component

- How do we now make our store aware of that slice? How do we use that slice? And how do we then dispatch actions against this slice?
- return value of calling createSlice and add it to createStore (ConfigureStore).
- ConfigureStore like createStore creates a store but it makes merging multiple reducers into one reducer easier thereafter.
- Dispatching actions: Creates automatically unique action identifiers for our different reducers. slice.actions. Dont need to worry about creating action object at our own, uniqe identifiers and typos.
- We also export our actions.
- dispatch(counterActions.increase(10)); // will be placed in payload: 10
- Therefor: increase(state, action) {
  state.counter = state.counter + action.payload.amount;
  },

### Working with Multiple Slices (Application wide state)

- Only one redux store, call configureStore only once, only one root reducer.
- Multiple slice will be merged together into one main reducer, which is exposed to the user.
- Access the data with multiple slice: in Selector , need to use identifier that we made in our reducer method in store.  
   const show = useSelector((state) => state.counter.showCounter);
- To use an action dispatch :

const dispatch = useDispatch();

const handleLogin = () => {
dispatch(authActions.login());
};

- Read value from store with useSelector.
- You will always just have one Redux store, but then typically multiple different state slices which manage totally different data.

## Splitting our code(store to multiple files)

- Put every slice into its own file.
- In the store: We focus on creating that main store and merging all the slice reducers together. Have only configureStore in the main store.
- Every slice has it own file now and everything is handled here.

## Summary

- Create store with configureStore.
- useSelector: read data from our Redux managed state
- useDispatch: get access to that dispatch function which we use to dispatch our actions, which leads to our Redux state being changed.
- payLoad: Can pass extra data to those action.
- React context is not optimized for high-frequency state changes.
