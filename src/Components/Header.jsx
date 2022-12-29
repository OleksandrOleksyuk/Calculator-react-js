import React from "react";

const Header = ({ setDarkToggle, darkToggle }) => {
  console.log(setDarkToggle);
  return (
    <div className="flex justify-center mt-5 ">
      <ButtonMode setDarkToggle={setDarkToggle} darkToggle={darkToggle} />
    </div>
  );
};

const ButtonMode = ({ setDarkToggle, darkToggle }) => {
  console.log(setDarkToggle);
  return (
    <div
      className={`w-20 h-8 ${
        darkToggle ? "bg-slate-800" : "bg-white"
      }   rounded-full flex justify-between items-center px-2`}
    >
      {/* dark mode */}
      <div
        onClick={() => setDarkToggle((mode) => !mode)}
        className={`h-6 w-6 ${
          darkToggle ? "flex" : "hidden"
        }  rounded-full bg-slate-400`}
      ></div>
      <div className={`${darkToggle ? "flex" : "hidden"}`}>
        <svg
          className={`h-6 w- ${darkToggle ? "flex" : "hidden"}`}
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.7">
            <path
              d="M8.03239 6.23185C6.2001 7.49474 5 9.60796 5 11.9999C5 15.8659 8.13401 18.9999 12 18.9999C14.3918 18.9999 16.5049 17.7999 17.7678 15.9678C17.5146 15.9893 17.2585 16.0002 17 16.0002C12.0294 16.0002 8 11.9707 8 7.00018C8 6.7415 8.01094 6.48523 8.03239 6.23185ZM3 11.9999C3 8.04172 5.55459 4.68278 9.10211 3.47692L10.3707 4.7456C10.1306 5.45176 10 6.20968 10 7.00018C10 10.8662 13.134 14.0002 17 14.0002C17.7904 14.0002 18.5482 13.8696 19.2542 13.6296L20.5228 14.8983C19.3168 18.4455 15.958 20.9999 12 20.9999C7.02944 20.9999 3 16.9705 3 11.9999Z"
              fill="#4B5EFC"
            />
          </g>
        </svg>
      </div>
      {/* light mode */}
      <div className={`${darkToggle ? "hidden" : "flex"}`}>
        <svg
          className={`h-6 w-6 ${darkToggle ? "hidden" : "flex"} `}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g opacity="0.7">
            <path
              d="M13 2V3V5V6H11V5V3V2H13ZM2 11H3H5H6V13H5H3H2V11ZM19 11H18V13H19H21H22V11H21H19ZM13 18V19V21V22H11V21V19V18H13ZM17.6568 19.0711L18.364 19.7782L19.7782 18.364L19.0711 17.6569L17.6568 16.2427L16.9497 15.5356L15.5355 16.9498L16.2426 17.6569L17.6568 19.0711ZM7.05023 8.46451L6.34312 7.7574L4.92891 6.34319L4.2218 5.63608L5.63602 4.22187L6.34313 4.92897L7.75734 6.34319L8.46445 7.05029L7.05023 8.46451ZM19.0711 6.34309L19.7782 5.63599L18.364 4.22177L17.6568 4.92888L16.2426 6.34309L15.5355 7.0502L16.9497 8.46441L17.6568 7.75731L19.0711 6.34309ZM8.46445 16.9497L7.75734 17.6568L6.34312 19.071L5.63602 19.7781L4.2218 18.3639L4.92891 17.6568L6.34313 16.2426L7.05023 15.5355L8.46445 16.9497ZM10 12C10 10.8954 10.8954 10 12 10C13.1046 10 14 10.8954 14 12C14 13.1046 13.1046 14 12 14C10.8954 14 10 13.1046 10 12ZM12 8C9.79086 8 8 9.79086 8 12C8 14.2091 9.79086 16 12 16C14.2091 16 16 14.2091 16 12C16 9.79086 14.2091 8 12 8Z"
              fill="#4B5EFC"
            />
          </g>
        </svg>
      </div>
      <div
        onClick={() => setDarkToggle((mode) => !mode)}
        className={`h-6 w-6  ${
          darkToggle ? "hidden" : "flex"
        }  rounded-full bg-slate-400`}
      ></div>
    </div>
  );
};

export default Header;
