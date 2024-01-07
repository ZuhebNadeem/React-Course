## REACT STATE & WOKRING WITH EVENTS

#### Events:

- Alle ON props (event handlers), wants a function as a value.
  Eks: `<button onClick={clickHandler}>Change Title</button>` .
- Husk: Ikke alltid bruk parantes (clickHandler()) , ellers vil denne klikk funksjonaliteten kjøres når javascript går gjennom kodene.
- Listener to listen for every change, can do that on element with: onChange, onInput, and so on.
- Dont add paranthes on function name , it will get executed
- Listening to a event - event.target.value is always a string
- Storing value, we can use useState.

#### useState(A hook):

- If you have data, that may change, and the changes should be reflected on users page - use useState.
  React will reRendered the page, only on that component that has state.
- const [title, setTitle] = title has the value, and set for updating the value.
- The component will be executed again, when our state changes.
- You can have multiple state, and all these state, will be totally sepereated from each other
- Better with multiple states vs one state as object.
- If your state update , depend on previous state use this: setUserInput((prevState) => {return {..prevstate, newValue}}). Used for objects often.

#### Updating State:

- Updating state, based on older state:
- When updating some state based on its previous value, you should use pass a function to the state updating function.
- This function automatically receives the previous value and should return the new value: Eks:
- `const countUpdate = () => { setCounter(prevCounter => prevCounter+1);}`
- useState returns an array with exactly two elements - the second element is always a function which you can call to set a new value for your state. Calling that function will then also trigger React to re-evaluate the component.

#### Child to Parent Communication(Bottom up):

- `<Parent> <Child onSaveExpenseData={saveExpenseDataHandler} /> </Parent>`
- Child har verdien onSaveExpenseData, kalles på med prop foran. I parent ligger saveExpenseDateHandler.
- Når onSaveExpenseData i Child blir triggeret blir saveExpenseDataHandler triggeret i Parent.
