import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Country from "./pages/Country";
import Home from "./pages/Home";

const App = () => {
  return (
    <>
      <header>
        <Navbar />
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/country/:countryName" element={<Country />} />
        </Routes>
      </main>
    </>
  );
};
export default App;
