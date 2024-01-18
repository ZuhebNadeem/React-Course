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
-
