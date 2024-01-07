## SECTION 6: STYLING REACT COMPONENTS

- Styling with Vanilla CSS
- Scoping styles with CSS Modules
- CSS-in-JS styling with "Styled Components"
- Styling with Tailwind CSS
- Static & Dynamic (Conditional) Styling

### Vanilla CSS

- Have a css file, and import it in a jsx file.
- Can include Vanilla CSS files, one or multiple files.
- CSS code is decoupled from JSX code and you write CSS as you know it.
- Disadvantages: You need to know CSS and Vanilla CSS Styles Are NOT Scoped To Components which they belongs to
- Must use different className, can not use the same in the entire project. They are applied globally and not scoped.
- Inline style: Apply them right to the JSX code. Styles only affect the element to which you add them, but you need to style every element individually and no seperation between CSS & JSX code.
- Dynamic & Conditional Inline Styles: style={{ backgroundColor : emailNotValid ? 'red': 'blue'}}.
- Dynamic & Conditional Styling with CSS Files & CSS Classes: className={emailNotValid ? 'invalid' : undefined}, where invalid is a classname. <label className={`label ${emailNotValid ? 'className' : ''}`}>Label</label>

### CSS Modules

- In Vanilla CSS the CSS code is not scoped to components. CSS rules may clash across components.
- CSS Modules is Vanilla CSS with file-specific scoping.
- file.module.css => use it with className={classes.paragraph}, and classes is from import classes from "./Header.module.css"
- And that's the idea behind CSS modules. Class name is now unique for this component file and therefore for this component, if I add paragraph as a text in another file, in another component, you'll see that this label is not affected by it.
- Advantages: CSS code is decoupled from JSX code. You can write CSS code as you know. CSS code can be written be other developers. CSS classes are scoped to the component (files) which import them => No CSS class name clashes.
- Disadvantages: You may end up with many relatively small CSS files in your project.

### CSS-in-JS styling with "Styled Components"

- The idea behind this popular package is that you do not define your CSS rules and styles in separate CSS files, but also not as inline styles but instead in special components that are built with help of that package.
- const ControlContainer = styled.div` 
display: flex;
flex-direction: column;
gap: 0.5rem;
margin-bottom: 1.5rem;`;
- This overall code will give you a React component that automatically returns a div, that has these styles applied to it. And it will be a div that internally also uses the special children prop so that it can be wrapped around other content.
- A tagged template is like a function which receives this template literal as an input.
- Creating Flexible Components with Styled Components: In addition, they also forward all props you're setting on this styled component to the underlying built-in JSX element. It also forwards all props you're setting, on the styled component here, which, of course, can be super convenient.
- Dynamic & Conditional Styling with Styled Components: <Label invalid={emailNotValid} and in CSS style: color: ${({ invalid }) => (invalid ? '#ef4444' : '#374151')};
- Styled Components: Pseudo Selectors, Nested Rules & Media Queries: Use &. &:hover { background-color: #f0920e;}
- Creating Reusable Components & Component Combinations:

  - I might need those same components with the same styles in other parts of the application as well. And therefore you could consider creating separate component files for such kinds of components.
  - So UI elements that you may reuse in other parts of the application.
  - You make a file, with f.eks. Button style and import and use Button where you need it.
  - You can either outsource reusable components that have a certain styling applied to them, which you might need in different parts of the application, that you might need to reuse in other parts of the application.
  - Looking at style and how we split our components and how we reuse our components.

- Pros: Quick and easy to add. You continue "thinking in React". Styles are scoped to components -> No CSS rule clashes.
- Cons: You need to know CSS. No clean sepeation of React & CSS code. You end up with many selactively small "wrapper" components.

### Tailwind CSS

- Tiny utility classes in html. You dont need to know CSS.
- Predefined CSS rules.
- Tailwind CSS is best used to speed up the development process by writing less code.
- Tailwind: Media Queries & Pseudo Selectors: mb-8 md:mb-16, margin bottom is 8 always and on medium screen and higher(bigger screen) it is 16. hover:bg-amber-500 : I'll add hover colon in front of the utility class that should only be applied if the button is in a hover state. So just as we can use MD and other screen size classes to add certain utility classes only on certain screen sizes, we can use hover or focus colon to only apply certain utility classes if these elements are in a certain state, in this case, if we're hovering over this button.
- Dynamic & Conditional Styling with Tailwind:
  let labelClasses = "block mb-2 text-xs font-bold tracking-wide uppercase";
  if (invalid) {
  labelClasses += " text-red-400";
  } else {
  labelClasses += " text-stone-300";
  }
- mx-auto: To center something.  
- Tailwind CSS: Pros & Cons:
    - Pros: Can create reusable components, to prevent long css classnames. You dont need to know CSS. Rapid development. Suggestion of classnames to use. No style clashes between components since you dont define any CSS rules. Highly configuarable & extensible.  
    - Cons: Lot of CSS classes, more code in JSX code. Long className. Relatively long className values. Any style changes require editing JSX. JSX and styling code in same file. You end up with many relatively small "wrapper" components OR lots of copy & paste, without seperate style component.    
