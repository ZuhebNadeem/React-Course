## BUILDING CUSTOM REACT HOOKS

1. What and why. 2. Building a Custoom Hook. 3. Custom Hook rules and practices.

#### What are Custom Hooks

- Custom hooks are just regular functions just as the built-in hooks, like use state, but they are functions which can contain stateful logic.
- You can build custom hooks, to outsource stateful logic into reusable functions.
- Unlike regular functions, custom hooks can use other react hooks and react state, including other custom hooks.
- Mechanism for reusing logic, but here can you use react hooks.

#### Creating a Custom React Hook Function (Why)

- Just the logic is shared, not the state.
- The problem we face here is that the code which we want to reuse uses react hook like useState and useEffect, and it updates the state by calling the state updating function(setState).
- You are not allowed to use these react hooks in any random function.
- You must only use them in react component functions or custom hooks.

#### Have to start with USE!

- The function you create has to start with use!
- It will be a normal function in the end, but the use at their beginning signals to react that it will be a custom hook
- It gives the reacts guarantee that you will use state function by respecting these rules of hooks, so that you will use this custom hook function just as you use to build in hooks.
- Is a guarantee react needs because otherwise if you start using react hooks, in your custom hook and you would use your custom hook in a wrong, in a forbidden place, you would implicitly also use to build in hooks in a wrong place.
- Which use, react will let you know when you do something wrong with hooks.
- Why must use: If you have a function starting with use and you then start violating some of the rules of hooks, the project will let you know.

#### Custom Http hook

- In the end of the custom hook function, we wanna return something to the component where the custom hook is used.
- We make a custom http hook with use!
- If we call setState in custom hook, this will trigger the app component(where the component is beging used) to be re-evaluated because I'm using that custom hook here in that component.
- useCallBack dependency when using something external.
- We don't need to add it as a dependency in useCallback if it's a parameter, only when it is an external dependency.
- useCallback has no dependencies when all the data it's operating on is received as parameters in the wrapped functions. We've got no external dependencies here.
- .bind() => It does not execute the function right away. Instead it's a default JavaScript method, which you can use on any function object to pre-configure that function.
- Custom hook outsources or holds a lot of the duplicate logic, especially all that stateful logic.
- We can use it in different components to send different kinds of requests, and do different kinds of things with the response data, and still utilize shared logic.
