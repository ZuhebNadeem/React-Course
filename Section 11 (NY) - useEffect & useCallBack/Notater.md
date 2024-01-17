## SECTION 11: HANDLING SIDE EFFECTS & WORKING WITH THE USEEFFECT() HOOK

Dealing with Side Effects (Keeping the UI synchronized)

- Understanding Side Effects & useEffect()
- useEffects & Dependencies
- When NOT to use useEffect()

### Side Effect

- Side effects are "tasks" that dont impact the current component render cycle. So whenever you have a task that must be performed but that does not directly and instantly impact the current component render cycle.
- Main job is to render JSX code. Fetch users location is not direct related.
- An infinite loop: And that's where the useEffect hook comes into play because that hook allows us to solve that problem.
- When we talk about side effects in the context of React.js, we are referring to anything that is outside the scope of React
- So calling any native Web APIs will be considered as a side effect as it’s not within the React universe
- Making a HTTPS request to an external API is another example of a side effect and the list goes on…

### UseEffect

Using useEffect for Handling (Some) Side Effects:

- usEffect to handle side effect better.
- You're not allowed to use React hooks in nested functions, if statements or anything like that. They must be used directly in the root level of your component function,
- The functions inside useEffect is a side effect = Data fetching, setting up a subscription, and manually changing the DOM in React components are all examples of side effects.
- useEffect will be executed by React after every component execution.
- After JSX code is returned, then the useEffect is returned.
- Instead, it's only after the app component function execution finished. So, after this JSX code here has been returned. That this side effect function you passed to useEffect will be executed by React. So, React will execute that after the component function is done executing. Now, if you then update the state here with useState, the component function executes again as you learned. And in theory this effect function would execute again. But that's where this dependencies[] array comes into play. React will actually take a look at the dependencies specified there. And it will only execute this effect function again. If the dependency values changed.
- Empty dependency []: Instead, it only executes it once after this app component function was executed for the first time. But then this effect function is never executed again.
- The useEffect hook in React runs after rendering but does not guarantee that rendering is completed before its execution.
- useEffect hook. It takes two arguments:
  A function that contains the code you want to run as the effect.
  An optional array of dependencies (dependencies are variables or values that, when changed, will trigger the effect to run). If you don’t want the product to depend on anything, you can pass an empty array ([]).

Not All Side Effects Need useEffect + useEffect Not Needed: Another Example: (Les mer på dette)

- Fetching the user's location, and store data in the browser's storage is not directly related to rendering this JSX code.
- Not every side effect needs useEffect like localStorage example.
- You basically only need the useEffect hook to prevent infinite loops or if you have code that can only run after the component function executed at least once.
- [] : this effect function here will only run once after the app component function ran. And therefore will not enter an infinite loop, will fetch our data and populate our box with that fetched data.
- dont need useEffect when: runs synchronously. Which means it basically finishes instantly. But for local storage, that's not the case. We got no callback function or promise or anything like that here. Instead retrieving the data like this is instant. And therefore this app component function does not finish its execution cycle before fetching that data is done. We can therefore simply get rid of useEffect. This works because this code runs synchronously and does not take some time to finish, during which the app component function execution would finish.

Using useEffect for Syncing With Browser APIs: useEffect can help you synchronize prop values or state values to DOM APIs like this dialog showModal, because the effect function you define with useEffect will be executed right after the component function. And since it executes after the component function and not before it or at the same time, this connection between the ref and the dialog will be established at this point of time.

Understanding Effect Dependencies []:

- Effect dependencies are in the end simply prop or state values that are used inside of this effect function.
- So put in our words, any value that causes the component function to execute again, which is the case in the end for props and state, any such value is a dependency if it's used inside of useEffect.
- Would cause the component function to execute again: should run whenever the component function executed if one of its dependencies changed.
- When the value of dependency changes, it reruns.

Introducing useEffect's Cleanup Function:

- Instead it was started and it keeps on going behind the scenes, independent from the question whether this component is currently visible or not.
- The problem is: cleaning it up, getting rid of it, when the component dissapear.
- Because when using useEffect, you cannot just define this effect function, but also a cleanup function that should be executed right before this effect function runs again. OR right before this component dismounts, so, before it's removed from the DOM.
- And you define such a cleanup function by returning it from inside the effect function.
- We have to return this cleanup function that will be executed by React, and we should then store a reference to this interval in a constant or variable.
- The cleanup function being needed to avoid ongoing processes behind the scenes which aren't needed anymore but which, of course, would cost performance.

The Problem with Object & Function Dependencies:

- Adding object or functions as dependency is a problem, can create a infinite loop.
- Dependency would be a number or a string, the effect function would run again if that number or string changed.
- handleRemovePlace are recreated whenever the app component function is executed again.
- objects and functions are not treated as equal, this onConfirmed dependency of this effect function will be different between render cycles.
- React determines that these two are different, and therefore, React would go ahead and re-execute this component function even though technically, this dependency didn't change.
- use useCallBack when adding functions as dependencies to useEffect.

### UseCallBack

- React offers a hook which you can use to make sure that this function is not recreated all the time.
- useCallBack: Wrap it around a function. Pass the funciton that should be wrapped as a first argument, and second argument is dependency ([]).
- it's not recreated whenever this surrounding component function is executed again.
- So with useCallback, React makes sure that this inner-function is not recreated. Instead, it stores it internally in memory and reuses that stored function whenever the component function executes again.
- You should useCallback when passing functions as dependencies to useEffect. SHOULD I?
- []: you should add any prop or state values that are used inside of this wrapped function. setState and localstorage dont need to be added, props or state values. Or any other values that in the end depdend on state values, just as with useEffect.

### Optimizing State Updates

- Problem: React has to reevaluate this entire JSX code every 10 secound.
- Soloution: It would be better to outsource this progress indicator and this related state logic and useEffect hook into a separate component so that it's then just this one single component that should be re-executed all the time.
- And now with that, it's not the entire delete confirmation component that will be re-executed every 10 milliseconds, but it's, instead, inside of the progress bar component that this computation will take place. And this is an optimization you might wanna consider to avoid unnecessary computations.

SPM:

- Do i need to include allt he dependencies everytime []? Når bør du og når bør du ikke inkludere.
- Når ikke bruke usecallBack? Inne i samme fil, var det ikke det jeg fikk forslag om?
- You should useCallback when passing functions as dependencies to useEffect. SHOULD I?
- Compare useCallback with useEffect.
