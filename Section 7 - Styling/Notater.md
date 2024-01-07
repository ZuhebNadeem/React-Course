## STYLING REACT COMPONENTS

#### Inline Styles

- Inline styles takes the highest priority, but should not use that. Will overwrite the css classes

#### CSS Classes Dynamically

- `<div className={`form-control ${!isValid ? "invalid" : ""}`}>`

- this state can then be used to add or remove the CSS class dynamically.

#### Styled Components

- Styled to only one component. Get styled scoped.
- Style Components is a package - helps you build components which has style, that only affect to the component that is attached to.
- Setting all the style directly -> See Button.js (ukommentert kode)
- Blir en del rotete i en og samme fil, blander logikk og style.

#### CSS Modules

- import styles from "./Button.module.css"; className={styles.button}
- css has to be named: Name.module.css
- Will create uniqe classes , so its scoped. Scoped to the component we use them.
- style.className
