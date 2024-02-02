## SECTION 13: A LOOK BEHIND THE SCENES OF REACT & OPTIMIZATION TECHNIQUES

Behind the scenes (Understanding & Optimizing React):

- How React updates the DOM (how it executes your component functions)
- How you can use that knowledge to avoid unnecessary updates.
- A closer look at keys
- State Scheduling & State Batching

### How React Works Behind The Scenes

- How does react update the dom: When there is a change in a component, React immediately updates the Virtual DOM tree. After it updates, React compares the new tree with the former tree in a process called 'diffing'. After identifying the changed tree, React updates the objects that have been changed in the Real DOM.
- Every component function must return something that can be rendered, typically JSX code.
- React executes component functions from top to bottom.
- React devtools profiler: Shows you the order in which component functions were executed. And you also get a relation between component functions. You can also see which components that did not render, when you clicked a button. We can see which components were executed again and how they're related. Can also see why they where executed.
- React executing this counter component function again has no impact on the parent component, the app component.
- It does have an impact on the child components though, all these custom component functions are executed again, and they do receive those prop values again.
- When Parent componet is executed all child, and theres child component is executed again.

### Avoiding Component Function Executions with memo()

- memo: You can wrap around your component functions so to say, that will prevent unnecessary component function executions.
- memo compares prop values. With memo this counter or component function would only be re executed when prop changes. React will look at old props and new props, and if changed it will renderer the component again. Memo only prevents function executions that are triggered by the parent component, so the app component.
- If props equal = Counter component function will not execute. Not equal = Counter component function will execute.
- Ingen grunn til at den blir oppdatert, når props ikke har blitt endret. Vi har samme resultat for komponent enda, som før.
- Dont overuse memo: Use it as high up in the componet tree as possible. Checking props before every execution with memo() cost performance, Dont wrap it around all your components - it wil just add a lof of unnecessary checks. And if you would wrap memo around all your components that would simply mean that React always has to check the props before it executes the component function. Dont use it on components where props will change frequently, memo() would just perform a meaningless check in such cases (which cost performance).
- So where this comparison almost always yields the result that the component function should be executed because then you paid the performance price for this check just to get the same result as you would get without memo that the component function is executed.

- Avoiding Component Function Executions with Clever Structuring: We could put this into a separate component, and then this state that changes on every keystroke would also live in that separate component and would not affect this app component. And by doing that we now make sure that this state that does change on every keystroke lives in this separate component. And therefore causes this component function to be executed again. But the app component function will not execute on every keystroke in this 'ConfigureCounter' component because, as I mentioned before, state changes and re-executions of child components don't trigger parent component executions.

### Understanding the useCallback() Hook

- Functions inside component, they will technically be recreated every time this component function executes. So every this state changes. The component function as a value, as an object in JavaScript is recreated. And it will be a different object in memory than before for the last execution of the counter component function and therefore it technically is a new prop value.
- Now this recreation here can be prevented with help of useCallback: This hook can be used to avoid the recreation of a function and if you have a function as a dependency of useEffect. And it's also needed in conjunction with memo to avoid unnecessary re‐executions.
- []: You would list all props or state or context values you would be using inside of this function because if one of those values changed, a new function would have to be created so that the latest value is used in that function.

### Understanding the useMemo() Hook

- A problem: That performs a rather complex and performance intensive calculation. Re-executing all this code all the time, even though it will produce the same result as before is then not very efficient.
- useMemo: Want to prevent the execution of normal functions that are called inside of component functions, unless their input changed.
- memo is wrapped around component functions, useMemo is wrapped around normal functions that are executed in component functions to prevent their execution. And useMemo should really only be used if you have a complex calculation that you want to prevent.
- And the idea behind useMemo is now that react will now execute this function, which you pass to useMemo. And it will then store the result of this execution, so the result of calling isPrime. And it will only re-execute this function if one of those dependencies here changed. So if you have an empty dependencies array this will never re-execute, because there are no dependencies that could change. I should add initial count as a dependency because that is used as a input by isPrime.
- Not use it: You should not start wrapping it around all your functions, because just like Memo, of course it does need to perform this extra dependency value comparison. And if you have a function that for example simply needs to be executed on basically every component function, re-execution. Adding this extra check doesn't make any sense and instead just cost extra performance.

### React Uses A Virtual DOM - Time To Explore It!

- So just because a function is executed again, does not mean that all the JSX code that's produced by that component function is reinserted in the DOM. The old code is not thrown away and replaced by new HTML code.
- And that's the case because React works with a so-called virtual DOM for finding out which parts of the actual DOM should be updated. And it's using this virtual DOM because working with such a virtual DOM, which lives only in memory is faster than working with that real DOM here.
- React checks for necessary DOM updates via a "Virtual DOM". It creates & compares virutal DOM snapshots to find out which parts of the rendered UI need to be updated.
- And React derives the updated HTML code. And it then compares that code with the old code, you could say. Still only virtually, it does not compare anything with the real DOM, it just compares this new virtual DOM snapshot with the old virtual DOM. And of course, it then quickly finds out which parts changed.
- Identify & Apply changes to the "Real DOM".
- Just because a component function executes and it's JSX code therefore is evaluated, does not mean that this code is inserted or updated in the real DOM, because all those real DOM operations are quite performance intensive and therefore, React does not change the real DOM all the time. Instead, it just creates these snapshots, compares them and only makes the necessary changes to get to the target result.

### Why Keys Matter When Managing State!

- The state is not shared between same components. State is scoped to a component. And if you use the same component function to create multiple component instances based on that function every instance has its own isolated state.
- Wrong item is selected, when clicked and updated.
- Instead, state is also tracked by position by React.
- State belongs to the position as well as the component type.
- if you have sibling components that are of the same type and the number or position of those components may change.
- index will be the same. Should try to use a value that is connected to the map, en unik ID f.eks. id'en til objektet som ikke vil bytte verdi. Index vil bytte verdi.
- And that's why this key here matters because it allows React to clearly identify a component if there is a dynamic list of similar components. And this then makes sure in this case here, for example, that the state moves together with this component instance.
- Key making sure that the state doesn't jump around.
- And without key: Alt i lista blir påvirket som kan se i devtool: You'll see that as I change it it's now only parts of the list that are updated and the other elements are not updated, are not flashing. Instead it's really just the first element that is updated here. Part of the list is updated, not everyone.
- With key: Able to reuse those old DOM elements and instead of recreating them, it just inserts a new element in front of them.
- Using Keys For Resetting Components: Therefore, a better way of forcing a component functional reset, is to use a key on the component. Whenever the key value changes, React will basically throw away the old component instance. It will destroy it and recreate it. Use if you have some state that may change in parent component, that should then lead to some child component, being reset.

### State Scheduling & Batching

- setState: the state update will be scheduled by React. It will not be executed instantly.
- Instead, this will trigger a new component function execution and the new state will be available the next time this executes.
- State Batching: React performs state batching, which simply means that multiple state updates (setState) that are triggered from the same function, are batched together and will only lead to one component function execution.
