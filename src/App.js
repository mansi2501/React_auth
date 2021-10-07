import { Route, Switch } from "react-router";
import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import Allusers from "./pages/AllUser/AllUsers";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import SignUp from "./pages/SignUp/SignUp";
import EditUser from "./pages/EditUser/EditUser";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Switch>
        <Route path="/" exact component={Home} />
        <Route path="/signin" component={Login} />
        <Route path="/signup" component={SignUp} />
        <Route path="/allusers" component={Allusers} />
        <Route path="/edituser/:id" component={EditUser} />
      </Switch>
      <Footer />
    </div>
  );
}

export default App;
