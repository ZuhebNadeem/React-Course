## TIME TO PRACTICE: A COMPLETE PRACTICE PROJECT 2

- `const inputUser = {
id: Math.random().toString(),
userName: userName,
age: age,
};`
  `props.setUsers((oldArray) => [...oldArray, inputUser]);`

- inputUser får verdier fra inputfeltet fordi userName og age er useState verdier. Man lager et objekt når man ønsker å sende flere verdier til props metoden.
- setUsers er en prop og en setState verdi i App, som kjøres når denne metoden kjøres og oppdaterer arrayet.

- htmlFor for labels and input id, for screenreaders.
- props.children: give us the content which is passed between the open and close tag for the component where props.children is called.
- input value={useState value} , can then change the useState and the input is updated.
