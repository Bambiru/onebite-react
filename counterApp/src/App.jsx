import Viewer from "./components/Viewer";
import "./App.css";
import Controller from "./components/Controller";
import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  const onClickButton = (value) => {
    setCount(count + value);
  };

  return (
    <div className="App">
      <Viewer count={count} />
      <Controller onClickButton={onClickButton} />
    </div>
  );
}

export default App;
