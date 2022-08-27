import React from "react";
// import the icons we use:
import { HiSun, HiMoon } from "react-icons/hi";
import { ThemeContext } from "../context/ThemeContext";
import { useContext } from "react";

export default function ThemeToggle() {
  // use the theme context to get the theme state:
  const { theme, setTheme } = useContext(ThemeContext);
  // we want to return sth:

  return (
    <div className="p-2">
      {/* create a button that when clicked, toggles the theme */}
      {/* if the theme is dark and ture: */}
      {/*  lastly add some styles: */}
      {theme === "dark" ? (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiSun className="text-primary text-2xl mr-2" />
          Light Mood
        </div>
      ) : (
        <div
          className="flex items-center cursor-pointer"
          onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
        >
          <HiMoon className="text-primary text-2xl mr-2" />
          Dark Mood
        </div>
      )}
    </div>
  );
}

// add for
// yarn add react-icons
