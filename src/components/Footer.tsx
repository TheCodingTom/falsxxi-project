import { NavLink } from "react-router";

function Footer() {
  return (
    <footer
      className="footer"
      style={{
        backgroundColor: "black",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "2rem",
        color: "white",
        display: "flex",
        justifyContent: "space-between",
        alignItems: "flex-start",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} falsxxi. Tutti i diritti riservati.
      </p>

      {/* Right-side vertical navbar */}
      <div
        className="footer-navbar"
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
        }}
      >
        <NavLink className="footer-link" to="/">
          1. Statement
        </NavLink>
        <NavLink className="footer-link" to="/membership">
          2. Tesseramento
        </NavLink>
        <NavLink className="footer-link" to="/events">
          3. Events
        </NavLink>
        <NavLink className="footer-link" to="/contact">
          4. Contact
        </NavLink>
      </div>
    </footer>
  );
}

export default Footer;
