import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="flex w-1/2 flex-col gap-2.5">
      <button
        className="flex w-full items-center justify-between rounded bg-white px-5 py-3 font-medium shadow-sm"
        onClick={handleClick}
      >
        Filter by region
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <ul className="w-full space-y-1 rounded bg-white p-2 shadow-sm">
          {regions.map((region, index) => (
            <li
              key={index}
              className="hover:bg-very-light-gray cursor-pointer rounded px-2 py-1"
            >
              {region}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};
export default DropdownMenu;
