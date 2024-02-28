import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const DropdownMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const regions = ["Africa", "America", "Asia", "Europe", "Oceania"];

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  return (
    <div className="relative flex w-3/4 flex-col gap-2.5 lg:w-1/4">
      <button
        className="flex w-full items-center justify-between rounded bg-white px-5 py-3 font-medium shadow-sm"
        onClick={handleClick}
      >
        Filter by region
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <ul className="absolute top-14 w-full space-y-1 rounded bg-white p-2 shadow-lg">
          {regions.map((region, index) => (
            <li
              key={index}
              className="cursor-pointer rounded px-2 py-1 hover:bg-very-light-gray"
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
