import { Outlet } from "react-router-dom";
import Navbar from "./Navbar/Navbar";
import Footer from "./Footer/Footer";
import ScrollToTop from "./Navbar/ScrollToTop";
import { useState } from "react";
import { useTranslation } from "react-i18next";

const Layout = () => {
  const [darkMode, setDarkMode] = useState(false);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState(i18n.language);

  const handleLanguageChange = (lang) => {
    i18n.changeLanguage(lang);
    setCurrentLanguage(lang);
  };

  return (
    <>
      <Navbar darkMode={darkMode} onLanguageChange={handleLanguageChange} setDarkMode={setDarkMode} />
      <ScrollToTop />
      <Outlet language={currentLanguage} context={{ darkMode, setDarkMode }} />
      <Footer darkMode={darkMode} />
    </>
  );
};

export default Layout;
