import guy from "../images/guy.png";
import blacklogo from "../images/blacklogo.png";
import Dropdown from "@/components/Dropdown";

function Test() {
  return (
    <div id="wrapper">
      <div className="logo-container">
        <img className="main-logo" src={blacklogo} alt="black logo" />
        <Dropdown />
      </div>
      <div id="a" className="first-panel">
        <img src={guy} className="main-image" alt="image of a tattoed guy" />
      </div>

      <div id="b" className="panels">
        <h1 style={{ color: "white" }}>Stupido</h1>
      </div>

      <div id="c" className="panels">
        Scrolling-Panel 2
      </div>
      <div id="d" className="panels">
        Scrolling-Panel 3
      </div>
    </div>
  );
}

export default Test;
