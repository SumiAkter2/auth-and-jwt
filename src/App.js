import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Home/Navigation";
import LogIn from "./Components/LogIn/LogIn";
import SignIn from "./Components/LogIn/SignIn";

function App() {
  return (
    <div>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signUp" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
