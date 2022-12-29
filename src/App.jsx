import React, { useState } from "react";
import { Navbar, Header, Main, Footer } from "./Components/index";
import "./index.css";
const App = () => {
  const [darkToggle, setDarkToggle] = useState(true);
  return (
    <div
      className={`w-[375px] h-[812px] scale-75 rounded-3xl border-2 ${
        darkToggle
          ? "bg-slate-900 text-slate-200"
          : "border-slate-400 bg-slate-200"
      } border-slate-400 `}
    >
      <Navbar darkToggle={darkToggle} />
      <Header setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
      <Main darkToggle={darkToggle} />
      <Footer darkToggle={darkToggle} />
    </div>
  );
};

export default App;
