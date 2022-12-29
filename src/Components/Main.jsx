import React, { useState } from "react";
import Button from "./Button";

const Main = ({ darkToggle }) => {
  const [calc, setCalc] = useState("");
  const [res, setRes] = useState("");
  return (
    <div className="flex flex-col gap-4 px-5 mt-10">
      <span className="text-[40px] text-slate-500 text-end">{calc || "0"}</span>
      <span className="text-[96px] text-end">{res || "0"}</span>
      <Button
        darkToggle={darkToggle}
        calc={calc}
        setCalc={setCalc}
        setRes={setRes}
      />
    </div>
  );
};

export default Main;
