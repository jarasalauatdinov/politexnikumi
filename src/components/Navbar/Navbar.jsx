import React from "react";
import "./Navbar.css";

const Navbar = ({theme, setTheme}) => {

    const toogle_mode = ()=>{
        theme == 'light' ? setTheme('dark') : setTheme('light');
    }
  return (
    <div className="navbar">

      <h3 className="d-flex align-center ">
        <img src="/img/logo.svg" alt="" className="logo" />
        Logo
      </h3>
      <ul>
        <li>Home</li>
        <li>О школе</li>
        <li>Обучение</li>
        <li>Правила</li>
        <li>Новости</li>
        <li>Поддержка</li>
      </ul>

      <div className="search-box">
        <input type="text" placeholder="Search" />
        <img src="/img/search.svg" alt="" />
      </div>

      <img onCanPlay={() =>{toogle_mode}} src="/img/sun.svg" alt="" className="toogle-icon"/>
    </div>
  );
};

export default Navbar;
