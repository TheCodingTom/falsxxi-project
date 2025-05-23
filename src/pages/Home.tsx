// import guy from "../images/guy.png";
import test from "../images/test.png";
import blacklogo from "../images/blacklogo.png";

function Home() {
  return (
    <>
      <div className="logo-container">
        <img className="main-logo" src={blacklogo} alt="black logo" />
      </div>
      <div className="image-container">
        <img src={test} className="main-image" alt="image of a tattoed guy" />
      </div>
      <div className="image-container">
        <img src={test} className="main-image" alt="image of a tattoed guy" />
      </div>
    </>
  );
}

export default Home;
