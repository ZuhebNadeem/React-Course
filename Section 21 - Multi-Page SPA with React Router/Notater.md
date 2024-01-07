## BUILDING A MULTI-PAGE SPA WITH REACT ROUTER

- React appliactions that are technically single page applications.
- Still have different URL leading to different pages.
- SPA: Create multiple pages with unique URLs, allowing user navigation by simply entering the desired URL in the browser address bar.

1. Client side routing - What and why?
2. React router
3. Data fetching & Submission (we'll learn how React-Router can help us simplify the process of fetching and sending data.)

# Del 1 - React Router Basic

### Routing: Multiple Pages in Single-Page Applications

- Routing: Different URL paths load different content on the screen.
- Different html files for different paths, and that is how you would build a multi-page application without ReactJS. Always fetch new content then, page changes(new request + response), html is requested and loaded.
- SPA: Only one inital HTML request and response. Page (URL) changes are then handled by client-side react code. Visible content is changed without fetching a new HTML file.
- We can support path changes in the URL, and load different content based on the path.
- We can add client-side React code, that basically watches the currently active URL and that triggers whenever the URL changes, and that then leads to different content being displayed on the screen when the URL changes.
- So instead of loading new HTML files from the backend, we could add some client-side code that simply watches the URL and then loads a different React component when that URL changes.
- With that, we're still in a single page application but we nonetheless support different URLs and therefore Routing. And that is exactly what we'll do, and what we will learn about in this course section here.
- Watching url and loading different content - react router. This package which allows us to listen to URL changes and then load different content.
- Different steps:

  1. We must define the routes we wanna support, so we must define which URLs, which paths we wanna support, and which components should be loaded for different paths.
  2. Activate our router and load the route definitions that we defined in the first step.
  3. Make sure that we have all these components that we do wanna load and that we maybe also provide some means of navigating between those pages so that our users can move smoothly between the different pages.

### Defining Routes

- Watching url and loading different content - react router. This package which allows us to listen to URL changes and then load different content.

`const router = createBrowserRouter([{`
`path: "/",`
`element: <HomePage />,`

- createBrowserRouter: This is the recommended router for all React Router web projects. It uses the DOM History API to update the URL and manage the history stack.
- We created the route object with its path, and we defined which component should be loaded when this route is active.
- `<RouterProvider router={router} /> `: All data router objects are passed to this component to render your app and enable the rest of the data APIs.
- Object-based solution (se over) vs routes with JSX code(` <Route path="/products" element={<Test/>} />`). Opptil deg hva du vil bruke.

### Navigating between Pages with Links

- Not smart with a href - because we dont want to send a new http request to the server.
- The reason for that is that technically, we're sending a new request to the server that's serving this website. Load all the JavaScript code again, load the entire React application again, and restart the React application. We don't wanna load it again and we don't wanna restart the React application.
- Use link: So we don't wanna switch the page by sending a new HTTP request to the server.
- Link should just change the URL and set it to the URL we're trying to navigate to but it should then prevent the default of sending a request and instead let React Router know about the new URL and ensure that React Router loads the appropriate element for that new URL.
- Link component does under the hood is it does render an anchor element but it basically listens for clicks on that element, prevents the browser default of sending an HTTP request if the link is clicked, and instead simply takes a look at the route definitions to update the page accordingly and load the appropriate content.
- Link will also change the URL but without sending a new HTTP request.
- Showing errors - Not found page: You can provide a way better UX than this when your app throws errors by providing your own ErrorBoundary or errorElement prop on your route.

### Working with Navigation Links (NavLink)

- Currently active link is highlighted, that is missing.
- Link vs NavLink -> NavLink does highlight those links as being active once they're clicked.
- By default, NavLink checks whether the path of the currently active route (the route that is currently being viewed) starts with the path specified in the NavLink component.
- NavLink is considered to be active if the currently active route starts with the path set on the link.
- const navigate = useNavigate(); Get access to a navigate function, like this, and this navigate function can be called to trigger a navigation action. So, to switch to a different route from inside your code.
- can use it with end to indicate that this is the start and end of the url.

  `<NavLink to="/"className={({ isActive }) =>`
  `isActive ? classes.active : undefined`
  `} end={true}`
  `Home Page </NavLink>`

### Dynamic Routes

- Data will be different for different products, different paths for different product, but always want to load the same page: Dynamic path parameters.
- Add parameter to the path , with :id/hva enn du vil. Tells that this is dynamic.
- The colon is very important though. This signals to React Router DOM that this part of the path is dynamic.
- So that you so actually don't want to load this element for /products:/productId. But instead /products/ any value that will be used as an actual value for this product Id placeholder.
- To get the value hold in :, useParams hook.

useParams:

- useParams: This `useParams` object is a simple JavaScript object that contains every dynamic path segment we defined in our route definition as a property. In my case here, I got a property called `productId` on this `params` object because in my route definition I chose `productId` (:productId) as an identifier for this placeholder, for this path parameter, for this dynamic path segment.
- So the part after the colon, that is the identifier, which you can use as a property name on that `params` object here.
- useParams give us only the :value , but useLocation gives ut the path and state if send with.
- This hook when called in a component function gives us access to the currently active route parameters, so to the values that are encoded in the URL for our dynamic path segments. /:value -> får verdien i value med `useParams()`.
- The useParams hook allows us to access URL parameters within our components. It retrieves the value of the parameter specified in the route and makes it available for further use.
- By extracting the relevant parameter using useParams, you can fetch the corresponding data and render the appropriate content dynamically.
- The useParams hook is particularly useful in scenarios where you need to create dynamic routes and display content based on the URL parameters.

### Understanding Relative & Absolute Paths

Absolute Paths:

- All our path starts with / - they are absolute paths. If the path starts with / - it is absolute paths.
- Since it starts with a forward slash, it's an absolute path so it's added directly after the domain name, and not after the currently active path. /id blir lagt til og hvis det var noe /verdi herfra før, blir denne fjernet.

Relative paths:

- Remove / from children paths - and you get relative paths. React Router will then look at parent path and append the child route path after the parent route path.
- Remove / - Link has a relative path now, which means that, by default, it will add the path after the currently active routes path./id blir lagt til og hvis det var noe /verdi herfra før, blir denne ikke fjernet. /id blir lagt til slutten av URLen.
- <Link to=".." relative="path"> - path will only remove one "ledd" from URL. Will look at the path and only go one back. If it is not relative path, it will go to parent, and not from where we navigated from.

### Index Routes

- index: true -> This turns this route into a so-called index route, which simply means it's the default route that should be displayed if the parent route's path is currently active.
- So it will not be loaded for products or products/productId. ut if we're on just / or nothing in this case, this index route will be activated. Default route.

# Del 2 - Data fetching and submission with react router

### Data Fetching with loader() & useLoaderData()

- React router start fetching , before we navigate to page. So when you are on the page, the fetching has been done and the result is showing.
- loader(): this function will be executed by a React router whenever you are about to visit this route. So just before this route gets rendered, just before this JSX code gets rendered, his loader function will be triggered and executed by a React router.
- In the loader we can have data fetching logic. Data Fetching with loader().
- Using Data From A Loader(in loader we have fetch data) In The Route Component: useLoaderData() -> Can use useLoaderData in any component on the same level or lower level, where loader has been used. Not in parent router. Not allowed in higher level, then where you are fetching the data.
- Where loader() should be stored: Should have it in component, not in Routes. export async function name -> in the component, and use name in the loader in routes, best practice.
- When Are loader() Functions Executed: Will be called when we start navigating to the page, before you go there. React router will wait for data to be fetched, so for the loader to be finished, before it then renderes the page with the fetched data. No need for loading state longer.
- Reflecting The Current Navigation State in the UI (Give user feedback, that something has happend, loading state): Check the current route transition state , waiting for data or we are done. useNavigation() => navigation.state === 'loading'.
- Returning Responses in loader()s: Can return anything (array, number, object, response object). Auto data extraction, you can just return response, no need for response.json().
- Which Kind Of Code Goes Into loader()s?: Can do anything you can do in other Javascript projects. Can not use react hooks (f.eks. useState).
- Error Handling with Custom Errors: Fetching data could go wrong. return { isError: true, message: "Could not fetch events" } -> And then in the component just check on data.isError?. Alternative: use throw{} and in route -> errorElement: <Error /> -> With that, this page, this error page, will be displayed whenever we basically have any kind of error anywhere in our routes.
- Extracting Error Data & Throwing Responses: Throw error and use useRouteError() to get it.
- The json() Utility Function: throw json({ mesage: "Could not fetch events" }, { status: 500 }) -> Now `json` is a function that creates a response object that includes data in the JSON format. To this `json` function, you simply pass your data that should be included in the response and you don't need to convert it to JSON manually. You can pass a second argument where you can set that extra response metadata, like this status. With this `json` function, you not only type less code here, but in the place where you use that response data, you also don't have to parse the JSON format manually.
- Dynamic Routes & loader()s: export async function loader({ request, params }) -> Request for url, and Params(route parameter and values) like useParams. If we want something to load before the page renderes - then use loader in the component, and useLoaderData hook to get hold of that data.

The useRouteLoaderData() Hook & Accessing Data From Other Routes:

- You can access loader data with `useLoaderData`, in any component that's on the same level or a lower level than the route where the loader is added to. Allows us to reuse the logic and data of that loader in the route and children routes.
- When we use loader data, it searches for the closest available loader data, and the highest level at which it looks for data, is the route definition of the route for which this component was loaded.
- Now we actually want loader data from this route, and to make sure that we use this loader's data instead, the data from this parent route, we should add a special ID property which we can add to our route definitions.
- And, for example, name this event detail. This ID is totally up to you, though. And then instead of using `useLoaderData`, we use a slightly different hook, which is called `useRouteLoaderData`. This hook works almost like `useLoaderData`, but it takes a route ID as an argument.
- id: "event-detail" + const data = useRouteLoaderData("event-detail") =>
- So that's how you can get access to a higher-level loader from a route that doesn't have a loader. You use `useRouteLoaderData` instead of `useLoaderData`. But now we can reuse that loader across multiple routes which all need the same data.

### Data Submission with action() (Sending data to backend / Form Submission)

- Just as we can add loaders to load data, we can also add actions() to send data.
- React Router, makes handling form submission and extracting data from that form easy.

Use Form from React Router:

- This Form tag will make sure that the browser default of sending a request to the backend will be omitted, but it will take that request that would've been sent and give it to your action. And that's pretty useful because that request will contain all the data that was submitted as part of the form.
- This request, will not be sent to the backend automatically, but instead to your action. And it will include all the form data if you use this react router form component.
- To get hold of that form data, we have to call the special `formData()` method on the request object and await it. That will give us a data object that includes this form data. On this data object, we can call the `get` method to get access to the different input field values that were submitted. To get, we pass a string with the different identifiers of our input fields. So that would be the values we chose as names for the input fields like title or image in my case.

Updating the UI & Validation:

- Submitting Data Programmatically: Alternative to Form, for triggering action(). To trigger that action, and submit some data programatically, just as we can navigate programmatically, we can also submit data and trigger an action programmatically with the special useSubmit hook.
- Updating the UI State Based on the Submission Status: `const isSubmitting = navigation.state === "submitting";`
  `useNavigation()` -> We can extract various pieces of information from that object. For example: All the data that was submitted, current state of the currently active transition is(transition = And we have a transition from one route to another if we click a link / submit a form).

- Validating User Input & Outputting Validation Errors: Show potential back-end validation errors. If failed, return a response in action -> Can use response data, returned action data. useActionData() => Gives us access to the data returned by our action, in this case, not by the loader, but by the action and it gives us access to the closest action.

### useFetcher()

- useFetcher The Fetcher Form component is designed to trigger actions and loaders without initiating a route transition. When utilized in a certain way, it can activate actions and loaders through the load function without navigating to the associated page. Therefore, Fetcher is recommended for situations where you want to perform actions or display loaders without transitioning to a specific page.
- The useFetcher hook is the appropriate tool to use when you want to interact with actions or loaders without triggering a transition. It is ideal for sending requests behind the scenes without initiating any route changes. Can you use fetcher.data
- useFetcher is the suitable tool when you want to activate a loader or an action without loading the page or transitioning to the route associated with that action or loader.
- This is particularly useful in scenarios where a component is shared or used multiple times on the same page, and you simply want to update or retrieve data behind the scenes without navigating to a new page.
- usefetcher() -> to fetch or load data behind the scenes without navigating.

### defer()

- Allows you to defer when data is loaded: That we actually wanna render a component already even though the data is not fully there yet.
- defer() -> In this object, we in the end, bundle all the different HTTP requests we might have going on on this page.
- <Suspense> </Suspense> -> The suspense component is a component which can be used in certain situations to show a fallback whilst we're waiting for other data to arrive.
- Deferring data fetching: Can be helpful if you have some slow requests, some slow backend, and you wanna show a page without waiting for the data to be there.
- This defer feature shine if you have multiple requests with different speeds: If you wanna show some data before all the data is there
