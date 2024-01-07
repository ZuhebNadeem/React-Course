## SENDING HTTP REQUESTS (E.G. CONNECTING TO A DATABASE)

- Data is managed on a server(backend)
- Frontend talk with backend(server) with clients communication (eg., send data, fetch data via HTTP requests)
- Data fetching and HTTP requests
- Sending and receiving data via HTTP.

Will se:

- How to connect a backend / database
- Fetching data
- Sending data

#### How (Not) to connect to a database

- You dont directly connect to your database, because you will run into security issues.
- Because your visitor can view frontend and will then see your database.
- Communicate with a backend server. Backend code can interact with databases etc.
- Connect the frontend and backend , with HTTP request.
- API: stands for application programming interface.
- REST API: Is a web server that exposes cerain pre-defined routes to which HTTP requests can be sent. A web server that exposes certain endpoints (URLs) to which you can send requests & data (to receive data back).
- REST is a type of API. Not all APIs are REST, but all REST services are APIs. API is a very broad term. Generally it's how one piece of code talks to another. REST mostly just refers to using the HTTP protocol the way it was intended. Use the GET(POST,PUT,DELETE) HTTP method on a URL to retrieve (save, update, delete) information.

### Sending HTTP Requests (GET Request) via useEffect

- Mostly sending and receiving JSON data.
- Fetch: Can be used to send an HTTP request to some other server. Can use it also to send data.
- Fetch want the url of the server you wanna send a request to. .then => When the response is ready.
- HTTP request with useEffect for run it only one time
- Fetching data = Hente data.
- More readable with async and await, then then. then.
- Show loading text whilst we are waiting for the data to arrive, with useState
- You can transform fetched data to anything you want in your application

### Handling HTTP Errors

- Things may fail, errors can happen - maybe something went wrong on backend, or you have some bug.
- Can check response.ok, to check if response is success or failed.
- Fetching can go wrong , so do it with try and catch, around the code that might fail(fetch).
- Can handle it with checking if response is okay, and with try and catch and then showing error to user.

### Extracting Code & Improving Code Structure

- Seperate http fil for fetching.
- But now we were able to outsource this actual fetching code, the actual code that sends the HTTP request.
- And we could now potentially reuse that in other places of the application that needs the same data.

### Sending Data with POST Requests

- Store the value
- body: Which data should be attached as a request body to that outgoing request. What we should send to the backend.
- Eks: Se http.js
