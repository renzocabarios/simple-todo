import { Routes, Route, Outlet, Link } from "react-router-dom";
import { Login } from "./views";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Login />}></Route>
      </Routes>
    </>
  );
}

export default App;
