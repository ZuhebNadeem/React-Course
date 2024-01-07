## SECTION 4 - REACT ESSENTIALS - DEEP DIVE

- Behind the scenes of JSX
- Structuring Components and State
- Advanced State usage
- Pattern & best practices

### Props and Components

- Don't forget that you can combine explicitly extracted props ({ someProp }), built-in props like children and "rest property" props (...props) in the same component. ...props will take all remaining props, you have not defined explictly in your component.
- Components = Reusable buillding blocks which are used to build the overall app UI.
- Props = Component "attributes" (input data) used to configure components.

### Forskjellig

- JSX = JS syntax extension to describe HTML in JavaScript.
- Updating State Based On Old State Correctly: setIsEditing((prev) => !prev), this function will automatically be called by React and will receive the guranteed latest state value.
- Two-way-binding consists of two key elements: You must listen to changes to the input (and store the new value somewhere) and You must output the stored value in the input
- const copyArray = [...array], Recommended that if your state is an object or array, you update that state in an immutable way, which simply means you create a copy of the old state, so a new object or a new array first, and you then just change that copy instead of that existing object or array. And the reason for that recommendation is that if your state is an object or array you are dealing with a reference value in JavaScript. And therefore if you would be updating it like this you would be updating the old value in-memory immediately, even before this scheduled state update was executed by React. And this can again lead to strange bugs or side effects if you have multiple places in your application that are scheduling state updates for the same state.

### States

- React-managed data which, when changed, causes React to re-execute the related component function.
- We're updating the state, calling this state updating function will then also cause React to re-execute this player component function and it will cause React to reevaluate this JSX code and see if anything changed. And if anything did change, those changes will be reflected to the real DOM and other component functions.
- Remember that state updated are not performed instantly but at some point in the future (when React has time for it).
