import "./App.css";
import { Route, Routes } from "react-router-dom";
import Navbar from "./component/Navbar";
import Form from "./component/Form";
import Cam from "./component/Complaint";
import login from "./component/login";
import Singup from "./component/singup";

function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path={"/"} Component={login} />
        <Route path={"/singup"} Component={Singup} />
        <Route path={"/home"} Component={Form} />
        <Route path={"/complaint"} Component={Cam} />
      </Routes>
    </div>
  );
}

export default App;
