## SECTION 7 - DEBUGGING REACT APPS

Find and fix errors:

- Making sense of React Error messages.
- Finding logical errors via the Browser DevTools and Debugger
- Enabling React´s Strict Mode
- Using the React DevTools for Application analysis & manipulation. (Install it and see what you can do with it).

### Understanding React Error Messages

- at Results (Results.jsx:8:16): Component Result from line 8. 16 is the column.
- use return, for å stoppe at kodene fortsetter nedover. Stopper her da.

### Using the Browser Debugger & Breakpoints (Logical error)

- I browser -> Sources, også filen. Lag en breakpoint og den vil stoppe der når du gjør ting på nettsiden.

### Understanding React's "Strict Mode"

- Catch certain problem.
- Will execute every component functions twice, only in local. StrictMode wont do it in prod, only during development.
- Thanks to StrictMode being enabled and wrapped around my entire app, this error can be seen immediately.

### Using the React DevTools (Browser Extension)

- Browser -> React Tab Tools -> Components: If you hover over one of these components, it's also highlighted on the left. So you quickly see which part of the UI is controlled and rendered by which component, which can be very useful for analyzing and understanding more complex component trees, and more complex user interfaces.
- But if you now click on one of those components, you also learn more about that component. For example, you also see which props a component accepts, and which type of prop values you're getting there.
- And you can even edit those properties and see those changes reflected in the UI, in case you wanna play around with those values, and simply see how different values lead to different results.
- 