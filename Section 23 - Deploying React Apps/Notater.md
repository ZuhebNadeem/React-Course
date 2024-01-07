## DEPLOYING REACT APPS

- How you can move your React application from your local machine to a real server.
- Before deploying: The steps include coding, thorough testing, exploring optimization opportunities (such as lazy loading), building the app for production, and deploying the optimized code package to a server
- The lecture also touches on server-side routing, required configurations, and provides an example of deployment.
- Once this optimized code package is ready for deployment, the next step involves uploading it to a server. There are various hosting providers available for deployment, and the lecture provides an example in this core section.

1. Deployment Steps & Pitfalls
2. Service-side Routing vs Client-side Routing

### Lazy loading & Suspense

- Problem: We use import in every component, this means all code files must be loaded before anything's shown on the screen. Having to load all the code initially will slow down that initial page load. When the user visits that website for the first time, all that code must be downloaded before anything's showing up on the screen. And therefore that initial load can take quite long and leads to a bad user experience.
- The idea behind lazy loading is that we load certain components in the end only when they're needed instead of ahead of time.
- Lazy loading means that we wanna load certain pieces of code only when it's needed. Load code only when it´s needed.
- Lazy loading is a technique for waiting to load certain parts of a webpage — especially images — until they are needed. Instead of loading everything all at once, known as "eager" loading, the browser does not request certain resources until the user interacts in such a way that the resources are needed.

  ` { index: true, element: <BlogPage />, loader: () => import('./pages/Blog').then(module => module.loader()) }`

- import: Import as a function and in that case, it will import something dynamically, only when it's needed. Now, to import you pass a path.
- So now this import function here will only be executed once the loader here, for the blog page, is executed. So only once we try to visit the blog page. Only then the blog file will be imported and this loader function from that file will be executed.

  `const BlogPage = lazy(() => import("./pages/Blog"));`
  `element: (<Suspense fallback={<p>Loading...</p>}> <BlogPage /> </Suspense>)`

- Loading the blog page component lazily.
- Lazy is executed and takes this function with the dynamic import as an argument. And now, the blog page can indeed be used as a component.
- Suspense: Suspense is basically a component provided by React, to wait for content to be loaded before actually rendering the content.
- Why suspense: It will still take some time to load the code for this component because that code has to be downloaded after all, and the effort you must wrap this with the suspense component.
- How suspense: And here suspense is used to wrap it around this lazily loaded component so that we can show a fallback, which is specified with help of the fallback prop on suspense until that component code is there.

### Building the Code For Production

- A build script is executed, typically using a command like npm run build. This script transforms the code into a highly optimized production build. The result is a code bundle ready for deployment, found in the generated "build" folder.
- Npm run build: When we run NPM run build, we execute that script. And under the hood, this will produce a code bundle with highly optimized and transformed code which is ready to be uploaded.
- This production build includes optimized JavaScript files with dynamically loaded chunks for lazy loading.
- The contents of the "build" folder, particularly the optimized JavaScript files, are what need to be uploaded and deployed to a server

### Deployment

- Upload it to a server, deploy it.
- In React we don't need any hosting provider that executes code on the server.
- Firebase Hosting: Was looking at a step-by-step guide on deploying a React single-page application to Firebase Hosting.

### Service-side Routing vs Client-side Routing

- The key point is that client-side routing, facilitated by React Router, handles navigation in the browser, not server-side logic. When deploying the site, the server must be configured to always return the index.html file, ensuring client-side routing functions properly.
- This configuration is crucial for handling URLs and paths correctly
- The recommendation is to always return the same HTML file and JavaScript code, allowing client-side routing to handle path resolution.
- The configuration choice should be a single-page application in the context of Firebase hosting, where answering "yes" to this configuration question ensures that the server consistently returns index.html, regardless of the requested path. This guarantees the functionality of client-side routing over server-side routing.
- Requiring the setup of redirection rules to forward all requests to index.html. Understanding the distinctions between client-side and server-side routing is stressed as crucial for proper configuration.
