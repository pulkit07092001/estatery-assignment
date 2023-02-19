import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-main">
        <div className="footer-logo">
          <i class="fa-solid fa-building estatery"></i> Estatery
        </div>
        <div className="footer-section">
          <div className="footer-subsection">
            <h2 className="footer-subsection-title">SELL A HOME</h2>
            <ul className="footer-subsection-content">
              <li>Request an offer</li>
              <li>Pricing</li>
              <li>Reviews</li>
              <li>Stories</li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h2 className="footer-subsection-title">BUY, RENT AND SELL</h2>
            <ul className="footer-subsection-content">
              <li>Buy and sell properties</li>
              <li>Rent Home</li>
              <li>Builder trade-up</li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h2 className="footer-subsection-title">ABOUT</h2>
            <ul className="footer-subsection-content">
              <li>Company</li>
              <li>How it works</li>
              <li>Contact</li>
              <li>Investors</li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h2 className="footer-subsection-title">BUY A HOME</h2>
            <ul className="footer-subsection-content">
              <li>Buy</li>
              <li>Finance</li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h2 className="footer-subsection-title">TERMS & PRIVACY</h2>
            <ul className="footer-subsection-content">
              <li>Trust & Safety</li>
              <li>Terms of Service</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="footer-subsection">
            <h2 className="footer-subsection-title">RESOURCES</h2>
            <ul className="footer-subsection-content">
              <li>Blog</li>
              <li>Guides</li>
              <li>FAQ</li>
              <li>Help Center</li>
            </ul>
          </div>
        </div>{" "}
      </div>
      <div className="footer-last">
        <div className="copyright">
          <i class="fa-regular fa-copyright"></i> 2023 Estatery. All rights
          reserved.
        </div>
        <div className="socials">
          <ul>
            <li className="footer-socials-logo">
              <i class="fa-brands fa-facebook"></i>
            </li>
            <li className="footer-socials-logo">
              <i class="fa-brands fa-instagram"></i>
            </li>
            <li className="footer-socials-logo">
              <i class="fa-brands fa-twitter"></i>
            </li>
            <li className="footer-socials-logo">
              <i class="fa-brands fa-linkedin"></i>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
