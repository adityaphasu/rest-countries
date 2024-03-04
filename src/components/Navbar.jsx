import { Moon, Sun } from "lucide-react";
import { useEffect } from "react";

const Navbar = ({ isDark, setIsDark }) => {
  const toggleDarkMode = () => {
    setIsDark((prev) => !prev);
    localStorage.setItem("darkMode", !isDark);
  };

  return (
    <nav className="flex items-center justify-between bg-white p-5 shadow-sm md:px-12 dark:bg-dark-blue dark:shadow-very-dark-blue2">
      <h1 className="text-xl font-bold sm:text-2xl">Where in the world?</h1>

      <button
        className="flex items-center justify-center gap-2 rounded-md p-2 font-medium transition-colors duration-300 ease-in-out hover:bg-dark-blue hover:text-white sm:w-[8.2rem] dark:hover:bg-white dark:hover:text-dark-blue"
        onClick={toggleDarkMode}
      >
        {isDark ? <Sun aria-label="Sun" /> : <Moon aria-label="Moon" />}
        <span className="hidden sm:block">
          {isDark ? "Light" : "Dark"} Mode
        </span>
      </button>
    </nav>
  );
};
export default Navbar;
