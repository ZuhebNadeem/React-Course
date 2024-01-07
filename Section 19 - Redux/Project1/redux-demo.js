const redux = require("redux");

//Reducer
const counterReducer = (state = { counter: 0 }, action) => {
  //This will run the first time store is created

  if (action.type === "increment") {
    return {
      counter: state.counter + 1, // state is the exisiting state
    };
  }
  if (action.type === "decrement") {
    return {
      counter: state.counter - 1, // state is the exisiting state
    };
  }
  return state;
};

const store = redux.createStore(counterReducer);

//Subscriber
const counterSubscriber = () => {
  const latesteState = store.getState();
  console.log(latesteState);
};

store.subscribe(counterSubscriber);

//Action(Dispatch)
store.dispatch({ type: "increment" });
store.dispatch({ type: "decrement" });
