## SECTION 16: BUILDING CUSTOM REACT HOOKS

Custom Hooks (Creating & using custom react hooks)

- Repetition: Rules of Hooks
- Why Custom Hooks?
- Creating Custom Hooks
- Using Custom Hooks

### Rules of Hooks

- Only call Hooks inside of component functions.
- Only call hooks on the top level. React Hooks must not be called in nested code statements (e.g. inside of if-statements). Hooks may be used inside of Component functions or inside of other Hooks, custom hooks.
- Well, the idea behind building custom Hooks is always to wrap and reuse code that goes into your Component functions.
- Code we want to outsource, make it generic and reusable configuration.
- Part of a componet, does not include JSX.
- Code that uses hooks, and manipulate state, can only be done inside of a component, not in random shared functions. Because Hooks can only be used in Components in the end and state updates therefore can also only be made in Component functions.
- Custom Hooks will also be functions that we can then call from different places, but they will be functions that are guaranteed to be used in valid places, so that are guaranteed to be used in Components in the end.

### Creating a Custom Hook (Outsource to a custom hook)

- useFunction: It should be a function that starts with use because that's a convention, a rule in React projects that functions that start with use are treated as hooks and React projects typically look for functions that start with use and enforce certain rules on such functions.
- Functions that start with use are treated as hooks and that those rules of hooks are enforced on such functions so that we, for example, get an error if we try to use them in the wrong place.

### Custom Hook: Managing State & Returning State Values

- Well, to make this useFetch hook functional, we also need to manage some state in there, because every component that later uses this custom hook should of course also get that state that's managed by that hook. And it should not have to register that state on its own, because that would of course reduce the reusability of the custom hook.
- Manage all related states.
- So what could we do here to make those values available to the component that will later use this custom hook?
- Well, what can you do in a normal JavaScript function? You can return values so that in the place where you use this hook, you will get these values returned. We can return these values by grouping them into an array or into an object, up to you.
- const { isFetching, error, fetchedData } = useFetch(fetchUserPlaces): We will get those state snapshots that we are returning there grouped into an object. So therefore here we can use object destructuring to get isFetching, error, and of course the fetchedData.
- If the state gets updated in the custom hook, for example, here when we setIsFetching to true, when that happens, the component where your custom hook gets used also gets executed again. So that still works as if you would be managing the state directly inside of the component.
- The idea behind using such a custom hook: The logic for managing those different built-in hooks like useState and useEffect, and for orchestrating this HTTP request, all that logic lifts in a custom hook. And in our Component, we can simply use that custom hook and we get all that behavior, all that functionality in this component without adding all that code here.

### Exposing Nested Functions From The Custom Hook

- The state is managed(setState) in custom hook, but i want to use it in App. We can expose setState from Custom Hooks.
- But you might wonder what happens if you use this useFetch hook in other components as well. If we use it in another component and we then update the state from inside this app component, will that affect those other components: So just as you can use useState in as many components as you want and you get totally independent state snapshots. Every component that uses this hook gets its own independent state snapshots. So changing the state in one component will not affect the state of other components even if they use the same custom hook. Idependent snapshots. The usage of useFetch in one component is totally independent from the usage in another component. We have independent state values created through independent copies of this useFetch hook.

- Using A Custom Hook in Multiple Components: The idea behind creating custom hooks is to get leaner components because you can outsource some state and logic into those custom hooks. But another reason for creating and using custom hooks is of course also that you can share them across components if multiple components have fairly similar logic that can be outsourced.
- Creating Flexible Custom Hooks: Create seperate function. And approach for converting a non-promise feature and API into a promise-based feature. 
