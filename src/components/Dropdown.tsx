import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";

function Dropdown() {
  return (
    <div className="dropdown-container">
      <Sheet>
        <SheetTrigger style={{ padding: "20px" }}>
          <TiThMenu style={{ fontSize: "x-large" }} />
        </SheetTrigger>
        <SheetContent style={{ height: "40vh" }}>
          <div className="navbar-container">
            <SheetTitle>
              <NavLink to={"/"}>Statement</NavLink>
            </SheetTitle>
            <SheetTitle>
              <NavLink to={"/membership"}>Tesseramento</NavLink>
            </SheetTitle>
          </div>
          <div className="navbar-container">
            <SheetTitle>
              <NavLink to={"/events"}>Events</NavLink>
            </SheetTitle>
            <SheetTitle>
              <NavLink to={"/contact"}>Contact</NavLink>
            </SheetTitle>
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Dropdown;
