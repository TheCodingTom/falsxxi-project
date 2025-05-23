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
    <Sheet>
      <SheetTrigger style={{ padding: "20px" }}>
        <TiThMenu style={{ fontSize: "x-large" }} />
      </SheetTrigger>
      <SheetContent style={{ height: "40vh" }}>
        <SheetHeader>
          <NavLink to={"/"}>Home</NavLink>
          <NavLink to={"/membership"}>Tesseramento</NavLink>
          <NavLink to={"/events"}>Events</NavLink>
          <NavLink to={"/contact"}>Contact</NavLink>
          <SheetDescription></SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Dropdown;
