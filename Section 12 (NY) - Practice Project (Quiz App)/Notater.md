### SECTION 12: PRACTICE PROJECT: BUILDING A QUIZ APP

Working with Effects (Practice & Dive Deeper):

- Apply your knowledge.
- Dealing with effect dependencies & cleanup
- Combining Effects with Other React Concepts.

### Different

- When working with React, you typically want to manage as little state as possible and derive as much state as possible instead.
- () => will not be executed immediately when this code here is parsed, but instead still only when the button is clicked, because it's then this outer function that will be invoked, and in there, our custom function execution here will then be executed.
- Dont loose any old state. So that I don't edit the original array which I wanna keep
  setUserAnswers((prevUserAnswers) => {
  return [...prevUserAnswers, selectedAnswer];
  });

- Limited time for answering (Displaying and managing progress bar): We should move this setInterval code into useEffect to make sure that this is not re executed all the time, but instead only when those dependencies change. And in here, we don't have any dependencies that would need to be added here, because you basically only need to add props and state values, and we're using neither of those in this effect function.
- Props / state used in useEffect, should also be in the dependency to make sure that effect function gets re-execute: because of the parent component should decide that the question timerTimeout(prop) should change, we, of course, also wanna reset the timer and set it again.
- React's StrictMode turned on in main JSX. Now during development, and only there, this StrictMode will actually execute every component function twice, which is done to help you catch certain errors in your app. Because in theory, your app should work in exactly the same way, no matter if a component function gets executed once when being rendered to the screen or 100 times. StrictMode helps us identify that we have a bug.
- And you already learned that you should use this key when outputting list data, because there this key helps React identify those different list items and it helps React manage that list efficiently behind the scenes, so to say. But the key prop also has another purpose. Whenever it changes on a component, even if that component is not part of a list, whenever it changes React will destroy the old component instance and create a new one. So it will unmount and remount it basically. And that's exactly what we need here, because I wanna recreate this question timer component whenever we switch to a new question.

- It is typically considered a good practice to avoid the usage of use effect if it's possible.
- useRef: will not change if the component function is executed again. You can use refs for managing values that are stored and managed independently from the component function lifecycle to which they belong.
- We can use the key prop to force React to destroy and recreate a component.
- Adding components does not just help with keeping your code manageable, but can also help you solve problems by splitting or combining logic that might otherwise interfere.

-
