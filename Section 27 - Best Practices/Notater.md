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
- Grouping Compound Components: We can make it more obvious because it is a common pattern and a common practice when building such Compound Components to merge all those component identifiers into one object you could say. And it is indeed also quite common to use the main wrapping function object as an object. You can add properties and methods to your function objects.
