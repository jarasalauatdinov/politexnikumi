import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { NavLink, useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Select } from "@mantine/core";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const languages = [
    { value: "ru", label: "RU" },
    { value: "en", label: "ENG" },
    { value: "qr", label: "QR" },
    { value: "uz", label: "UZ" },
  ];

  const handleAdminLogin = () => {
    const token = localStorage.getItem("adminToken");
    if (token) {
      navigate("/admin");
    } else {
      navigate("/login");
    }
  }

  return (
    <header>
      <div className="container">
        <nav className="navbar">
          <div className="navbar-left">
            <button className="burger-btn" onClick={toggleMenu}>
              <img src="/img/menu.svg" alt="menu" />
            </button>
            <img src="/img/logo.svg" alt="" className="logo" />
            <span>Politexnikum</span>
          </div>

          <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
            <li>
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Home")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t("О школе")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/lessons"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                {t("Расписание")}
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/education"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Обучение
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/rules"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Правила
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/news"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Новости
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/support"
                className={({ isActive }) =>
                  isActive ? "nav-item active" : "nav-item"
                }
                onClick={() => setIsMenuOpen(false)}
              >
                Поддержка
              </NavLink>
            </li>
          </ul>

          <div className="navbar-right">
            <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
              <Select
                value={i18n.language}
                onChange={(val) => i18n.changeLanguage(val)}
                data={languages}
                size="sm"
                radius="md"
                styles={{
                  input: {
                    fontWeight: 500,
                    minWidth: 90,
                    textAlign: "center",
                  },
                }}
              />
            </div>

            <button className="nav-sun" onClick={toggleTheme}>
              {theme === "light" ? (
                <img src="/img/sun.svg"  />
              ) : (
                <img src="/img/dark.svg"  className="dark-theme"/>
              )}
            </button>

            <button className="nav-call" onClick={handleAdminLogin}>{t("login")}</button>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
