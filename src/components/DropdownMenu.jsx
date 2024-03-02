import { ChevronDown, ChevronUp } from "lucide-react";
import { useState } from "react";

const DropdownMenu = ({ selectedRegion, handleRegionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const regions = ["Africa", "Americas", "Asia", "Europe", "Oceania", "All"];

  const handleClick = () => {
    setIsOpen((prev) => !prev);
  };

  const onRegionSelect = (region) => {
    handleRegionSelect(region);
    setIsOpen(false);
  };

  return (
    <div className="relative flex w-3/4 flex-col gap-2.5 lg:w-1/4">
      <button
        className="flex w-full items-center justify-between rounded bg-white px-5 py-3 font-medium shadow-sm"
        onClick={handleClick}
      >
        {selectedRegion || "Filter by region"}
        {isOpen ? <ChevronUp /> : <ChevronDown />}
      </button>

      {isOpen && (
        <ul className="absolute top-14 w-full space-y-1 rounded bg-white p-2 shadow-lg">
          {regions.map((region) => (
            <li
              key={region}
              className="cursor-pointer rounded px-2 py-1 hover:bg-very-light-gray"
              onClick={() => onRegionSelect(region)}
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
