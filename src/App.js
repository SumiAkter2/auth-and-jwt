import "bootstrap/dist/css/bootstrap.min.css";
import { Route, Routes } from "react-router-dom";
import Home from "./Components/Home/Home";
import Navigation from "./Components/Home/Navigation";
import Loading from "./Components/Loading/Loading";
import LogIn from "./Components/LogIn/LogIn";
import SignIn from "./Components/LogIn/SignIn";
import AllUsers from "./Components/Users/AllUsers";
import UserInfo from "./Components/Users/UserInfo";
import RequireAuth from "./RequireAuth/RequireAuth";

function App() {
  return (
    <div>
      <Navigation />

      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/users" element={<AllUsers />}></Route>
        <Route
          path="/user/:userId"
          element={
            <RequireAuth>
              <UserInfo />
            </RequireAuth>
          }
        ></Route>
        <Route path="/login" element={<LogIn />}></Route>
        <Route path="/signUp" element={<SignIn />}></Route>
      </Routes>
    </div>
  );
}

export default App;
