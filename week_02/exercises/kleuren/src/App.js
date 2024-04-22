import "./App.css";
import Lijst from "./components/Lijst";
import { useState } from "react";

function App() {
  let startcolor = ["black"];
  const [colors, setColors] = useState(startcolor);
  return (
    <div className="App">
      <Lijst setColors={setColors} colors={colors} />
    </div>
  );
}

export default App;
