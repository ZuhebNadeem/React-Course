## REACT QUERY / TANSTACK QUERY - HANDLING HTTP REQUESTS WITH EASE

- It is a library that helps you with sending HTTP requests from inside your React app.
- So it helps you with connecting your React frontend to a backend.
- Makes fetching, caching, synchronizing and updating server state in your web applications a breeze.

1. What is Tanstack Query & why would you use it ? (instead of using useEffect and fetch for example)
2. Fetching and mutating data (How to send, get, and post, and put, and delete requests)
3. Configuring Tanstack Query (How to configure and efficiently use this library)
4. Advanced Concepts: Cache Invalidations, Optimistic Updating & More

### React Query: What & Why?

- Tanstack Query is a library that helps you with sending HTTP requests and keeping your frontend user interface in sync with your backend data.
- Problem: To much code with fetch(). You can use fetch(), but tanstack can simplify your code.
- Makes fetching, caching, synchronizing and updating server state in your web applications a breeze.
- It comes with many built in more advanced features.
- And that's where Tanstack Query comes into play because with this library, we'll not just be able to get rid of a bunch of code, like this state management here and some other code as well, but we'll also get some advanced features like caching behind the scenes, data fetching, and all those things I just described to make our app better.

What we want(example) with Tanstack Query:

- Behind the scenes we're fetching new data and we're updating the UI if we found out that the data we're currently displaying is outdated.
- Another feature we might want in this app here could be caching so that the data once fetched is cached, stored in memory, and we can then reuse that data if we need it again.
- And if I go to another page, and then go back to view the site, we don't have to refetch all that data but instead, we may use the data we already have in memory and fetch updated data behind the scenes.

### Installing & Using Tanstack Query - And Seeing Why It's Great!

useQuery:

- A function to manually refetch the query.
- In the back, sends an HTTP request, get us data that we need, and also give us information about the loading state, so if we are currently sending the request and potential errors.
- Passing an object to useQuery: In this object, we can set various properties, and one property we can set is the Query FN property, the Query function property. With this function, you define the actual code that will be executed, that will send the actual request, and that's really important.
- Tanstack Query does not come with some built-in logic to send HTTP requests. Instead, it comes with logic for managing those requests, for keeping track of the data and the possible errors that are yielded by these requests, and so on. The code for sending the requests must come from your side. You define that code, and you can define the code however you want.
- Lose focus and regain focus, is a trigger for React Query to re-fetch data.

  useQuery({
  queryKey: ['some-key'],
  queryFn: fetchData
  })

- fetchData() is executed & HTTP request is sent.
- You have to write the code that sends the actual HTTP request. Tanstack Query then manages the data, errors, caching & much more.
- queryKey: Cache the data that's yielded by that request so that the response from that request could be reused in the future if you are trying to send the same request again and you can configure how long data should be stored and reused by React Query.
- Cached, stored by Tanstack Query. Cached data is reused & show on the screen immediality.
- But this is of course a super important mechanism because this makes sure that data can be shown to the user quicker if you already have it because it doesn't need to be refetched all the time. So that's why every Query needs such a key.

`const { data, isPending , isLoading, isError, error } = useQuery('events', fetchEvents);`

- data: To pull out the data property that will exist on that object returned by useQuery, and that will be a property which holds the actual response data as a value. So that data, which in the end is returned by your custom fetching function, that data is what will end up in this data property as a value once this Query is done.
- isPending: We must wait for a response, therefore, this object also contains an isPending property which tells us whether the request is currently still on its way or if we already get a response. Will be true if the request is currently on its way and false otherwise
- isError: Instead, we could also be facing an error if something went wrong on the server and therefore, useQuery also gives us an isError property on this object here, which will be true if we got back an error response. Now to make sure that isError is true, in such a case, your code that sends the request also must make sure that an error is thrown if you got an invalid response. if (!response.ok) {throw Error("An error occurred");}
- error: We also get back an error property which contains information about that error that occurred. For example, the error message. Would contain error details.
- Can now use that information to output different content down there, render different JSX code if we are waiting for a response or if we have an error.

