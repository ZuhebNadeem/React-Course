## PRACTICE PROJECT: ADDING HTTP & FORMS TO THE FOOD ORDER APP

- When we have data that changes and where a component should be re-evaluated once it did change, whenever we have a use case like this, we need useState.
- When we're passing props through multiple levels of components. We could consider using context instead.
- We should call event.preventDefault() to ensure that the browser default which would be to send an HTTP request is prevented, so that request is not sent.
- In useState we can have individual state or one combined, when combined: Use those inferred validities, as new values for the different keys in this state object:

      `setFormInputsValidity({ name: enteredNameIsValid,
          street: enteredStreetIsValid,
          city: enteredCityIsValid,
          postalCode: enteredPostalsValid
          });`

#### Fetching values via Http

- .then vs async: From a performance point of view, await is just an internal version of .then() (doing basically the same thing).
- Use await and async!
- Transform data received from the backend to match the structure expected by the frontend.

#### Forms

- Listen to every keystroke or listen when the form is submitted.
- Can get value with useState and useRef.
- Burde ha forms sjekk noen ganger utenfor, med en enkel linje kode sjekk
- Burde bruke useState for feilmeldinger med kombinasjon av et objekt med flere keys som man kan endres. Mindre kode å vise feilmelding da.

#### Send data to backend server (request when form is submitted)

- You should typically always wanna validate incoming data on the server as well, because the user could edit the loaded JavaScript code.
- The backend (or “server side”) is the portion of the website you don't see.
- It's responsible for storing and organizing data, and ensuring everything on the client-side actually works.
- The backend communicates with the frontend, sending and receiving information to be displayed as a web page.
- Send request to backend server.
- body: set this to JSON.stringify(), since we need to send JSON data to backend.
- body is what we are sending to backend
