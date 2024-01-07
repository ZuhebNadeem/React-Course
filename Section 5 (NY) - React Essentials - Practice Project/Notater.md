## SECTION 5: REACT ESSENTIALS - PRACTICE PROJECT

Practice what you learned:

- Build an "Investment Calculator" Web App
- Build, configure & combine components
- Manage application state
- Output List & Conditional Content

### Eksempel med useState og onChange function

const [userInput, setUserInput] = useState({
initialInvestMent: 10000,
annualInvestment: 1200,
expectedeturn: 6,
duration: 10,
});

function handleChange(inputIdentifier, newValue) {
setUserInput((prevUserInput) => {
return {
...prevUserInput,
[inputIdentifier]: +newValue,
};
});
}

- The initial state is set to an object with default values.
- The handleChange function takes two parameters: inputIdentifier (a key in the userInput object) and newValue (the new value to be set).
- The spread operator (...) is used to create a shallow copy of the previous state, and the specified property (inputIdentifier) is updated with the new value.