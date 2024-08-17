import {Routes, Route} from "react-router-dom";

import Home from "./screens/home/Home";

import "./App.css";

function App() {
  return (
    <div className="contentContainer">
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </div>
  );
}

export default App;
