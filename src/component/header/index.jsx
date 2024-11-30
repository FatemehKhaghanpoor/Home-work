import React, { useContext } from "react";
import { ThemeContext } from "../../context/theme-provider";

const Header = () => {
  const { isDark, toggleTheme } = useContext(ThemeContext);
  return (
    <div
      className={` w-full h-24 ${isDark ? "bg-amber-950" : "bg-orange-400"}`}
    >
      <div className="relative inline-block w-11 h-5 ml-2 mt-2">
        <input
          checked={isDark}
          onChange={toggleTheme}
          id="switch-component-1"
          type="checkbox"
          className="peer appearance-none w-11 h-5 bg-slate-100 rounded-full checked:bg-slate-800 cursor-pointer transition-colors duration-300"
        />
        <label
          for="switch-component-1"
          className="  absolute  left-0  w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer"
        ></label>
        <p className="text-amber-400">{isDark ? "Light Mode" : "Dark Mode"}</p>
      </div>
    </div>
  );
};

export default Header;
