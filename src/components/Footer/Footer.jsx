import React from "react";
import "./footer.css";
import { NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const {t} = useTranslation();
  return (
    <footer>
      <div className="footer-container">
        <section className="footer-first">
          <h3>
            <img src="/img/politex.png" alt="logo" className="logo" />
            Politexnikumi
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
          <h3>{t("home.fast-links")}</h3>

          <ul className="footer-navs">
            <NavLink className="f-navs-a" to="/about">{t("texnikum")}</NavLink>
            <NavLink className="f-navs-a" to="/education">{t("talim")}</NavLink>
            <nav>
              <NavLink className="f-navs-a" to="/news">{t("news-event")}</NavLink> 
            </nav>
            <NavLink className="f-navs-a" to="/support">{t("jardem")}</NavLink>
            <NavLink className="f-navs-a" to="/rules">{t("rules-doc")}</NavLink>
          </ul>
        </section>

        <section className="footer-third">
          <h3>{t("home.contact-us")}</h3>
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
          <p>© 2025 Texnikum. Все права защищены.</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
