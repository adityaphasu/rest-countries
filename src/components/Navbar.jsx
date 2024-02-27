import { Moon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between bg-white p-5 shadow-sm">
      <h1 className="font-bold">Where in the world?</h1>

      <button className="flex items-center gap-2 rounded-md border border-black p-2 font-medium">
        <Moon />
        Dark Mode
      </button>
    </nav>
  );
};
export default Navbar;
