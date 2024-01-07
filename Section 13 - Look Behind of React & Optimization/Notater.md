## A LOOK BEHIND THE SCENES OF REACT & OPTIMIZATION TECHNIQUES

#### How does react work behind the scenes

- React: A JS libary for building user interface
- React DOM: Interface to the web. What the users see.
- React cares about:

1. Components: Real DOM (what the users see).
2. Props: Data from parent to component (enable parent child communication).
3. State: Internal Data
4. Context: Component-wide data

- Rereun / reEvalute component: Whenever props, state or context changes components that use this concepts is updated by React.
- If anything changes React will tell React DOM, so it will show new output.

#### Understanding the virtual DOM & DOM updates:

- React DOM recives the difference and then manipulates the real DOM.
- Re-evaluating components !== Re-rendering the DOM:

1. Components re-evaluate whenever props, state or context changes. For every stage change the entire component in which the stage changed, is re-executed, is re-evaluated. If a child-component has props from parent-component, and the props changes in parent-component -> Both child and parent-component will be re-executed.

2. VS Real DOM: Only effects the DOM where the change happens. If we insert a new p-element, it only insert this. Does not update the whole DOM again.

- Virtual DOM: The virtual DOM allows for more efficient updates to the real DOM by reducing the number of direct manipulations needed

#### React Memo

- Preventing Unnecessary Re-Evaluations with React.memo(): The problem is a parent has child that has child that has child. The parent is updated, but with states that does not effect the childs. All the childs will still be re-executed. The child is re-evaluated , although the child did not change anything.

- React memo: React check the new value for all those props and compare it to the previous value those props got.
  And only if the value of a prop changed, the component should be re-executed and re-evaluated.
  And if the parent component changed but the prop values for that component here did not change, component execution will be skipped.

- Why should you then not use react memo in every component: React needs to do two things.
  It needs to store the previous prop values, and it needs to make that comparison.
  And that, of course, also has its own performance cost.
  So React.memo can be a great tool, if you have a huge component tree, with a lot of child components.

#### useCallback()

- useCallback is a hook that allows us to basically store a function(method) across component executions.
  So it allows us to tell React that we wanna save a function and that this function should not be recreated with every execution.
- dependency: If we have a useCallBack that uses a state, we want to pass this state in the dependency. Because with useCallback we're telling React to store that function, and exactly that function somewhere in memory. We generally want to store, but when the state changes, we want to update. React will not re-create it, even when the state changes, if we dont include the state in dependency.

#### useMemo

- Let you store any any kind of data which you want to store, just like useCallback does it for functions.
- If you have a list that is sorted and get sorted every time the child componenet renderes, you might want to use useMemo on the sorted method.
- The React useMemo Hook returns a memoized value. Think of memoization as caching a value so that it does not need to be recalculated.

- useMemo Hook to memoize the expensiveCalculation, sort, and so on functions.
- The useMemo Hook only runs when one of its dependencies update.

- Always have to keep in mind that if you store data with useMemo, it occupies some memory and this storing functionality also takes up some performance.

- The useMemo and useCallback Hooks are similar. The main difference is that useMemo returns a memoized value and useCallback returns a memoized function.

#### State

- When useState is being called, no new state is being created.
- React recognizes that it already has a state for this component, and it instead simply updates that state as needed.
- React will only do that state management and updating. It will never reinitialize the state unless the component was totally removed
  from the DOM in the meantime.
- React schedules a state change. Because of multiple updates can be scheduled at the same time, it is recommended that you use this function form for updating your state(if you depend on the previous state snapshot): setShowParagraph((prevShow) => !prevShow);
