## SECTION 28 - REPLACING REDUX WITH REACT HOOKS

A totally optional of reducing your dependencies:

- Redux, application-wide state management system, with React's Context API and React Hooks.
- A bit deeper into React's Context API and React Hooks,

### Why You Would Replace Redux

- Redux: I use Redux here because we need to state in two different pages and that would be harder to do with props only.
- Dont want a third party, want only react.
- I will now show you two different approaches of managing your state with react-only tools. One of those approaches is a good one, the other one is not that great, at least, not for all use-cases. And I will show both, and I will explain when to use which.

### Alternative: Using the Context API

- We basically now have our store here in the context folder in the "productsContext" file here and we're using React only features to pass that data around and to change it from anywhere and to read it from anywhere.
- By utilizing useContext hook, the function is accessed and utilized in different components for state management.
- The context is great for low-frequency updates but not for high-frequency ones. That means if you have something which changes rarely.
- Every component that uses use context will rebuild, will re-render when you switch something in that context. No matter if it's directly effected or not.

### Custom Hook as a Store

- Now I will build my own global state management store and solution with just JavaScript react and react hooks and nothing else. I'll now show you a solution of managing state globally with Justwell, React and JavaScript.
- UseState allows us to manage a state and whenever we update that state any component that uses useState will re render. And you also learned in the react hook section that if a component uses a custom hook, and that custom hook uses useState, the component that uses the custom hook will re render when you state in that custom hook will trigger a re render.
- The idea is that we could share logic but not data, now will share logic and data by managing the data outside of the hook because inside of the hook it would not be shared. It would be inclusive to each component. Each component would get it's own data. But managing it outside of the hook every file imports this file or something from that file gets the same shared data.
- Now I want to add this function to my listeners array because listeners should be an array full of functions which I can call to update all components that are using my hook. So that I have a list of listeners, a list of components are interested in updates to my global stateThat means that every component that uses my custom hook will get its own setState function which is then added to the shared listeners array.
- SO, now we're adding a setState function to our listeners for a component that uses my custom hook when that component mounts and by removing it when it unmounts.
- My idea is that we can later define concrete usages of our store with their own actions and therefore such actions will soon be registered here in this actions object.
- So, actions should be an object where we have keys which match my identifier here and where the value then is a concrete function, which is called by me adding parentheses here.
- Using the Custom Store: 
