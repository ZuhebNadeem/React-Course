## WORKING WITH FORMS & USER INPUT

#### Form submission & getting user input values

- We can read that entered value from input with useState and useRef.
- useState for every keystroke, useRef when clicked submitted (when you need the value once).
- Setting the input empty after submit: We can set the useState to empty, but not
  nameInputRef.current.value = ""; => NOT IDEAL, DON´T MANIPULATE THE DOM

#### Validation and feedback to user

1.  When form is submitted.

- return;
- Problem: You have a validation with useState for input, where the inital value is true. In useEffect you say that if the validation is true(if input is true), do something. But the input is never touched.
- Soloution: Have an extra state to check if the input was clicked on or not.

2. When an input is losing focus (on blur)

- Blur means when the input loses focus.
- Problem when the input loses focus, get warning, and then get focus again and updated. The warning wont go away. So that I as a user know, once I did reach a valid value.
- That's why we also might want to validate on every keystroke now. But only in combination with the other validation steps we integrated before.
  Because just validating on every keystroke alone would probably not be good. We would be getting indistinct errors.

3. On every keystroke

- Possible to it on onChange.
- Looot of code for just only one input and 4 usestates: Therefor a local value => Entire component function will re-execute whenever a new value is entered, we ensure that local const will always take into account the latest value.

#### Adding A Custom Input Hook

- Custom hook should be generic
- Values and functions get defines and returns in Custom Hook, so they can be called from the place where to hook is being used.
- Can be called from the Components that uses that hook.
- With the help of our custom hook we can call and pull out the values which we need, where all the logic is inside of the hook, and hence our component can stay
  a bit leaner and can focus mostly on the JSX.
- Can have the usestate and the onChange and onBlur in a custoom hook.
- Applying our custom hook knowledge to form

#### Using useReducer()

`const inputStateReducer = (state, action) => {
if (action.type === "INPUT") {
return { value: action.value, isTouched: state.isTouched };
}
}`

- Great to use useReducer, if you have a lot of different possible state values and a lot of complex state updating logic.
- But also when we have related pieces of state which are managed in individual states especially if those states depend on each other.
- state: The previous state snapshot, which will be provided and passed in automatically by React.
- action: An action which will also be passed into this function automatically by React.
  But which is the action you dispatched somewhere in your code.
- return {} : Ultimately you have to return a new state snapshot here, and we can return a default state snapshot which we always return unless we change it in code we're about to add, and that could contain our value.

- const [state, dispatch] = useReducer(method we made with state and action);
- state: First element is always the state managed by the reducer.
- dispatch: Second element is always a dispatched function, which allows you to dispatch actions against that reducer.

- using dispatch: (type+payload) object with a type property which identifies the action, and it can also carry a payload.
- I have the action types, and what should happen when they gets encountered, in my reducer function on top.
