import Headers from "./components/Headers";
import Meals from "./components/Meals";
import { CartContextProvider } from "./store/CartContext";

function App() {
  return (
    <CartContextProvider>
      <Headers />
      <Meals />
    </CartContextProvider>
  );
}

export default App;
