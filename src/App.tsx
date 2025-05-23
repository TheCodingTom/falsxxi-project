import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";

import Test from "./pages/Test";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Dropdown from "./components/Dropdown";

const DropdownLayout = () => {
  return (
    <>
      <Dropdown />
      <Outlet />
    </>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<DropdownLayout />}>
            <Route path="/" element={<Test />} />
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
