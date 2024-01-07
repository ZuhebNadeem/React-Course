## AN ALTERNATIVE WAY OF BUILDING COMPONENTS: CLASS-BASED COMPONENTS

- Components can also be defined as JS classes where a render() method defines the to-be-rendered output. Before return , you use render().
- Can do everything in class-based component, that you can do in functional components.

- State always is an object. Have to group all states. Should always be: `this.state = {}`
- Use: this.state , this.props, `<button onClick={this.toggleUsersHandler.bind(this)}>`

- useContext(): static contextType = UsersContext; and then this.context.value
- Use Class based when you are building error boundaries else functional components.

#### Lifecycle:

- Class-based components can´t use react hooks, but component lifecycle.
- componentDidMount = useEffect.
- componentDidUpdate: This method will be called automatically by React, whenever this component is re-evaluated because it's state changed.

#### Error boundaries:

- By default, if your application throws an error during rendering, React will remove its UI from the screen. To prevent this, you can wrap a part of your UI into an error boundary. An error boundary is a special component that lets you display some fallback UI instead of the part that crashed—for example, an error message.
- F.eks. med: throw new Error("No users provide!");
- We dont want the whole application to crash.
- We use try and catch in JavaScript, but will not work with handling it in Parent-component.
- componentDidCatch: The componentDidCatch lifecycle method can be added to any class-based component, and whenever you do add it to a class-based component, it makes that class-based component an error boundary.
- Cant add it to functional component.
- Will be triggered whenever one of the child components, throws or generate a error.
- The idea behind error boundaries really is that you can ensure that not your entire application crashes if something goes wrong, but that instead you can catch those errors and then handle them in an elegant way, just as you would do it with try catch in regular JavaScript.

- For error boundaries, if you add them, you need class-based components. This is currently not possible with functional components.
