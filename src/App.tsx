import { BrowserRouter, Outlet, Route, Routes } from "react-router";
import "./App.css";

import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Contact from "./pages/Contact";
import Dropdown from "./components/Dropdown";
import Home from "./pages/Home";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

const DropdownLayout = () => {
  return (
    <div className="page-wrapper">
      <Dropdown />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

function App() {
  return (
    <>
      <BrowserRouter>
        <ScrollToTop />
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
