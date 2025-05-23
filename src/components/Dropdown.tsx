import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";

import { TiThMenu } from "react-icons/ti";

function Dropdown() {
  return (
    <Sheet>
      <SheetTrigger style={{ padding: "20px" }}>
        <TiThMenu style={{ fontSize: "x-large" }} />
      </SheetTrigger>
      <SheetContent style={{ height: "40vh" }}>
        <SheetHeader>
          <SheetTitle></SheetTitle>
          <SheetDescription style={{ fontSize: "50px" }}>
            MESSI E ROLANDO ANDANDO HARD
          </SheetDescription>
        </SheetHeader>
      </SheetContent>
    </Sheet>
  );
}

export default Dropdown;
