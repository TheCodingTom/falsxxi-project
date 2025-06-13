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
        textAlign: "center",
      }}
    >
      <p>
        &copy; {new Date().getFullYear()} FALSXXI. Tutti i diritti riservati.
      </p>
    </footer>
  );
}

export default Footer;
