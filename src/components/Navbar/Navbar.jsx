import React, { useState, useEffect } from "react";
import "./Navbar.css";
import { Link, NavLink } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { ActionIcon, Button, Menu, Select } from "@mantine/core";
import "./Toggle.css";
import { MdOutlineDarkMode } from "react-icons/md";
import { FiSun } from "react-icons/fi";
import { Languages } from "lucide-react";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const { t, i18n } = useTranslation();

  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);


  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  const languages = [
    { value: "qr", label: "QARAQALPAQ" },
    { value: "ru", label: "РУССКИЙ" },
    { value: "eng", label: "ENGLISH" },
    { value: "uz", label: "UZBEK" },
  ];


  return (
    <header>
      <nav className="navbar">
        <div className="navbar-left">
          <button className="burger-btn" onClick={toggleMenu}>
            <img src="/img/menu.svg" alt="menu" />
          </button>
          <Link to="/" className="nav-logo-icon">
            <img src="/img/politex.png" alt="" className="logo" />
          </Link>
          <Link className="nav-logo" to="/">Politexnikum</Link>
        </div>

        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {["/", "/about", "/lessons", "/education", "/rules", "/news", "/support"].map((path, idx) => (
            <li key={idx}>
              <NavLink
                to={path}
                className={({ isActive }) => (isActive ? "nav-item active" : "nav-item")}
                onClick={() => setIsMenuOpen(false)}
              >
                {t(["Úy", "Texnikum", "Sabaqliq", "Tálim", "Qaǵiydalar", "Jańaliqlar", "Jardem"][idx])}
              </NavLink>
            </li>
          ))}
        </ul>
        <div className="navbar-right">
          <div style={{ display: "flex", alignItems: "center", gap: "8px" }}>
            <Menu shadow="md" width={120} >
              <Menu.Target>
                <Button variant="subtle" p={4}>
                  <Languages size={20} />
                </Button>
              </Menu.Target>

              <Menu.Dropdown>
                {languages.map((lang) => (
                  <Menu.Item
                    key={lang.value}
                    onClick={() => i18n.changeLanguage(lang.value)}
                  >
                    {lang.label}
                  </Menu.Item>
                ))}
              </Menu.Dropdown>
            </Menu>
          </div>

          <button className="nav-sun" onClick={toggleTheme}>
            {theme === "light" ? (

              <ActionIcon
                variant="light"
                color="black"
                size="lg"
                radius="md"
                style={{ transition: 'all 0.2s' }}
              >
                <MdOutlineDarkMode size={20} />
              </ActionIcon>
            ) : (
              <ActionIcon
                color="gray"
                size="lg"
                radius="md"
                style={{ transition: 'all 0.2s' }}
              >
                <FiSun size={20} />
              </ActionIcon>
            )}
          </button>

          <Link className="nav-call" to="/login">
            {t("Kiriw")}
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navbar;
