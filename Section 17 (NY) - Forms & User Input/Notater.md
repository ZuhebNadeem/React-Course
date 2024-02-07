## SECTION 17: WORKING WITH FORMS & USER INPUT

- What's difficult about forms?
- Handling form submission & validating user input
- Using bult-in form features
- Bulding Custom Solutions

### Handling Form Submission

- Form Submission(Easy) & Input Validation(Tricky - when should you validate) is the main thing you want to do with form.
- Get the data entered by user: And this is all happening because I am having a button here inside of a form element. And the default browser behavior for buttons in form elements is that those buttons will submit the form and technically that means that an HTTP request is created and is sent to the server that's serving the website. This is the default built-in behavior. And this is the default behavior because in many non-React apps, you indeed have a full stack application where every page is rendered by the server and sent to the client thereafter and where form submissions therefore should be sent back to the server so that they can be handled there. So onSubmit with event.preventDefault or if you set the type to "button" on a button in a form, that button will not submit the form.
- Extracting values from form: Can use useState, useRef or FormData object.

### Managing & Getting User Input via State & Generic Handlers

- using useState to set and retrive data. Now, we just also wanna feed that value back into the input by setting the value prop and by setting it equal to our state value.
- But have one useState for each input field would be to mutch on a big form. Therefor we should be making one useState.

`const [enteredValues, setEnteredValues] = useState({
  email: "",
  password: "",
});`

`const handleInputChange = (identifier, value) => {
    setEnteredValues((prevValues) => ({
      //Your existing key value pairs by using the spread operator because I only wanna update one of these two fields and of course, the other field with its current value should not be lost.
      ...prevValues,
      [identifier]: value,
    }));
  };`

### Getting User Input via Refs

- So two refs like this, and then connect those ref values to those input fields by adding the special ref prop which can be set on all HTML elements. So which is supported by React on all elements.
- ref = {email}: Now by setting the ref prop here, connection will be established between this DOM element, so this input element here and this ref. And you can use this connection.
- const enteredEmail = email.current.value: You can use it to get the entered email by simply accessing email.current because you always need to access the current property on your ref objects because it's this current property which will hold the actual connected value. The value will be this input DOM element object that is being stored here, you can access a value property on that object because every input DOM element object will have such a value property.
- Less code then useState, onchange not needed. Resetting values is not recommended. Many refs if you have mutiple input elements.

### Getting Values via FormData & Native Browse APIs

- To get hold of the different values entered into a form: const fd = new FormData(event.target.value);
- All your fields, must have name attribute.
- A common pattern or trick that's often used to quickly get hold of all the entered values and group them together into an object is to use the built-in Object class, which is also provided by the browser, and call the fromEntries static method on that class and pass the FormData object to it. const data = Object.fromEntries(fd.entries());
- Array of input fields. And this will essentially give us an object where we have key value pairs for all the other input fields. And therefore, this is how we can easily extract the data entered by the user.
- const acquisitionChannel = fd.getAll("acquisition"); Get values where it is checkbox, where you can choose multiple values.
- Resetting Forms: type="reset". Button in form, where you want to reset. Or: event.target.reset();

### Validating Input Upon Lost Focus (Blur)

- Validating Input on Every Keystroke via State: On other methods we have data when submitted, only with useState we can have input on every keystroke. Give the user a chance before showing error messages: Errors is showing, but to early. If we validate on every keystroe, errors may be shown too early.
- You can validate on lost focus -> errors may be shown too long.
- onBlur: when input loses focus.
- Can use useState to check if the input loses focus, and set it from false to true.
- And indeed, combining validation on every keystroke with validation on lost focus and resetting that focus state whenever the user starts typing again can be a good pattern for validating user input. But it's not the only way of validating input. You can also validate upon form submission.

### Validating Input Upon Form Submission

- If you want to validate on every keystroke, use useState. If you want to validate when the user submits the form, you can use refs (with some extra states).
- So with that, I'm now validating the input when the form is submitted and we can now use this state, which is only updated in that case if invalid data has been submitted. We can use this state to again show an error message here.
- Validating on submission definitely takes a bit less code than validating on every keystroke and combining that with the focus state of the input element. But you, of course, are able to give the user a more direct feedback if you are using this keystroke focus-based approach. Nonetheless, validating upon submission is, of course, also totally fine and can be the experience you wanna provide to your users. Maybe both.
- Adding submission-based validation is always a good idea even if you are already validating the user input on every keystroke. And in the next lecture, I'll show you an even easier way of validating inputs upon form submission.

### Validating Input via Built-in Validation Props

- Before submitting data to the server, it is important to ensure all required form controls are filled out, in the correct format. This is called client-side form validation, and helps ensure data submitted matches the requirements set forth in the various form controls.
- required: Specifies whether a form field needs to be filled in before the form can be submitted. Will not let this input field be empty if it´s submitted.
- minlength and maxlength: Specifies the minimum and maximum length of textual data (strings). Define a expected length of the entered value.
- min and max: Specifies the minimum and maximum values of numerical input types.
- type: Specifies whether the data needs to be a number, an email address, or some other specific preset type.
- pattern: Specifies a regular expression that defines a pattern the entered data needs to follow.
- And therefore, with that, we are forced to enter values in all these input fields or we get an error message otherwise.
- You are not limited to the built-in validation features just because you're also using those, but you can instead also add your own custom validation logic to this form.

### Building & Using a Reusable Input Component

- Bulding a input component that can be used over again.
- I'm not explicitly pulling out type and name here. Instead, I'm just gathering and spreading remaining props, and that's how type and name will end up on that wrapped input in my own input component.
  <Input label="Email" id="email" type="email" name="email" /> => export default function Input({ label, id, error, ...props }) => <input id={id} {...props} />
- We have made a reusable input component.
- Outsourcing Validation Logic: You might want to make that validation logic code reusable as well.

### Creating a Custom useInput Hook

- We need a custom hook because we are managing some state in that code that should be outsourced, and therefore we can't use a regular function.
- We'll also have to bring the functions that update that state into the custom hook though.
- And I'll also add pointers at handleInputChange and handleInputBlur to this returned object so that this object also has these properties, which contain values that point at these functions: return {
  value: enteredValue,
  handleInputChange,
  handleInputBlur,
  };
