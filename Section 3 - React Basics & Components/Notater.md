## REACT BASICS & WORKING WITH COMPONENTS

#### SPA:

- First file to execute is index.js
- index.html is the single and only html page that is loaded
- Is a single page application, because of only one html page that is rendered.

#### JSX:

- JavaScript XML(HTML is XML)
- Mye mindre kodelinjer å bruke jsx fremfor ren javascript kode.

#### Components:

- One file , per component.
- A component in react , is just a javascript function, that return HTML code.
- Splitting big component into multiple compinents is a nice thing.

#### Props:

- Possible to reuse a component with differents values, with props.
- Components can't just use data stored in other components, have to use attribute props.
- Props stand for property. export default function (props).

#### Props example:

- For the class:
  `ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />`
- Each component receives the same props (id, title, price & description) with different values.
  This allows you to use the same component with different data - a key React concept (and one of the main reasons for using components as building blocks).
- In order to use the prop data in the receiving component, a props argument should be accepted in that function: function Product(props) {} and then use props.title and so on.

#### Summary:

- React is all about components.
- Props for passing data in components.
