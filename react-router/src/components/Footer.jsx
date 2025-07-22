import React from "react";
import { Link } from "react-router-dom";
import "../App.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-top">
          <div className="footer-logo">
            <Link to="/">
              <img
                src="https://alexharkness.com/wp-content/uploads/2020/06/logo-2.png"
                alt="Logo"
              />
            </Link>
          </div>
          <div className="footer-links">
            <div className="footer-section">
              <h2>Resources</h2>
              <ul>
                <li>
                  <Link to="/">Home</Link>
                </li>
                <li>
                  <Link to="/about">About</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h2>Follow us</h2>
              <ul>
                <li>
                  <a
                    href="https://github.com/hiteshchoudhary"
                    target="_blank"
                    rel="noreferrer"
                  >
                    Github
                  </a>
                </li>
                <li>
                  <Link to="/">Discord</Link>
                </li>
              </ul>
            </div>
            <div className="footer-section">
              <h2>Legal</h2>
              <ul>
                <li>
                  <Link to="#">Privacy Policy</Link>
                </li>
                <li>
                  <Link to="#">Terms & Conditions</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr className="footer-divider" />
        <div className="footer-bottom">
          <span>
            © 2023{" "}
            <a href="https://hiteshchoudhary.com/" target="_blank">
              hiteshchoudhary
            </a>
            . All Rights Reserved.
          </span>
          <div className="footer-social">
            {/* You can replace these spans with <img> or <svg> icons */}
            <Link to="#" aria-label="Facebook">
              <span>Fb</span>
            </Link>
            <Link to="#" aria-label="Discord">
              <span>Dc</span>
            </Link>
            <Link to="#" aria-label="Twitter">
              <span>Tw</span>
            </Link>
            <Link to="#" aria-label="GitHub">
              <span>Gh</span>
            </Link>
            <Link to="#" aria-label="Dribbble">
              <span>Dr</span>
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
