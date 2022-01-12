import "./styles.css";
import Dropdown from "./Dropdown";
import { useState } from "react";
export default function App() {
  const [selected, setSelected] = useState("Choose One");

  const options = ["React", "Vue", "Angular"];

  return (
    <div className="App container">
      {/* custom dropdown menu */}
      <Dropdown
        selected={selected}
        setSelected={setSelected}
        options={options}
      />
    </div>
  );
}
