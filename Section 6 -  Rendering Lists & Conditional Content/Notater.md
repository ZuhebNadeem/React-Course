## RENDERING LISTS & CONDITIONAL CONTENT

#### Dynamic Lists of content:

- `setExpenses((prevExpense) => { return [expense, ...prevExpense]; }) `

- Without key in List: All items in a list is visited and updated. And the old first item will be overwritten with new first item, and the state changes will be lost.
- With key in List: React can uniqely identify all the items, and is therefor aware of how long the array is and where which item should be placed.

#### Showing content only when condition are met:

- `{filterExpendes.length === 0 && <p>No expense found</p>}`
- After && is returned if it is true. And then move to next line in the code.
- Can store it in a const and use if and else, and return the const to jsx.

- `<ExpenseForm onSaveExpenseData={saveExpenseDataHandler} setBtn={setClickedBtn} />`

- onSaveExpenseData er en metode i ExpenseForm, og når man tar props.onSaveExpenseData kjører metoden saveExpenseDataHandler
- samme gjelder for btn: Når man tar props.setBtn kjøres setClickedBtn i fila der ExpenseForm kalles
