import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Country from "./pages/Country";
import Home from "./pages/Home";
import { useEffect, useState } from "react";

const App = () => {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    const storedDarkMode = localStorage.getItem("darkMode");
    setIsDark(storedDarkMode === "true");
  }, []);

  return (
    <div
      className={`${isDark ? "dark" : ""} h-full dark:bg-very-dark-blue2 dark:text-white`}
    >
      <header>
        <Navbar isDark={isDark} setIsDark={setIsDark} />
      </header>
      <main className="dark:bg-very-dark-blue2">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<Country />} />
        </Routes>
      </main>
    </div>
  );
};
export default App;
