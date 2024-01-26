## SECTION 18: PRACTICE PROJECT: BUILDING A FOOD ORDER APP

Time to practice: Food order app (Components, state, context, effects, HTTP request & More!)

- Building a Complete Project from the ground up
- Building & configuring components
- Using state & context
- Managing HTTP Requests & Side Effects

1. Add the header component
2. Add the meals-related components & the logic to fetch meals data from a backend
3. Add cart logic (add items to cart, edit cart item) & Checkout page logic.

### Fetching Meals Data (GET HTTP Request)

- Fetch then returns a promise and you can use the "then" method to define a function that will be executed when that promise resolves when you gut back a response.
- Must not convert your React component to a async method, because that is not allowed by React.
- That meals data will not be there initially, we have to get it from backend and it will take time so we will be using useState.
- Where we have a side effect that would cause an infinite loop, we should use the useEffect hook about which you also learned earlier in the course.
- This hook allows us to run side effects after the component rendered, and it also allows us to define a dependencies array that controls when exactly the side effect function will run.

### Forskjelling

- If you wrap a custom component around something, around some text or JSX code, that text or JSX code will be received through that built in children prop.
- And it's therefore this children prop which I also want to use here to output that content which is passed between my button tags between these button tags.
- ...props => A simpler alternative is to use this rest properties syntax here, where you basically look for all other props you might be getting, all other properties that are set on that incoming props object, and you merge them into a new object, a new object called props in my case. And that will then simply be an object that contains all the other props that might have been set here.
- We're collecting all remaining props and we're then spreading those props onto the button element, the built-in button element.

### Cart Context & Reducer

- Add to cart button, and see the carts: Let's make sure that we start managing some cart data whenever this button or this button is clicked.
- Reducer: This action object that will tell this function how to update this state. And here it's quite common to receive an object as a value for action to be precise, an object that also has a type property or some other identifier property.
- updatedItems.splice(existingCartItemIndex, 1): Splice takes an index, in this case the existing cart item index and then the number of items that should be spliced, which here simply means removed. So this will remove one item at this index which simply means it'll remove the item at that index. So that's how we can remove a item if it's the last item in a shopping cart.
- Whenever this cart state(context) changes, this new context will be distributed to all interested components.
- And therefore now these two functions are also part of this context object and can also be accessed from other components in the app and can therefore be triggered from inside those components.
  const cartContext = {
  items: cart.items,
  addItem,
  removeItem,
  };

  return (
  <CartContext.Provider value={cartContext}>{children}</CartContext.Provider>
  );

- Therefore we of course need to get access to that context and we can do that with help of the useContext hook. To use context, you must pass your context object as an identifier: const cartCtx = useContext(CartContext): can now use cartCtx to access the context.
-

### Forskjellig

- React Portal: But we'll always inject the dialogue when it's visible in a specific area of the real DOM that we as a developer control upfront. And I wanna inject it into this another div here.
- This dialogue element when opened programmatically, so not by setting this open prop, automatically displays a backdrop. So a little area behind the overlay that can be used to gray out the other content and to overlay the other content so that we can't interact with it whilst the dialogue is open. And that's why I don't wanna open it by setting the open prop. But why instead I want to open the dialogue programmatically.
- Now one way of achieving this, as you learned earlier in the course, would be to use a forward ref here, so that we can expose some functions from our custom component here to other components and those other components could then call those functions to, for example, open or close this dialogue. And whilst this would work, I'll take a different route here. I'll use use useEffect here also to again practice working with that to in the end, interact with that native dialogue element whenever the open prop value changes.

  useEffect(() => {
  if (open) {
  dialog.current.showModal();
  }
  }, [open]);

- We can use a cleanup function here in useEffect, which will be executed whenever this effect function is about to run again. So whenever the open prop value changes, for example.
- const updatedItems = [...state.items];
  It creates a copy of the current state's items array.

const updatedItem = {
...existingItem,
quantity: existingItem.quantity + 1,
};

- ...existingItem: This uses the spread operator to copy all properties of the existingItem object into the new updatedItem object. This is a concise way of creating a shallow copy of an object.
- quantity: existingItem.quantity + 1: This adds a new property quantity to the updatedItem object. The value of this property is set to one more than the current quantity of the existingItem. In other words, it increments the quantity by 1.
- So, overall, this code creates a new object (updatedItem) that is a copy of an existing item with an increased quantity by 1. It's commonly used in Redux or state management systems to ensure immutability by creating new objects instead of modifying existing ones.

### Form

- {...props} => From outside, and I want to allow myself to use this input in a flexible way and add any Props I want to this input here.
  <Input label="Full Name" type="text" />: Now I'll set the type of that input to text, and thanks to me collecting all Props here and then spreading them onto the input element, that type will be forwarded and will be set on this input here.

- event.preventDefault(): When using a regular button in a regular form, the browser will go ahead and create an HTTP request for you and send it for you. But unfortunately not to the backend we want it to be sent to because the browser doesn't know about that. Instead, the browser would send the request to this development server that's serving this site, so our front end. But this server and this site is not prepared and equipped to handle this request. Therefore, what we need to do is we need to prevent that default. We can do this by calling preventDefault on that standard event object which we automatically receive in our event handling functions. And by calling this method here, preventDefault, we make sure that this request, which otherwise would get created and sent is not getting created and sent. Therefore, now we have a chance to control what should happen when that form is submitted.
- Extracting values from form: Can use useState, useRef or FormData object.
  const fd = new FormData(event.target.value);
- const customerData = Object.fromEntries(fd.entries()): And this will essentially give us an object where we, for example, have an email property with the value entered by the user, and of course key value pairs for all the other input fields as well. And therefore, this is how we can easily extract the data entered by the user.

### POST

- So how can we now send this data along with the cart data to the backend?
- headers: { "Content-Type": "application/json"}: So that the backend understands that we're submitting some data in JSON format, and it should be extracted accordingly.
- Request body: We need to set that request body so that data that should be attached. And as mentioned, that should be in JSON format, and you can easily generate data in that format with the built-in JSON.stringify method, which now takes any standard JavaScript value to convert it to JSON.

### Adding a Custom HTTP Hook & Avoiding Common Errors

- We have to manage some state to reflect those different request states in the UI, because the idea with this custom hook in the end, of course, will be to use it in a component.
- So the initial value of loadedMeals will be undefined until the request is done, but that will take some time and the component function will not wait for the request to finish to do its work. Instead, this JSX code will be parsed and converted to HTML code right away, so to say, and of course it therefore fails to run this code, because loadedMeals, as I just explained, is undefined initially.
- use await: With that we'll instead store the resolved data, and not some promise object.

### HTTP Loading & Error States

- if (isLoading) {
  return <p className="center">Fetching meals...</p>;
  }

if (error) {
return <Error title="Failed to fetch meals" message={error} />;
}

### Finishing Touches

- use my custom useHttp hook: I want to call sendRequest which I got from my custom hook to send that request. So not sending the request immeadtly, but after form is submitted.
-
