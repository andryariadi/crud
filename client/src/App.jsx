import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import UserLists from "./components/UserLists";
import FormUser from "./components/FormUser";
Route;
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<UserLists />} />
          <Route path="/createuser" element={<FormUser />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
