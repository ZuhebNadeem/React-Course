## ADVANCED: HANDLING SIDE EFFECTS, USING REDUCERS & USING THE CONTEXT API

- Whenever set is activated , the component re-renders. Use only useState when you want the JSX to be updated and re-rendered.

#### useEffect Hook:

- TheuseEffect() Hook is called with two arguments with two parameters.
- The first argument is a function that should be executed after every component evaluation if the specified dependencies changed. And the specified dependencies are the second argument that you pass in.
- That code will then only execute when the dependencies specified by you changed, and not when the component re-renders. So only when your dependencies changed.
- depndency: Run useEffect when a dependencies values is changed. re-run logic when certain data (use state values), is changed. Variables or state defined in component, have to be added as dependencies!
- No dependecy: useEffect will only run one's
- useEffect runs when the component is rendered for the first time, and then again if the dependencies are changed.
- cleanUp: Before the useEffect runs, this will run. Whenever this function run , we clear the timeOut. We clear the last timer , before we set the new timer.
  It runs not the first time, but every time the dependencies are changed. But it runs before the code inside useEffect. Runs also when the component is removed fra the DOM, f.eks. you navigate to new page.
  return () => {
  clearTimeout(identifier);
  };

#### Using useEffect() For Requests

- useEffect: Fetch data as soon as a component load.
- Our second argument here which is this array of dependencies([]), where we define when this effect function should be executed again.
- State updating functions(setState) don't need to be added as dependencies because react guarantees that they will never change.
- useCallBack: Ensure that it will really always run when it needs to run but not when it does not need to run.
- If you have a function in useEffect depenedency, use useCallback on that function. (On the function, not useEffect)

#### useReducer:

- Help us with state managment (like useState). You often use more useState then useReducer.
- use useReducer when you need "more power"(reducer function that can contain more complex state update logic). Should be considered if you have related pieces of state / data. Can be helpful if you have more complex state updates.
- useReducer can be used as a replacement for useState if you need "more powerful state managment".
- Two usecases: 1. When you have state that belongs together (eks: input og inputValidering), 2. When you have state update that dependens on other state (eks: setFormIsValid() enteredEmail.includes("@") && event.target.value.trim().length > 6);
- setEmailIsValid(enteredEmail.includes("@")); -> setEmailIsValid is a usestate and enteredEmail is aonther state. This is not so smart, becuase it can happen that enteredEmail is not updated before this code run.
- useReducer is an alternative, but smart to use when states are related and depends on each other.
- A function that is triggered automatically once an action is dispatched(via despatchFn()) - it receives the lateste state snapshot and should return the new, updated state.
- Is like useState, but action thing is different here in useReducer.
- const passwordReducer = (state, action) => action is if we have run useSetReducer, then action holds the values. If not the state holds the last values.

#### Context (Context API):

- When we want to send a value in different parts(component) in the app. When there is no direct connection.
- Allows us to manage state, that we can directly change it from any component and directly pass it to any component, without building a prop chain.
- Provde it: We can wrap Context.Provider with jsx around the components, and then the components and all its child will have access to the value.
- Listen to it: Context.Consumer takes a child that is a function, and a argument that will get your context data.
- Listen to it easier: useContext hook: Tapping into context and listening to it. const ctx = useContext(AuthContext);
- Context can be state, data, value, useSetState , functions, methods and so on.
- React context is not optimized for high frequency changes, example state changes every second.

- When directly using props in child: Use child-parent logic.
- When directly not using props , but passing it to next child: Use useContext.

#### Rules of Hook:

- Dont call them in nested functions and blocks statements.
- ALWAYS add everything you refer to inside of useEffect() as a dependency!

#### Forward Refs(A hook):

- Focusing on input: Could be done with ref for focusing on input: inputRef.current.focus(); But it will focus on the last input, and we want the focus on first input.
- useImperativeHandle: is a React Hook that lets you customize the handle exposed as a ref
- forwardRef: Ref forwarding is an opt-in feature that lets some components take a ref they receive, and pass it further down (in other words, “forward” it) to a child.
