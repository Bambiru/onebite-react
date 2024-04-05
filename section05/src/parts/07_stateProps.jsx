import "./App.css";
import Bulb from "./components/Bulb";
import Counter from "./components/Counter";

// state, props, 부모컴포넌트가 렌더링이 되면 리렌더링이 된다.

function App() {
  return (
    <>
      <Bulb />
      <Counter />
    </>
  );
}

export default App;
