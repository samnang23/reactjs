import { useState } from "react";
import "./App.css";
import Login from "./login/Login";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <Login />
    </div>
  );
}

export default App;
