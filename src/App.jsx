import React, { useState } from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar/Navbar";

function App() {
  const [theme, setTheme] = useState('light')

  return( <div className="container">
    <Navbar theme={theme} setTheme={setTheme}/>
    {/* <Header /> */}
  </div>
  )
}

export default App;