- No QueryClient set, use QueryClientProvider to set one: Because in order to use React Query and the useQuery hook, you must wrap the components that do want to use these features with a special provider component provided by Tanstack Query.
  <QueryClientProvider client={queryClient}>
  <RouterProvider router={router} />
  </QueryClientProvider>
- With React Query: If I now go out of this page back to the code, let's say, and then come back to it. Then you'll see this HTTP request being sent here again, and that's being sent because of Tanstack Query, which, for example, reacts to us going away from this screen and coming back to it. And the advantage of this, of course, is that if some data should change, for example in the database.

### Understanding & Configuring Query Behaviors - Cache & Stale Data

Caching:

- React Query caches response data.
- Caching Data is a process that stores multiple copies of data or files in a temporary storage location—or cache—so they can be accessed faster.
- There is another request being sent behind the scenes here, but this is not the request that's needed to display data instantly.
- Instead, React Query caches the response data you are getting back from your requests, and it will reuse that data whenever it encounters a new useQuery execution with the same Query Key.
- And, therefore, when this component function executes again, React Query will see that this Query Key has been used before and that it did already cache data for that key.
- It will then instantly yield that data, but at the same time, also send this request again behind the scenes to see if updated data is available. Then it will kind of silently replace that data with the updated data so that after a couple of seconds or however long it takes to fetch that data, we do have the updated data on the screen.
- We will have cached data here, but React Query will still go ahead and send an extra request behind the scenes to make sure that the cached data that's currently being used is the most recent data.

StaleTime:

- Setting a `staleTime` on your queries.
- This controls after which time React Query will send such a behind-the-scenes request to get updated data if it found data in your cache.
- And the default is zero, which means it will use data from the cache, but it will then always also send such a behind-the-scenes request to get updated data.
- With that, we're making sure that the cached data is used without re-fetching it behind the scenes if that data is less than f.eks. 10 seconds old. Unngår redudant kall.
- gcTime: Another value you can set here is the `gcTime`, the Garbage Collection Time. This controls how long the data and the cache will be kept around. And the default here is five minutes.

### Dynamic Query Functions & Query Keys

- Scenario: We have fetchEvents() in NewEventsSection that shows AllEvents, and we also use fetchEvents() in FindEvenSection that shows the searched event. So we use the same function for 2 diffrent things.

- Still want to use this fetchEvents() function, but we pass some extra data to this function, and we tweaked the code here a little bit because now we must include search term which is entered here into this input field, into this request to the backend.
- We will have to make sure that this query is not sent before we do have a search term:
- queryKey: ["events", { search: searchTerm }], TanStack Query manages query caching for you based on query keys.
- When a query needs more information to uniquely describe its data, you can use an array with a string and any number of serializable objects to describe it. Queries with additional parameters. It's common to pass an object of additional options.
- By using a query key with additional data, you can create a more dynamic and flexible system.
- In contrast, giving each query a different name might lead to more code duplication and less consistency. The query key serves as a concise and unique identifier, helping React Query manage the cache and fetching logic more effectively. Can use dynamic query, f.eks. when we depend on user input.

1. Dynamic Queries: Including additional data in the query key allows you to make dynamic queries based on different parameters. In your example, the query key includes the base key "events" and an object with a search term. This allows you to dynamically search for events based on the provided search term.

2. Automatic Cache Invalidation: When the query key changes, React Query will automatically invalidate the cache associated with that key. This means that if the user searches for different terms, React Query will know to refetch the data for the new search term and update the cache accordingly.

3. Consistency and Naming Conventions: Using a consistent naming convention for query keys can make your code more readable and maintainable. It establishes a pattern for how queries are identified, making it easier for developers to understand and work with the codebase.

4. Reuse of Fetching Logic: By keeping a consistent query key structure, you can reuse the same fetching logic in different parts of your application. For example, if you have a generic fetch function that takes a search term as a parameter, you can reuse it by providing different search terms in the query key.

### The Query Configuration Object & Aborting Requests

