import React from "react";
import { useUI } from "../store/useUI";

const Header = () => {
  const { language, toggleLanguage } = useUI();

  return (
    <header>
      <div className="d-flex align-center p-40" style={{justifyContent: "space-around"}}>
        <div className="d-flex align-center">
          <img width={40} height={40} src="/img/logo.svg" alt="logo" />
          <span className="text-uppercase">Logo</span>
        </div>
        <nav className="flex gap-4 text-sm">
          <a className="text-blue-600 border-b" href="#">
            Home
          </a>
          <a href="#">О школе</a>
          <a href="#">Обучение</a>
          <a href="#">Правила</a>
          <a href="#">Новости</a>
          <a href="#">Поддержка</a>
        </nav>
        <div className="flex items-center gap-4">
          <img src="/img/search.svg" alt="" />
          <button onClick={toggleLanguage}>
            {language === "Русский" ? "РУССКИЙ" : "Английский"}
          </button>
          <button>
            <img src="/img/sun.svg" alt="sun" />
          </button>
          <button>Связаться с нами</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
