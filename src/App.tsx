import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";

import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Dropdown from "./components/Dropdown";
import Home from "./pages/Home";
import { app, db } from "./config/firebaseConfig";

const DropdownLayout = () => {
  return (
    <>
      <Dropdown />
      <Outlet />
    </>
  );
};

function App() {
  // console.log(app);
  // console.log("db :>> ", db);
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DropdownLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/membership" element={<Membership />} />
            <Route path="/events" element={<Events />} />
            <Route path="/contact" element={<Contact />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
