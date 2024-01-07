## SENDING HTTP REQUESTS (E.G. CONNECTING TO A DATABASE)

1.Connecting a backend and database 2. Sending Http Request from App to backend. 3. Fetch 4. React apps interact with database.  
5.Sending Http request and & using responses(work with responses that you get back). 6. Handling Errors & Loading state (How we can handle Errors and Loading States in our application).

#### How To (Not) Connect To A Database:

- Don´t connect direct to databse, in the client-side.
- If you do that, the database will be exposed.
- Connect to backend! This will do the talking to database. Since it can´t be viewed by the user. React is able to talk to a backend but not to a database directly for a security and performance reasons.
- React will talk to the backend server (API)

#### Using API

- Will fetch data from database(not direct from database, but from backend).
- REST API: There are a couple of URLs, to which you send that request to get back data in a certain format.
- Different URLs to which you send different requests will give you different chunks of data. That's what makes it an API.
  You got different entry points, which lead to different results.

#### Https Request (Fetch)

- Sending request from inside react app.
- All the data is accessible through HTTP
- Built in method in JS : Fetch API
- Allows us to fetch and send data (https request)
- An HTTP request is made by a client, to a named host, which is located on a server. The aim of the request is to access a resource on the server
- A correctly composed HTTP request contains the following elements: A request line. A series of HTTP headers, or header fields. A message body, if needed.

- Fetch does return a promise, which allows us to react to the response or errors.
- Https request is a async task, does not finish immediately , eventually give data.
- response => Object with bunch of data about the response.
- The advantage of JSON data is that it's very easy to translate it to JavaScript objects but there is a translation step: response.json():
- Make sure to transform the incoming data: Transformform incoming data, to data we expect in our app.

#### Using async / await

- Dealing with promises when using fetch.
- With promises: use async await -> Instead of having multiple .then()
- Just use async await instead, because it's a bit easier to read, I would argue.
- Showing loading text/spinner, when data is getting fetched, with useStates.

#### Http Errors

- When talking to backend, we will always be waiting for response, can get data or error.
- 2xx success vs 4xx client errors vs 5xx server errors
- Should show user error if something goes wrong.
- 404: The server cannot find the requested resource. In the browser, this means the URL is not recognized.
- We can get errors that is thrown by using try catch.

- Fetch API does not treat error status code(400, 500 errors) as real errors. Only get error when we dont get data.
- Axios: Third-party library, which you could use for sending requests, would generate and throw a real error for error status codes(400, 500 errors).
- Or you could throw error:
  if (!reponse.ok) {
  throw new Error("Something went wrong!");
  }

#### Using useEffect() For Requests

- useEffect: Fetch data as soon as a component load.
- Our second argument here which is this array of dependencies([]), where we define when this effect function should be executed again.
- State updating functions(setState) don't need to be added as dependencies because react guarantees that they will never change.
- useCallBack: Ensure that it will really always run when it needs to run but not when it does not need to run.
- If you have a function in useEffect depenedency, use useCallback on that function. (On the function, not useEffect)

#### Sending a POST Request

- Still not sending directly data to database.
- Send a POST on click: To sumbit data.
- body: What we want to send. Wants json data: JSON.stringify(data),
- JSON is this data format which is typically used for exchanging data between front-end and backend.
