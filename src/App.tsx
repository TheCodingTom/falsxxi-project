import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";

import Test from "./pages/Test";
import Membership from "./pages/Membership";
import Events from "./pages/Events";
import Contact from "./pages/Contact";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Test />} />
          <Route path="/membership" element={<Membership />} />
          <Route path="/events" element={<Events />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