- `signal` is an object that gives us information about the Query key that was used for that Query and a signal. And that signal is required for aborting that request. If you, for example, navigate away from this page before the request was finished because React Query thankfully can do that for you, it can abort requests, and it does that with help of that signal.
- React Query passes an object to that function you defined as a Query function. Therefore, here we should actually accept such an object and we can use object destructuring here to pull out the different things we will get here.
  const{ data, isPending, isError, error } = useQuery({
  queryKey: ["events", { search: searchTerm }],
  queryFn: ({ signal }) => fetchEvents({ searchTerm, signal }),
  });

### Enabled & Disabled Queries

- We might want to disable this Query, until a search term has been entered. Common that some requests should not be sent instantly.
- enable: true and false.
- There should be a difference between input being empty initially(show no result) or being empty because the user cleared it(show all result):
  enabled: searchTerm !== undefined.
- isLoading: The difference between isLoading and isPending is that isLoading will not be true if this Query is just disabled.

### Changing Data with Mutations

- React query can be used to get data, but also send data. That we collect that data entered by the user and then use React Query to send it to the backend.
- Problemstilling: use useQuery to send that data and how can we collect that data?
- useQuery only to get data, useMutation to send data to send a POST request.
- useMutation: `useMutation` hook is optimized for such data-changing queries, for example, simply by making sure that those requests are not sent instantly when this component renders, as it by default is the case with `useQuery`. Instead, requests are only sent when you want to send them, for example, from inside this `handleSubmit` function.

  const { mutate } = useMutation({
  mutationFn: createNewEvent,
  });

- Mutation key: You don't necessarily need to do this because the idea with mutations typically isn't to cache their response data. Mutations are primarily about changing something on your backend, not about getting and storing data in your frontend.
- {mutate}: This is now a function which you can call anywhere in this component to actually send this request because as mentioned, useMutation, unlike useQuery does not automatically send this request when this component here is rendered but instead only when you tell it to send that request, which you do with help of that mutate function.
- Fetching More Data & Testing the Mutation: We also allow the user to pick an image. Creating: export async function fetchSelectableImages({ signal }), and using useQuery on that function.

### Acting on Mutation Success & Invalidating Queries:

- We haven't added any code to do something if that mutation succeeds. Might want to wait for this mutation to be finished until we do that so that we don't close this screen whilst the request is still on its way. And we could achieve that by adding the onSuccess property
- onSuccesss: A function that will be executed once this mutation succeeded. This also makes sure that this code will only execute if the mutation did succeed. If we instead would navigate away here in handleSubmit, we would always do that no matter if the mutation succeeds or fails. If we instead do that in onSuccess, we'll stay on this screen until the mutation did really succeed. So any errors would be shown to us.

  const { mutate, isPending, isError, error } = useMutation({
  mutationFn: createNewEvent,
  onSuccess: () => {
  queryClient.invalidateQueries({ queryKey: ["events"] });
  navigate("/events");
  },
  });

- When we create a form, we want to see the data straight away. It is a useMutation and useQuery. We need to tell React Query that the data that's connected to some queries is outdated and that it should be refetched: use queryClient.invalidateQueries.
- It tells React Query that the data fetched by certain queries is outdated now, that it should be marked as stale and that an immediate refetch should be triggered if the Query belongs to a component that's currently visible on the screen. If I'm creating a new event, of course, the page that shows all events is still visible on the screen.
- Also define the Query key which we wanna target. And this will then invalidate all queries that include this key.
- You see it shows up down here basically instantly because it's refetched behind the scenes immediately because I'm invalidating queries here. And that's why this here (queryClient.invalidateQueries) is often an important step when performing mutations because this guarantees that all queries that use a certain key operate on recent data again.

### A Challenge! The Problem & Solution (Summary)

Problem(Task):

- Use fetchEvent(ID) and make sure that all this information you are fetching with React Query is being output here.
- Make the delete button work -> Together with React Query's useMutation so that you get a mutation which you can execute when this button is clicked.

Solution:

