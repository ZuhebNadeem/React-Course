## SECTION 8 - WORKING WITH REFS & PORTALS

Avdanced DOM Access & Value Management:

- Accessing DOM Elements with Refs
- Managing Values with Refs
- ForwardRef
- Exposing API functions from Components
- Detaching DOM rendering from JSX structue with Portals

### Refs

- A special JSX element called "React Fragment". It can be used as a wrapper to ensure that there's only one root JSX element whilst at the same time not rendering any DOM element.
- Component working with DOM can be simpliefied using Refs, for getting and storing values back to the DOM.
- Introducing Refs: Connecting & Accessing HTML Elements via Refs:
  - Ref is managed by react in a special way.
  - can connect them with html, with ref property.
  - playerName.current.value the actual value is stored. setEnteredPlayerName(playerName.current.value);
  - You just wanna read a value from an input field, for example, it can really save you a lot of code and lead to leaner Components.
- Manipulating the DOM via Refs: playerName.curent.value = '', to set it empty. Violating that React should handle it. It is okay here, but remember it. Be careful to read and manipulate data.
- Inside that function, the filePicker ref is then used to get access to the file picker element's underlying JS object. This is achieved by accessing the current property on the filePicker ref. This is necessary because refs always are objects with a current property (which then holds the actual value assigned to the ref).

### Refs vs State Values

- Why dont we use the value from useRef in the JSX code directly, not just in ref? Because it does not work.
- The value is undefined. Because in the first render playerName.current will be undefined. The connection to the input does not exists yet.
- Whenever a ref changes, the component does not re-render. Whenever you update state by calling that state updating function the component function will be re-executed. And for refs, that's simply not the case.
- State: Causes component re-evaluation (re-execution) when changed. Should be used for values that are directly reflected in the UI. should not be used for "behind the scenes" values that have no direct UI impact.
- Refs: Do not cause component re-evaluation when ref is changed. Can be used to gain direct DOM element acess (-> great for reading values or accessing certain browser APIs)

### Using Refs for More Than "DOM Element Connections"

- If you have the value outside of the component, the value will be the same for every time the component is called.
- Ref can be used to connenct to HTML elements. Can also be used to manage any kind of value.
- And now since this is defined inside of the component function, it will be component instance specific. Every component instance of this TimerChallenge component will get its own timer ref that works totally independent from the other refs that belong to the other instances of that component.
- But at the same time, unlike variables defined in component functions, this ref will not be reset or cleared when this component re-executes. Instead, just as with state values, React will store these timer values behind the scenes and make sure that they don't get lost as this component function re-executes.
- Like state values, the value here is not lost when this component function re-executes. But unlike state, setting this value also doesn't cause this component function to execute again.
- And that's therefore another use case for refs, if you have a value that must be managed but that isn't really a state because that timer itself has no direct impact on the UI. We only care about whether a timer was started, but we, for example, don't wanna update the UI when we stop the timer here. Nothing changes here.
- I just clear the timer but I don't wanna trigger a UI update. So if you have cases like this where you have a value that doesn't really impact the UI, at least not directly, and you still need to manage it such that it's not reset when the component is re-executed, then you might have a great use case for a ref.
- In order to stop timers from a different place than where they were started, you must store & use the timer "reference" returned by setTimeout
- To stop the timer from inside handleStopWorkout, a timer reference (which is returned automatically by setTimeout) must be stored and used with clearTimeout (a built-in function that stops a given timer).
- This timer reference should not be stored in a standard variable defined inside the component function since that variable would be overwritten every time the component function is re-executed (e.g., because the parent component is re-executed).
- It should also not be stored in a variable defined outside of the component function since that variable would be shared across all Workout component instances (i.e., stopping a timer from inside the "Pushups" instance could then stop the timer for "Squats" instance etc).
- Therefore, using a "ref" via React's useRef() Hook is the solution! Because "refs" are not re-created when the component function is executed again. And they're also not shared across component instances.
- Important: The timer reference is stored inside of timer.current since React "refs" always are objects with a current property which should hold the actual ref value.

### Forwarding Refs to Custom Components (forwardRef)

- A popup. A result modal, show dialog when the game is over. <dialog> <form method="dialog">. So how can we reach out to this dialog from TimerChallenge with help of a ref?
- The problem is that we can't forward a ref to another component and then to an element in that component.
- Instead, if we wanna pass a ref from one component to another component so that we can use it in that other component, we have to use a special function provided by React: forwardRef
- It forwards a ref from one component to another so that ref can then be used in that other component.
- Now to use this forwardRef function, you have to wrap it around your component function. const ResultModal = forwardRef(function ResultModal({ result, targetTime, ref }) {})
- Mowe this component function will receive a second parameter, a ref parameter. And that's only the case because we wrapped this component function here with forwardRef.
- And this ref will now be the ref that we set with help of the ref prop on our component.
- Forward a ref from a component to another component.

### Exercise ref and forwardRef

- You can destructure incoming props and also collect remaining props into a combined props object (via JavaScript's special ...props syntax).
- You can "spread" object key-value pairs as prop key-value pairs onto a component via the special {...props} syntax
- Keep in mind that you can't accept and use the special ref prop like other props.
- Instead you have to use a special function offered by React to "wrap" a component that should be able to accept that special ref prop.
- forwardRef, since the special ref prop can not be accepted or destructured like those other props.
- const Input = forwardRef(function Input({label, ...props}, ref) {})

### Exposing Component APIs via the useImperativeHandle Hook

- Problem: Hva om noe endrer dialog til div, da kan du ikke lenger kalle på showModal. Så for å unngå bugs andre utviklere kan lage.
- useImperativeHandle: You can call this hook in this component function here to define properties and methods that should be accessible on this component here from outside this component.
- Now, useImperativeHandle needs two arguments and the first one must be this ref which you get from forwardRef.
- So useImperativeHandle is really meant to work together with forwardRef.
- The second value must be a function that then returns an object which groups all the properties and methods that should be exposed by this component to other components. Method that will soon be callable from outside this component.
- This Hook allows you (= the developer) to expose an API (a collection of methods) from a component to other components.
- This useImperativeHandle Hook needs a (forwarded) ref (coming from the component that wants to access the exposed API) as a first input value.
- As a second argument, it expects to get a function that must return an object that contains all methods that should be exposed.

const dialog = useRef();

useImperativeHandle(ref, () => {
return {
open() {
dialog.current.showModal();
},
};
});

### Introducing & Understanding "Portals"

- Visually it works, but technically the modal should be outside the div. Have the modal on higher level. 
- Will be helpful on accessibility. 
- Is used to create such a portal and the idea behind a portal is really just to kind of teleport this HTML code that will be rendered by this component into a different place in the DOM.
- To achieve this, you simply have to wrap this JSX code that should be teleported away with createPortal. 
- Then createPortal takes a second argument that comes after this JSX code. So the first argument is this JSX code. The second argument for createPortal then is an HTML element to which this code should be teleported. So where this code should be rendered in the end.
- And that should be a div that exist in your index.html file. 
- Used where you have some JSX code that should actually not be rendered in the place where you are using it in your app, but somewhere else in your document.
- You can "move" the rendered JSX code of a component to a different place in the DOM with help of a special function exposed by React's "DOM" library (react-dom).
- That special function needs the to-be-moved JSX code as a first argument and the DOM element into which it should be injected as a second argument.