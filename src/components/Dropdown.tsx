import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { TiThMenu } from "react-icons/ti";
import { NavLink } from "react-router";
import blacklogo from "../images/blacklogo.png";
import { useState } from "react";

// const demoItems = [
//   {
//     link: "#",
//     text: "Home",
//     image: "https://picsum.photos/600/400?random=1",
//   },
//   {
//     link: "#",
//     text: "Tesseramento",
//     image: "https://picsum.photos/600/400?random=2",
//   },
//   {
//     link: "#",
//     text: "Events",
//     image: "https://picsum.photos/600/400?random=3",
//   },
//   {
//     link: "#",
//     text: "Contact",
//     image: "https://picsum.photos/600/400?random=4",
//   },
// ];

function Dropdown() {
  const [open, setOpen] = useState<boolean>(false);

  const toggleOpen = () => {
    setOpen((prev) => !prev);
  };
  return (
    <div className="dropdown-container">
      <div className="logo-container">
        <img className="main-logo" src={blacklogo} alt="black logo" />
      </div>
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger style={{ padding: "20px" }}>
          <TiThMenu onClick={toggleOpen} style={{ fontSize: "x-large" }} />
        </SheetTrigger>
        <SheetContent style={{ height: "40vh" }}>
          <div className="navbar-container">
            <SheetTitle>
              <NavLink onClick={toggleOpen} to={"/"}>
                Statement
              </NavLink>
            </SheetTitle>

            <SheetTitle>
              <NavLink onClick={toggleOpen} to={"/membership"}>
                Tesseramento
              </NavLink>
            </SheetTitle>
          </div>
          <div className="navbar-container">
            <SheetTitle>
              <NavLink onClick={toggleOpen} to={"/events"}>
                Events
              </NavLink>
            </SheetTitle>
            <SheetTitle>
              <NavLink onClick={toggleOpen} to={"/contact"}>
                Contact
              </NavLink>
            </SheetTitle>
          </div>
          {/* <div style={{ height: "600px", position: "relative" }}>
            <FlowingMenu items={demoItems} />
          </div> */}
          ;
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default Dropdown;
