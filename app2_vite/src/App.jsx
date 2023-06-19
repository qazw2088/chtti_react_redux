import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Counter1 from "./components/Counter1";
import Counter2 from "./components/Counter2";
import Counter3 from "./components/Counter3";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      {/* <Counter1 /> */}
      {/* <Counter2 /> */}
      <Counter3 />
    </>
  );
}

export default App;
