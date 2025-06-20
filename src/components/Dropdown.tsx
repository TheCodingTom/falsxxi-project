import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";
import blacklogo from "../images/blacklogo.png";
import { useState } from "react";

import "../styles/Dropdown.css";

function Dropdown() {
  const [open, setOpen] = useState(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="dropdown-container">
      <div className="logo-container">
        <NavLink to={"/"}>
          <img className="main-logo" src={blacklogo} alt="black logo" />
        </NavLink>
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger style={{ padding: "20px" }}>
          <TiThMenu onClick={toggleOpen} style={{ fontSize: "x-large" }} />
        </SheetTrigger>
        <SheetContent className="dropdown-size">
          <div className="logo-container">
            <img src={blacklogo} className="logo" alt="" />
          </div>
          <div className="navbar-container">
            <div className="navbar-column">
              <SheetTitle>
                <NavLink className="navlink" onClick={toggleOpen} to={"/"}>
                  1. Statement
                </NavLink>
              </SheetTitle>

              <SheetTitle>
                <NavLink
                  className="navlink"
                  onClick={toggleOpen}
                  to={"/membership"}
                >
                  2. Tesseramento
                </NavLink>
              </SheetTitle>
            </div>
            <div className="navbar-column">
              <SheetTitle>
                <NavLink
                  className="navlink"
                  onClick={toggleOpen}
                  to={"/events"}
                >
                  3. Events
                </NavLink>
              </SheetTitle>
              <SheetTitle>
                <NavLink
                  className="navlink"
                  onClick={toggleOpen}
                  to={"/contact"}
                >
                  4. Contact
                </NavLink>
              </SheetTitle>
            </div>
          </div>

          <SheetDescription className="sr-only">
            Dropdown menu with 4 nav links
          </SheetDescription>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Dropdown;
