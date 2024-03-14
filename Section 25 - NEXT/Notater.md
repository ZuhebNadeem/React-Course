## Section 25: A (Pretty Deep Dive) Introduction to Next.js

Fullstack react apps with NextJs (Building up on react). Next: Allows you to build fullstack applications with React.

- What is NextJS & Why would you use it?
- Routing pages & server components
- Fetching & sending data
- Styling, image uplaod & managing page metadata

- Service-side Routing vs Client-side Routing:
  - The key point is that client-side routing, facilitated by React Router, handles navigation in the browser, not server-side logic. When deploying the site, the server must be configured to always return the index.html file, ensuring client-side routing functions properly. This configuration is crucial for handling URLs and paths correctly.
  - The recommendation is to always return the same HTML file and JavaScript code, allowing client-side routing to handle path resolution. The configuration choice should be a single-page application in the context of Firebase hosting, where answering "yes" to this configuration question ensures that the server consistently returns index.html, regardless of the requested path. This guarantees the functionality of client-side routing over server-side routing.

### Understanding File-based Routing & React Server Components

- NextJS uses files & folders to define routes.
- Only files & folders inside the "app" folder are considered!
- App folder: It's this app folder where you set up your different pages that you want to have on your overall website.
- If you in app have folder about and file page.js, you got my-page-com/about.
- If you in app have folder about, and in that have file page.js and file post-1, you got: my-page.com/about/post-1.
- page.js: Tells Next.js that you should render a page. It´s a server component.
- React server components: Rendered only on the server, never on the client.
- So it's a regular React component, but treated in a special way by NextJS. It is treated as a server component and executed on the server, and it's then the returned JSX code that's sent over the wire to the browser to be rendered as HTML, so to say.

### Route and navigation

- So NextJS has these server components, components that are rendered and converted to HTML, which is then sent to the browser.
- For new pages in NEXT, you dont use router. Instead in app, you can add new path, by adding new folders and page.js.
- NExtJS relies on reserved, special filenames. But the filenames only matter inside the "app" folder.
- Important: These filenames are only reserved when creating them inside of the app/ folder (or any subfolder). Outside of the app/ folder, these filenames are not treated in any special way.
- page.js: Define page content. Create a new page (e.g., app/about/page.js creates a <your-domain>/about page)
  layout.js: Define wrapper around pages. Create a new layout that wraps sibling and nested pages
  not-found.js: Define "Not Found" fallback page. Fallback page for "Not Found" errors (thrown by sibling or nested pages or layouts)
  error.js: Define "Error" fallback page. Fallback page for other errors (thrown by sibling pages or nested pages or layouts)
  loading.js => Fallback page which is shown whilst sibling or nested pages (or layouts) are fetching data
  route.js => Allows you to create an API route (i.e., a page which does NOT return JSX code but instead data, e.g., in the JSON format)
- Adding Another Route via the Filesystem: /about - create a folder and a file called page.js. So now we don't just have that root page.JS file, which is responsible for the homepage, the starting page, but we also have this nested page.JS file in this about folder. And that will be responsible for rendering the content of the about route.
  So that is how we can add a new route by adding a folder with a page.JS file inside of it.

### Navigating Between Pages:

- We dont longer have Single page application with <a> therefor use Link. Page / HTML content is rendered on the server & sent to the client.
- With NextJS, you would build full-stack applications where the content is rendered on the backend, and therefore it makes sense that it's no longer happening in the front-end on the client side.
- Instead, behind the scenes, the content of the next page will still be rendered on the server, but it'll then be sent to the client, and there it'll be handled by client-side JavaScript code to update what we see on the screen.
- When a user first visits a page by entering the URL directly into the browser, Next.js renders the page on the server and sends the finished HTML page to the user's browser. This ensures that the user sees the content quickly and improves search engine optimization.
- However, once the user is on the page, if they navigate around by clicking links, Next.js allows the application to behave like a single-page application (SPA). This means that instead of loading entire new pages from the server, Next.js updates the user interface dynamically using client-side JavaScript code. This provides a smoother and faster user experience, similar to traditional web applications.
- So, with Next.js, when you first visit a page, it's pre-rendered on the server, meaning the full page is created before it reaches your browser. This ensures you get a complete page right away. But, after that initial visit, when you navigate within the site, the updates are done using client-side JavaScript. This gives you a highly interactive experience, similar to apps, without having to reload the entire page. So, whether you're exploring the site for the first time or moving around within it, you get the benefits of both a fast initial load and a dynamic, responsive experience.
- Working with Pages & Layouts: There also is a layout JS file, and that's actually another reserved file name, another special type of file, where the page JS file defines the content of a page, the layout JS file defines the shell around one or more pages. It's the, as the name implies, layout, into which a page will be rendered. Need a root layout.js file. metadata is reserved name, with title and description of the page. Head is set with the metadata. Children is the content of the page, because the layout is the wrapper around the page. Layout is the wrapper, page is the actual content, the content that will be injected here.

### Reserved File Names, Custom Components & How To Organize A NextJS Project

- icon.png, inn app will be used as a favicon.
- global.css: CSS Modules are useful for component-level styles. But if you want some CSS to be loaded by every page, Next.js has support for that as well.
- So as you can tell by now, the app folder is very important. In there, you define your routes by adding folders, and you have some reserved file names like page.js, icon.png, or layout.js, which then simply unlock different features, you could say. And for example, a route layout is needed just as you need page.js files to really set up a route
- We are still working with React, with compnents and JSX, just enhanced with some extra features.

### Configuring Dynamic Routes & Using Route Parameters

- Dynamic route: a route which we only define once, but which is then capable of rendering different pages for different blog posts. Can
- And in NextJS, we can create such a dynamic route by adding a nested folder where we use square brackets. This is a special syntax supported by NextJS, where you then put any placeholder, any identifier of your choice between those square brackets, for example, slug, or whatever you want.
- This square bracket thing here simply tells NextJS that we want to have some path segment after blog in this case, but that we don't know the exact value of the segment yet. And it's then this placeholder, this identifier slug that will give us access to the concrete value that we do get when that route is loaded.
- 

### Exercise ()

-