<pre>
```
// Fetch event details using useQuery
const { data, isPending, isError, error } = useQuery({
  queryKey: ["events", id], // Unique query key including the event ID
  queryFn: ({ signal }) => fetchEvent({ id, signal }), // Fetch function for the event
});

// Use mutation to delete an event
const { mutate } = useMutation({
  mutationFn: deleteEvent, // Function to perform the delete mutation
  onSuccess: () => {
    // Invalidate queries and navigate on successful deletion
    queryClient.invalidateQueries({
      queryKey: ["events"], // Invalidate queries related to events
      refetchType: "none", // Set refetch type to none to avoid immediate re-fetch
    });
    navigate("/events"); // Navigate to the events page
  },
});

// Handler function for the delete button click
const clickDeleteEvent = () => {
  mutate({ id: id }); // Trigger the mutation to delete the event
};
```
</pre>

- And that second element in queryKey should be the actual ID for which we're executing this query because when this EventDetails component is rendered for different IDs, so for different events, I of course wanna fetch different data for different events. So we need different keys so that we're not caching and reusing the same data for the same single event all the time. Therefore, I'll add my ID here into this key.
- For delete we should have a mutation because we're not fetching or getting any data, instead we're sending a DELETE request. We are trying to change, to mutate, data on the backend.
- {mutate}: This useMutation hook returns an object where we most importantly get a mutate property, a function we can call to trigger this mutation function.
- queryClient.invalidateQueries: In addition, I also wanna invalidate my queries, my event related queries, because since I deleted an event of course, all that data should be marked as outdated and React Query should be forced to fetch data again.
- Disabling Automatic Refetching After Invalidations: In invalidate queries add a second property to this configuration object for invalidate queries. Here, you can set the refetch type to none, which makes sure that when you call invalidate queries, these existing queries will not automatically be triggered again immediately. Instead, they will just be invalidated and the next time they are required, they will run again. But they will not be re-triggered immediately which otherwise would be the default behavior.
- Enhancing the Demo App & Repeating Mutation Concepts: UseMutation does not just give you an object with a mutate function, but also a pending property, for example, which tells you whether this deletion request in this case here is currently on its way.
- React Query Advantages In Action (Edit Events): I'm using the same query with the same key therefore this cached data is reused between those two components. That's why if we are on this detail page, this added page opens up instantly. Whereas on the other hand, if I reload with that added page opened, we see that loading spinner initially. Because if we reload, the data is not there yet. If we come from the details page, it is already there. So that's another great example showing us why using React Query can lead to a better user experience.

### Optimistic Updating

- Different way of handling mutations and the different states a mutation can go through (isPending, isError, error)
- Current updating approach has the problem that whilst it works, we're not reflecting the updated state on the page we're coming from unless we reload it.
- Eearlier in this course you learned that one way of making this work and of fixing this would be to use onSucess and call queryClient.InvalidateQueries here and invalidate all the queries that need that data.
- Will do Optimistic Updating instead, I want to update this UI here instantly without waiting for the response of my backend. And if my backend then turns out to fail, if the update fails for whatever reason, I simply want to roll back the optimistic update I performed.
- The onMutate property, which wants a function as a value. OnMutate, will be executed right when you call mutate. So before this process is done, before you get back a response. And it's here in onMutate where I essentially want to update the data that's cached by React Query, where I want to update this detail data.
- Not waiting for response on onMutate.

To change the cached data:

<pre>
        onMutate: async (data) => {
      const newEvent = data.event;
      await queryClient.cancelQueries({ queryKey: ["events", params.id] });
      queryClient.setQueryData(["events", params.id], newEvent);
    },
</pre>

- queryClient.setQueryData(): We can use query client and then call setQueryData to manipulate that already stored data without waiting for a response. Normally, it's manipulated by React Query whenever you get a new response that's being cached. But you can also manipulate that stored data yourself by calling setQueryData.
- useMutate gives us the data we send inn when submitting, can use "data" to get it.
- Another thing you should typically do when performing optimistic updating, you should also use the query client to cancel all active queries for a specific key by passing an object to cancel queries and then setting a query key for which you want to cancel queries.
- With this line of code, we're making sure that if we had any outgoing queries for that key, those queries would be canceled, and we would not have clashing response data from those queries and our optimistically updated query data because if those ongoing queries finished before the updating request was done, we would've fetched old data again, and we don't want to do that.
- By the way, cancel queries will not cancel the mutation; it will really only cancel queries triggered with useQuery.

