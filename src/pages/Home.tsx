import guy from "../images/guy.png";

import hotel from "../images/hotel.jpg";

import whitelogo from "../images/whitelogo.png";
import CircularText from "@/components/CircularText";
import pig from "../images/whitepig.png";

function Home() {
  return (
    <>
      <div id="wrapper">
        <main>
          <div id="a" className="first-panel">
            <img
              src={guy}
              className="main-image"
              alt="image of a tattoed guy"
            />
          </div>

          <div id="b" className="panels">
            <div className="statement">
              <div className="logo-text-container">
                <CircularText
                  text="I RAGAZZI*FALSXXI*"
                  onHover="pause"
                  spinDuration={20}
                  className="custom-class"
                />
                <img
                  src={pig}
                  className="pig-logo"
                  alt="logo of a pig smoking a cigar"
                />
              </div>

              <div className="box">
                <p>
                  falsxxi è un collettivo nato nel 2022 con la promessa di
                  animare le Alpi sondriesi. Un esperimento sonoro e culturale
                  che ha preso forma tra le montagne, ma che nel tempo ha
                  trovato casa anche ad altre latitudini. Portiamo in console
                  selezioni che spingono i ritmi più caldi, dal funky italiano
                  alle pulsazioni elettroniche dell’est Europa, attraversando i
                  generi senza perdere mai di vista la pista. Perché si può
                  esplorare, mischiare, osare. Ma si balla sempre.
                </p>
              </div>
            </div>
          </div>

          <div
            id="c"
            className="panels"
            style={{
              backgroundImage: `url(${hotel})`,
            }}
          >
            <img className="main-logo" src={whitelogo} alt="black logo" />
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;
