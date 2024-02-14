## SECTION 27: REACT PATTERNS & BEST PRACTICES

Exploring advanced react patterns & repeating key best practices:

- Common Patterns & Practices
- Compound COmponents, Render Props & More
- Applied to a demo project

### Compound Components

- Multiple components that dont work standalone, but instead together. They don't really work on their own, so standalone, but instead, only together in conjunction. F.eks. <option> må brukes sammen med <select>.
- And it turns out that we can also build such kinds of components on our own in our React apps and that in certain situations, we also might wanna do that. Work only together.
- Managing Multi-Component State with the Context API: AccordionContext: This is a context object created using React's createContext() function. It allows components to subscribe to context changes.
  useAccordionContext(): This is a custom hook that retrieves the current context value from the nearest AccordionContext.Provider in the component tree. It throws an error if it's called outside of the provider, ensuring that any component using this hook is wrapped in an AccordionContext.Provider.
- Grouping Compound Components: We can make it more obvious because it is a common pattern and a common practice when building such Compound Components to merge all those component identifiers into one object you could say. And it is indeed also quite common to use the main wrapping function object as an object. You can add properties and methods to your function objects. Accordion.Item = AccordionItem; Where AccordionItem is another Component. So now you have to use Accordion.Item with Accordion, not without. Accordion.Item = AccordionItem i komponenten Accordion.jsx + <Accordion.Item></Accordion.Item> også bruke det slik.

### Introducing & Using Render Props

- Passing a function as a value for the children prop.
- Well, the core idea behind this render props pattern is that you pass a function as a value for the children prop or actually for any prop, but it's most commonly done for the children prop.
- So the idea is that you have one component that defines some function, which important, must return something renderable. So a function in a component where that function in the component then returns something renderable, and it's then this function which is passed as a value for the children prop.
- So between those component tags to another component, component two, and that component then returns the result of calling that received function, which is why this function must return something renderable.

### Search

- const searchResults = items.filter((item) =>
  JSON.stringify(item).toLowerCase().includes(searchTerm.toLowerCase())):
- .filter() is a method used on arrays to create a new array with elements that pass the test implemented by the provided function.
- In summary, searchResults will contain all items from the items array whose JSON representation contains the search term, regardless of case.

### Implementing a Search Functionality With Help Of Render Props

 <li key={index}>{children(item)}</li>
- Hence children must be some function to which I can pass the item so that it's then this function that will be executed for every item and that will then return the concrete JSX code that should be rendered for that specific item in that list item, in that SearchableList component.
  <SearchableList items={PLACES}>
   {(item) => <Place item={item} />}
   </SearchableList>
- That's this render props pattern. We're passing a function as a value for the children prop in this case so that the other component, the receiving component, can use that received function, which it received through props to render some content. Hence the name render props.

### Working with Debouncing

- It could become problematic if with every update, we, for example, needed to send a new HTTP request on every keystroke, or if this filtering logic here would be more complex and more performance intensive.
- Debouncing simply is a technique where we don't update the state on every keystroke, but where we instead define some timing threshold where we only update the state if the user stopped typing for a couple of milliseconds, for example.
- So that if the user types an entire word, we're not updating the search results for every character, but only once the word is done, for example.
- Can do it with setTimeout(): Which means I can of course also keep on typing and not get updates for every keystroke.
