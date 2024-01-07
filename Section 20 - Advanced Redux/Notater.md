## ADVANCED REDUX

1. Handling Async task with Redux (Http request)
2. Where to put your code
3. The redux devtools

### The problem with Redux

- Your reducer functions must be pure, side-effect free, and synchronous functions.
- So your reducer functions should take some input in the case of the Redux reducer, the old state and the action, and then produce some output.
- Where should we put our asynchronous code when working with redux? Because the reducer function is clearly the wrong place as we just learned. Two soloution:

1. Directly into the component: We can put our side effects possibly asynchronous code directly into the component. Then we only dispatch an action once that side effect is done so Redux doesn't know anything about that side effect.

2. Own action creator functions: Don't use the automatically generated ones redux toolkit gives us, but instead we write our own action creators.
   Redux actually has a solution that allows us to perform side effects and run asynchronous tasks as part of this action creators
   without changing the reducer function because that function must stay side effect free.

### Redux (Basic)

- props should not be changed in react, they are readonly. update them in the parent component and then pass them down as the new value. the component receiving them should just be displaying them and the logic handling should occur at a higher level
- reducers: map of methods that represent all the different cases/action we want to handle.
- action.payload; Action does carry extra information, extra data/payload.
- (state,action) - state has the old value, action has the new value.
- useSelector((state) => state.cart.items);
- useDispatch() husk parantes!

### Redux & Async Code

- What to do: Want to send a request to backend server. Fetch saved cart from the backend, load it and display it in frontend. Redux with HTTP.
- Problem: We can not send HTTP request in our redux or fetch API.
- Note that we can't send requests directly within the reducer function.
- Frontend code depends on backend code. Need to transform data and send data.
- We need to decide where to place the code for sending the updated card to the backend when the backend doesn't handle it automatically.
- Can not send the request from inside the redux(reducer)

### Where To Put Our Logic

- Two options: Inside the component(in useEffect) or inside the "action creators".

- Component (Will not use this):

  - Will need to have all of redux logic also in component.
  - Have to copy state - You must never mutate redux state directly, must create a copy.
  - The problem: Redux is doing to little, and component are having all of the logic.

- Action creators (Will use this):
  - Dispatch action creators.
  - Async code or code with side-effect, prefer action creators for components. Never use reducers
  - Heavy work in redux
  - To sync our new state with the server, we can switch the order of operations. First, we perform the frontend work, letting Redux update its store. In a separate step, we send the request to the server.
  - Importantly, we don't need to handle the server request directly within the Reducer function, as it's not allowed there.
  - We can easily access our entire cart by using `useSelector` to monitor changes in the cart state. When the cart state changes, we can then trigger the HTTP request to update the server.
  - Include `cart` as a dependency in `useEffect` to trigger a re-execution when the cart changes.
  - With `useSelector`, our component auto-updates when the Redux store changes, ensuring we always have the latest state.
  - So that means that effect will also be re-evaluated and it will re-execute if our carts did change and that is exactly what we need.

### Using an Action Creator Thunk

- Side-effect logic into our component, but there is an alternative.
- Logic can happen in "custom action creator function" - a new action in redux where the logic is for fetching and sending http reqeust.
- Now we can also write our own action creators and we can write them to create so-called thunks.
- Thunk: A function that delays an action until later. An action creator function that does NOT return the action itself but instead another function which eventually return the action.
- Custom action creator in Redux: Dispatch a function that returns antoher function that holds the logic and http request. Use a function that returns another function, as an action.
- And why would we wanna use that pattern? Well, it's simply an alternative to having that logic in your component.
- Can have a action creator for sendning and one for reciving http requests.

### Redux DevTools

- Extra tools whick make debugging Redux and Redux state easier.