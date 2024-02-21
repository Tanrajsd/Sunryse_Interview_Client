import {Routes, Route} from "react-router-dom";

import Login from "./screens/login/Login";
import Register from "./screens/register/Register";
import Count from "./screens/count/Count";

import "./App.css";

function App() {
  return (
    <div className="contentContainer">
      <Routes>
        <Route path="/" element={<Count />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </div>
  );
}

export default App;
