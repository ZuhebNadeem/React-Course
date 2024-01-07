## PRACTICE PROJECT: BUILDING A FOOD ORDER APP

- `...props.input` -> if input has type="text" , then this code will make sure type="text" is added.
  `<input type="number" id={props.input.id} {...props.input} />`

- React Portal: It’s useful sometimes to insert a child into a different location in the DOM. To render HTML at a specific place at the DOM. Render a portal with updating index.html.
  const portalElement = document.getElementById("overlays");
 `{ReactDOM.createPortal(<Backdrop />, portalElement)}`

- When using useContext the component will be re evaluated by react whenever the context changes.
  const cartItems = useContext(CartContext);
- I CreateContext blir verdiene oppretter, mens logikken og wrapper skjer av CartProvider.


- Reduce JS: Use the reduced method which allows us to transform an array of data into a single value (eksempel: into a single number)
- useReducer React: You receive a state object and an action automatically by React as parameters for reducer. The action is dispatched by you later in your code and the state is simply the last state snapshot of the state managed by the reducer.
- Cleanup function: If you return a function in useEffect, this will be called automatically as a cleanup function by React. Good to clean up timers or any other side effects that might be ongoing, because you started them in useEffect.
