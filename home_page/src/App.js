import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import "./App.scss";

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Games from "./pages/Games";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Navbar from "./components/Navbar/Navbar";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="/games" element={<Games />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
