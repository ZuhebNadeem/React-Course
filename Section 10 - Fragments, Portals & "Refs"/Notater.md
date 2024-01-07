## DIVING DEEPER: WORKING WITH FRAGMENTS, PORTALS & "REFS"

#### Fragments:

- JSX has limitations: You can´t return more than one "root" JSX element (you also can´t store more than one "root" JSX element in a variable). Can only have ONE root.
- Solution: Always wrap adjacent elements, with or React.Fragments or <></>. Many div will creat div chaos, therefor React.Fragments or <></>.

#### Portals:

- Semantically and from a "clean HTML structure" perspective, er det ikke alltid riktig å ha komponenter under hverandre. Fordi det ikke stemmer med hvordan HTML-strukturen bør være. Feks med: Modal, drawers, dialogs osv.
- Løsning: Visning av komponentene under hverandre er fortsatt det samme, men rendered HTML vises annerledes: Kan gjøre det med React Portals.
- So wherever you would normally just use the Component, you can use createPortal to portal, to move that Component's HTML content somewhere else.

#### Refs:

- Can help with: Not updating the state of input(useState set) with every keystroke, when we only need it when we submit the form. Sounds a bit redundant to me.
- With ref we can set up a connection between a HTML element and our JS code.
- Can be used to read data from input. ref={nameInputRef}
- When you change the ref.current property, React does not re-render your component.
