import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="footer-container">
        <section className="footer-first">
          <h3>
            <img src="/img/logo.svg" alt="logo" className="logo" />
            Politexnikum
          </h3>

          <p>
            Providing quality education since 1998. Developing knowledge,
            creativity, and character.
          </p>

          <div className="footer-contact">
            <img src="/img/facebook.svg" alt="" />
            <img src="/img/instagram.svg" alt="" />
            <img src="/img/twitter.svg" alt="" />
          </div>
        </section>

        <section className="footer-second">
          <h3>Quick Links</h3>

          <ul className="footer-navs">
            <li>About Us</li>
            <li>Education</li>
            <li>News & Events</li>
            <li>Support</li>
            <li>Rules & Documents</li>
          </ul>
        </section>

        <section className="footer-third">
          <h3>Contact Us</h3>
          <div className="footer-location">
            <p>
              <img src="/img/map.svg" alt="" />
              ул. Школьная 123, Город, Страна
            </p>
            <p>
              <img src="/img/call.svg" alt="" />
              +1 234 567 890
            </p>
            <p>
              <img src="/img/email.svg" alt="" />
              info@schoolname.edu
            </p>
          </div>
        </section>
      </div>

      <section className="footer-bottom">
        <div className="footer-end">
          <p>© 2025 Politexnikum. Все права защищены.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
