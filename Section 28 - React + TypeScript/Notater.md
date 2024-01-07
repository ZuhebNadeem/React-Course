## REACT + TypeScript

- Builds on JavaScript.

1. What & Why?
2. TypeScript Basics
3. Combining React & TypeScript. (How you can write your react code with typescript)

### What & Why?

- TypeScript is a superset to JavaScript.
- TypeScript adds more features to the JavaScript syntax.
- TypeScript adds strict typing to JavaScript.
- JavaScript knows types.
- JavaScript, is dynamically typed. Which means that function, does not expect any particular types. It just knows that it will receive two parameters, and that's it. So it's not statically typed, the types for this function are not announced ahead of time, instead, it just takes whatever it gets and then tries to execute this code.
- Having static typing could enhance your code and prevent errors. Nothing is telling you, that this function actually wants two numbers, instead of two strings or any values. And that's where TypeScript can help us.
- Can use Type annotations: We can add type annotations here, simply by adding a colon after our parameter, and then adding the type which should be used for this parameter. a: number, b: string.
- So now I am making it clear with TypeScript that here, I actually want two parameters which both should be of type number.
- With TypeScript: We get an error here in my IDE, which tells me that this argument of type string is not assignable to a parameter of type number, pretty helpful. With that, I can catch such an error, such an unintended use of this function before I run and test my code. Allows us to write better code in the end, because we can avoid such errors and we don't have to track them at runtime but we see such errors right when we start writing code.
- Can see the error in the IDE before running, and avoiding typo wrong.

### Installing & Using TypeScript

- TypeScript = Can add types to our programs with it.
- TypeScript Compile: So it's this compilation step which then will warn us of potential code problems if we haven't spotted them in the IDE before, and then it's that compiled code which will run in the browser. Now to invoke this compiler, we need to run this command here `npx tsc`.

### TypeScript Basics

- Any is default, meaning anything is allowed. Should not use that, because then you are not using TypeScript.
- Primitives(string, number boolean): Example => let age: number;
- Working with Array & Object Types:
  - Aray: let hobbies: string[];
  - Object: We are telling TypeScript that only objects that have this kind(defined in object) of type should be storable in that variable. Have to have the same structure when defining it later then.
- Understanding Type Inference: By default, TypeScript tries to infer as many types as possible. So it tries to know which types are used where, without you explicitly stating those types. Example => let course = "React";
- Using Union Types: Sometimes you want to allow multiple, different types. You have more than one type which you want to allow. Example => let courses: string | number = "React";
- Understanding Type Aliases: For removing duplicate type definition. You can define your own base type in which a more complex type definition is stored, and then use that type alias instead of repeating the entire type definitions. Example: <pre> let person: { name: string; age: number }; VS type Person = { name: string; age: number }; let person2: Person; </pre>
- Functions & Function Types + parameters:
  - When we work with types, we don't just use types for the parameters, but also for the return value.
  - TypeScript can infer that the function returns a number because both parameters a and b are of type number, and the + operator implies numeric addition.
  - (): string - can also define it. What type should be returned by the function.
  - Void: It has no return statement. Void is basically comparable to null and undefined. It means that this function never returns. So if I want to work with the returned value from that function, I will work with undefined, which is the special type for the return value of functions that do not explicitly return a value.

### Generics

- TypeScript doesn't recognize that it's an array full of numbers because I've used 'any' as the type. I can't specify that I only want to allow numbers here, as I might want to use this utility function with an array full of strings.
- So, we use 'any,' but at the same time, this removes the TypeScript support we could have gained after calling this function. The updated array lacks proper TypeScript support, as it's inferred to be an array full of any kind of objects or values, rendering it less useful
- Soloution: <T> => We can define a Generic type which will only be available inside of this function. Typically that's called T for type but any identifier of your choices okay.
- But now when we call this function, now TypeScript actually is able to understand that it should look at the concrete values of the arguments here(where you call the function and give parametes).
- TypeScript = Looking at the parameters and defining what to return.

### Working with Props & TypeScript

- Creating a React & TypeScript Project: .tsx file, not .js. Indicates we are using TypeScript. And x because we are using JSX syntacs.
- Working with React Components & TypeScript: Same as JS - create component and include it where you want to.
- Props: What type of props it is , has to be defined. We explicitly set the concrete type for this usage of the generic 'FC' type, specifying props we want to merge, such as 'children'. Maybe interface with type is better then "FC" type.
- When building functional components with React and TypeScript, utilize the 'React.FC' type on your functional component declaration. Use angle brackets to define your custom props – your own prop object type – if your component receives specific custom props. Within the component, you can then use these custom props as needed.
- Through extensive type annotations and class usage, we make it explicit what shape our data and components should have. This clarity empowers developers to maintain clean, well-structured code, reducing the likelihood of component or data misuse. With TypeScript, potential errors can be caught during development, providing warnings in the editor when passing incorrect data or using components incorrectly. This proactive approach minimizes runtime errors during app testing, underscoring the advantages of TypeScript.
- Exercise: const TodoItem: React.FC<{ text: string }> = (props) => {}. That will be a functional component, so we should set this to `React.FC` as a type to make it clear that we'll store a functional component in there.
- Form Submissions In TypeScript Projects: <pre> const submitHandler = (event: React.FormEvent) => {event.preventDefault();}; </pre>

### Working with refs & useRef

- state vs ref: You have two options: use `useState` to listen to every keystroke, or a `Ref` to retrieve user input upon form submission. The choice depends on whether you want to validate with every keystroke or not, and the specific requirements of your use case.
- In TypeScript, with useRef: Explicitly set the concrete type of ref we wanna create in this instance. const todoTextInputRef = useRef<HTMLInputElement>(null);
- ? - Blir en verdi eller null. ! - Er helt sikker på at verdien kommer til å bli satt.
- With a question mark, you're always saying try to get me that value, and if it's null, store null in the constant or wherever I wanna store that value. With the exclamation mark, you're saying I'm certain that here we won't be dealing with null, so therefore, drill into this object, into this property, and give me the actual stored non-null value, and therefore then you will always get that value.

### Working with "Function Props" (Add new TODO)

- Parent and child communication. We need to use state to manage this array so that the App component will rerender when this array changes. This ensures that the Todos component updates accordingly when the array changes.
- That's, of course, a pattern we used a lot in this course. We learned that we can pass references to functions as props to our components.
- I should add `React.FC` here. Then, if we need our own custom props, as we do here, I should embrace the generic nature of this `FC` type to define my concrete prop object definition. This definition will be merged with the base props.

### Managing State & TypeScript

- using useState. Manage this `todos` array with state so that when we change it, this component re-renders, and therefore, these todo items also re-render and are updated.
- const [todos, setTodos] = useState<Todo[]>([]);
- Removing a TODO: Props chain.
- `Bind` is a default method in JavaScript that allows us to pre-configure a function for future execution: onRemoveTodo={props.onRemoveTodo.bind(null, item.id)}
<pre>const TodoItem: React.FC<{
 text: string;
 onRemoveTodo: (event: React.MouseEvent) => void;
 }> = (props) => {}</pre>

### The Context API & TypeScript

- Context provider: Responsible for managing that context state.
- By using ReactNode in React.FC<TodosContextProviderProps>, you explicitly indicate that the component can receive children. This should resolve the TypeScript error.
