## ADDING AUTHENTICATION TO REACT APPS

1. How Authentication works
2. Implementing user Authentication (Frontend talking with backend with Authentication)
3. Adding Authentication Persistence(Keep track of if user is logged in or not) & Auto-Logout

### How Authentication Works

- The process begins by sending a request containing user credentials (such as email and password) to a backend server.
- The backend server validates these credentials or creates a new user. If the provided credentials are valid, the server responds by granting permission to access specific protected resources.
- Some routes are protected by some extra middleware that checks wherever the incoming request has a valid token attached. And if it doesn't then an error response would be sent back.
- And then on the client side, in the React app, we have to store that token, attach it to future outgoing requests, and use that token as an indicator whether a user is logged in or not. We can use the existence of that token, which we get back from the server, to find out whether the user is currently logged in or not.
- We can't just attach a yes to future requests that want to access protected resources because we could fake that. Now, there are two main solutions for that. We could use server side sessions or authentication tokens.

1. Server side sessions

- Server-side sessions involve storing a unique identifier on the server after a user is logged in and authenticated.
- This identifier is then sent back to the client, which includes it in future requests attempting to access protected resources.
- The server checks whether the client has permission based on the stored identifier.
- While effective for authentication, server-side sessions require a close connection between the backend and frontend, as the backend stores client information.

2. Authentication tokens

- Authentication tokens are created(but not stored) on the server after a user successfully authenticates with valid credentials. These tokens, are not stored but sent back to the client.
- Their validity can only be verified by the backend that generated them, as they are created using a private key known only to the backend.
- In subsequent client requests to the backend, the token is attached.
- The backend validates the token, and if it is authentic, access to protected resources is granted.
- This method ensures secure and verifiable authentication without storing user data on the server.
- We can use the existence of that token, which we get back from the server, to find out whether the user is currently logged in or not.

### Working with Query Parameters

- We send a request to the backend that wants to create a new user or login the user. Request to different endpoints.
- Bruke query parameters or search parameters to handle data, håndtere hva som vises. Det som vises etter spørsmålstegnet i URLEN
- useSearchParams: The useSearchParams hook is used to read and modify the query string in the URL for the current location. Like React's own useState hook, useSearchParams returns an array of two values: the current location's search params and a function that may be used to update them.

### Actions

- Implementing the Auth Action: const searchParams = new URL(request.url).searchParams; To get the searchParams in action.
- useActionData(): Data returned by that action function, that was submitted by that form.
- The use navigation hook, which gives us a navigation object, and that navigation object has a state property which holds the current submission state, so to say, or which lets us know whether we're currently submitting.

### Attaching Auth Tokens to Outgoing Requests

- Focus on that token which we're getting back from the backend, and which we must attach to requests to protected resources.
- When we login we return a token from backend, we use this in backend to do API calls.
- Authorization: "Bearer " + token: Setting the token from the response from backend when we log in. And then use it to authorize , when we do thing.
- useRouteLoaderData: To get data from my root route. MainNavigation.js uses the useRouteLoaderData hook to access the token from the root route, enabling conditional rendering of UI elements based on the token's presence, such as showing authentication links when not logged in and a logout button when logged in.

### Route protection

- Not able to reach some routes, if we are not logged in.
- A loader that simply checks if we have a token. And if we don't have a token, redirects us away: loader: checkAuthLoader
- Auto LogOut: Backend give token that will expires after 1 hour - want to logout the user and clear the token from the localStorage. To implement the automatic logout, a timer is set up in the root layout component using the useEffect hook. The timer triggers a logout action that clears the token after one hour.The effect function in the root layout runs when the component is rendered or when the token changes, ensuring the timely execution of the logout process.
- useLoaderData: This hook provides the value returned from your route loader.
- useSubmit: We can use to programmatically submit a form. The imperative version of 'form' that lets you, the programmer, submit a form instead of the user.

### Managing the Token Expiration:

- Should have the token expiration, where we get the token.
- The getAuthToken utility function is updated to consider both the token existence and expiration, returning undefined for no token, "expired" for an expired token, and the token itself for a valid token.
