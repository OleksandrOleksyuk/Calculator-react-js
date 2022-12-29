const Button = ({ calc, setCalc, setRes, darkToggle }) => {
  const ops = ["/", "*", "+", "-", "."];

  const upadateCalc = (value) => {
    if (
      (ops.includes(value) && calc === "") ||
      (ops.includes(value) && ops.includes(calc.slice(-1)))
    ) {
      return;
    }
    setCalc(calc + value);
    if (!ops.includes(value)) {
      setRes(eval(calc + value) + "");
    }
  };
  const calculate = () => setCalc(eval(calc) + "");
  const reset = () => {
    setCalc("");
    setRes("");
  };
  const deleteLast = () => {
    if (calc == "") return;
    const value = calc.slice(0, -1);
    setCalc(value);
  };
  const array = [
    "C",
    "DEL",
    "%",
    "/",
    7,
    8,
    9,
    "*",
    4,
    5,
    6,
    "-",
    1,
    2,
    3,
    "+",
    ".",
    0,
    "=",
  ];
  return (
    <div className="grid grid-cols-4 gap-2 text-white">
      {array.map((btn, i) => {
        let color = "bg-cyan-700";
        if (btn === "C" || btn === "DEL" || btn === "%") color = "bg-slate-500";
        if (typeof btn === "number")
          color = `${
            darkToggle ? "bg-slate-700" : "bg-slate-300 text-slate-900"
          }`;
        return (
          <button
            key={i}
            className={`h-[72px] ${
              btn === "=" ? "col-span-2" : "col-span-1"
            } text-2xl ${color} rounded-3xl`}
            value={btn}
            onClick={() => {
              if (btn === "=") return calculate();
              if (btn === "C") return reset();
              if (btn === "DEL") return deleteLast();
              upadateCalc(btn + "");
            }}
          >
            {btn === "/" ? "÷" : btn === "*" ? "x" : btn}
          </button>
        );
      })}
    </div>
  );
};
export default Button;
