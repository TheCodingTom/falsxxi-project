import { NavLink } from "react-router";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "#161616",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} falsxxi. Tutti i diritti riservati.
      </p>

      <div
        className="footer-navbar"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <NavLink className="footer-link" to="/">
          Statement
        </NavLink>
        <NavLink className="footer-link" to="/membership">
          Tesseramento
        </NavLink>
        <NavLink className="footer-link" to="/events">
          Events
        </NavLink>
        <NavLink className="footer-link" to="/contact">
          Contact
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
