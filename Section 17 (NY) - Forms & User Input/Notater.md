## SECTION 17: WORKING WITH FORMS & USER INPUT

- What's difficult about forms?
- Handling form submission & validating user input
- Using bult-in form features
- Bulding Custom Solutions

### Handling Form Submission

- Form Submission(Easy) & Input Validation(Tricky - when should you validate) is the main thing you want to do with form.
- Get the data entered by user: And this is all happening because I am having a button here inside of a form element. And the default browser behavior for buttons in form elements is that those buttons will submit the form and technically that means that an HTTP request is created and is sent to the server that's serving the website. This is the default built-in behavior. And this is the default behavior because in many non-React apps, you indeed have a full stack application where every page is rendered by the server and sent to the client thereafter and where form submissions therefore should be sent back to the server so that they can be handled there.
- Extracting values from form: Can use useState, useRef or FormData object.
  const fd = new FormData(event.target.value);
- const customerData = Object.fromEntries(fd.entries()): And this will essentially give us an object where we, for example, have an email property with the value entered by the user, and of course key value pairs for all the other input fields as well. And therefore, this is how we can easily extract the data entered by the user.
