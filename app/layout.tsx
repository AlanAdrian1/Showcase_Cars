"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faTwitter, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Layout({ children }) {
  return (
    <html lang="en">
      <head>
      <link rel="icon" href="/favicon.ico" />
        <title>Showcase Cars</title>
      </head>
      <body>
        <header style={{ padding: "20px", backgroundColor: "#0070f3", color: "#fff", textAlign: "center" }}>
          <h1>Showcase Cars</h1>
        </header>

        <main>{children}</main>

        <footer style={{ padding: "20px", backgroundColor: "#333", color: "#fff", textAlign: "center", marginTop: "20px" }}>
          <div style={{ marginBottom: "10px" }}>Follow us on:</div>
          <div style={{ display: "flex", justifyContent: "center", gap: "20px", alignItems: "center" }}>
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
              <FontAwesomeIcon icon={faFacebook} size="2x" />
            </a>
            <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" style={{ color: "#fff" }}>
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </a>
          </div>
          <div style={{ marginTop: "20px" }}>FAQ | Contact Us</div>
        </footer>

        <style jsx>{`
          a {
            transition: transform 0.2s;
          }
          a:hover {
            transform: scale(1.1);
          }
        `}</style>
      </body>
    </html>
  );
};