Backend could fail:

<pre>
    onError: (error, data, context) => {
      queryClient.setQueryData(["events", params.id], context.previousEvent); ---- And with that, we're rolling back this optimistic update if the mutation fails.
    }
</pre>

- So to make sure that we can roll back, we also need to get the old data and store that old data somewhere so that we can roll back to that old data.
- queryClient.getQueryData(["events", params.id]): Gives us the currently stored query data, which we of course want to execute before we set it to some new data.
- onError: Will be executed if this update mutation errors, so if it fails. Context will be the value, what we return in onMutate.
- And then here in on error we can call queryClient setQueryData, to again manually update the stored data for this query with this key.

onSettled:

<pre>
    onSettled: () => {
      queryClient.invalidateQueries(["events", params.id]);
    }
</pre>

- Now, in addition is one other last thing which you should also do when performing optimistic updating. Unsettled will simply be called whenever this mutation is done, no matter if it failed or succeeded. And in that case, just to be sure that you really got the same data in your front end as you have on your backend. You should also, again useQueryClient to invalidate your queries.
- You simply make sure that whenever this mutation finished, even though you did perform this optimistic updating and you rolled back if things went wrong, you still make sure that you fetched the latest data from the backend so that if the backend did something different and the data would be out of sync between the backend and the front end right now, it gets back into sync by forcing React Query to refetch the data behind the scenes.

### Using the Query Key As Query Function Input

- Trying to limit the item we are receving, show max 3 events.
- Alternative to passing the same information to the queryKey and also to fetchEvents.

<pre>
  useQuery({
      queryKey: ["events", { max: 3 }],
      queryFn: ({ signal, queryKey }) => fetchEvents({ signal, ...queryKey[1] }),
  })
</pre>

### React Query & React Router

- You can also combine React Router features with React Query. Your choice if you want to use React Query with React Router or not.
- loader(): We can then use this function to tell React Router to execute the code in this function before it actually loads and renders this component. And that allows us to fetch data before the component even appears on the screen.
- queryClient: Now we'll not load data through the useQuery hook, but instead, since we're outside of a component function, directly with the help of that query client. Because that query client here actually also has a fetchQuery method which can be used to trigger a query programmatically. FetchQuery has queryKey and queryFn as we know it.
- useLoaderData: Because whilst you could use useLoaderData, to get access to the data that's returned by the loader, it is better to still keep useQuery around.
- Because when we use fetchQuery here in the loader, React Query will go ahead and send that request, and we'll then store that response data in the cache. Therefore, when useQuery is executed again here in the component, it's this cached data that will be used, but we keep all the other advantages React Query has to offer.
- Can also use it for mutating data.
- action(): Now this action function will be triggered by React Router when a form on this page is submitted.
- Method in action: We can directly call this function in this action function without creating or triggering a mutation because this useMutation hook was also just a wrapper around this function.
- queryClient.invalidateQueries: We should use the queryClient to invalidate all queries to make sure that the updated data is fetched again.
- Here will not be performing optimistic updating anymore.
- Because that's how React Router works. It needs a form submission to trigger those action functions.
- useSubmit(): This submit function can now be used in this handleSubmit method here instead of mutate and navigate to submit this form.
- useNavigation with state: We wants to give the user some feedback that the request is on its way. We can use the useNavigation hook with state, that will tell us what the current navigation state of React Router is. state===submitting &&.
- useIsFetching(): To find out if React Query is currently fetching data anywhere in this application, we can use useIsFetching. We will get back a value that, in the end, allows us to find out whether React Query is fetching somewhere in the application or not.
- Aavoid redundant HTTP requests when using React Router in conjunction with React Query: We will have cached data here, but React Query will still go ahead and send an extra request behind the scenes to make sure that the cached data that's currently being used is the most recent data. Therefor use staleTime.
