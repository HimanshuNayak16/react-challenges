import { useState } from "react";
import "./App.css";

function App() {
  const [show, setShow] = useState(true);

  return (
    <div className="container">
      <button onClick={() => setShow(!show)}>{show ? "Hide" : "Show"}</button>
      {show && <h1 className="title">Welcome to React Challenges</h1>}
    </div>
  );
}

export default App;
