import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLists from "./components/UserLists";
import AddFormUser from "./components/AddFormUser";
import UpdateFormUser from "./components/UpdateFormUser";

Route;
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLists />} />
          <Route path="/createuser" element={<AddFormUser />} />
          <Route path="/updateuser/:slug" element={<UpdateFormUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
