import { Route, Routes } from "react-router-dom";
import "./App.css";
import Contacts from "./pages/components/Contacts";
import Home from "./pages/components/Home";
import NavBar from "./pages/components/NavBar";

function App() {
  return (
    <div className="App">
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contacts" element={<Contacts />}></Route>
      </Routes>
    </div>
  );
}

export default App;
