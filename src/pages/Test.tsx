import guy from "../images/guy.png";

import background from "../images/flames.jpg";

import whitelogo from "../images/whitelogo.png";

function Test() {
  return (
    <div id="wrapper">
      <div id="a" className="first-panel">
        <img src={guy} className="main-image" alt="image of a tattoed guy" />
      </div>

      <div id="b" className="panels">
        <h1 style={{ color: "white" }}>Stupido</h1>
      </div>

      <div
        id="c"
        className="panels"
        style={{
          backgroundImage: `url(${background})`,
        }}
      >
        {/* <h1 style={{ color: "white" }}>I RAGAZZI</h1> */}
        <img className="main-logo" src={whitelogo} alt="black logo" />
      </div>
      <div id="d" className="panels">
        Scrolling-Panel 3
      </div>
    </div>
  );
}

export default Test;
