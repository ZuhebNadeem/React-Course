## SECTION 3: REACT ESSENTIALS - COMPONENTS, JSX, PROPS, STATE & MORE

What you will learn:

- Components
- JSX
- Props
- Using, sharing & outputting data
- Handling Use Events
- State

### JSX & React Components

- HTML, CSS, JS in a component. Reusable components.
- Function name must start with an uppercase character. Custom Components are regular JavaScript function, that starts with an uppercase character and returns some JSX code.
- Uppercase for not clashing with html elements, like header, image and so on.
- Using & Outputting Dynamic Content: Use {} for values we have defined. Remember that you can output dynamic data (including variables, constants etc) via curly braces: { someData }

### Props (Making Components Reusable with Props)

- React allows you to pass data to components via a concept called "Props", and then use the data in there. Props are essentially custom attributes that can be set on components.
- You can also pass multiple props to a component and then, in the component function, group them into a single object via JavaScript's "Rest Property" syntax.
- Component Composition: The special "children" Prop, {props.children}. `children` prop here refers to the content between your component tags. It contains whatever content you place between your component tags, whether it's simple text, or a complex JSX structure if necessary.
- <TabButton>Components</TabButton>: The content between component opening and closing tags is used as a value for the special "children" prop. The children prop is a special prop that's automatically provided to every component function. It contains the wrapped content as a value.

I.e., if a component is used like this:

<CoreConcept
  title={CORE_CONCEPTS[0].title}
  description={CORE_CONCEPTS[0].description}  
  image={CORE_CONCEPTS[0].image} />
You could group the received props into a single object like this:

export default function CoreConcept({ ...concept }) {
// ...concept groups multiple values into a single object
// Use concept.title, concept.description etc.
// Or destructure the concept object: const { title, description, image } = concept; Used to destructure the first parameter of this function, so the props parameter in this case. And object destructuring in JavaScript simply means that we can target the different properties of the incoming object by name.
}

### Reacting to Events (Event Handling)

- Reacting to Events: with onClick
- Passing Functions as Values to Props: We're passing a pointer at handleSelect function. We're passing the function as a value you could say, to the onSelect prop. And in our custom Component, we're then in the end forwarding, that function to the onClick prop. And therefore when this button is clicked, ultimately it's this handle select function. 

### State

- By default, react components execute only once. You have to "tell" react if a component should be executed again. Code must get reevaluated by React in order for the ui to be updated.
- useState - set tells React that the this component function here must be executed again. In order to change values & re-render the UI upon changes, you must use "state".
- The component to which the state belongs and its child and descendent components will be re-evaluated as state changes.
