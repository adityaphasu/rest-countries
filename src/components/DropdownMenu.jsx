import { ChevronDown } from "lucide-react";
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
        className="flex w-full items-center justify-between rounded bg-white px-5 py-3 font-medium shadow-sm dark:bg-dark-blue dark:text-white dark:shadow-very-dark-blue2 "
        onClick={handleClick}
      >
        {selectedRegion || "Filter by region"}
        <ChevronDown
          className={`${isOpen ? "-rotate-180" : ""} transition-transform`}
        />
      </button>

      {isOpen && (
        <ul className="absolute top-14 w-full space-y-1 rounded bg-white p-2 shadow-lg dark:bg-dark-blue dark:shadow-very-dark-blue2">
          {regions.map((region) => (
            <li
              key={region}
              className="cursor-pointer rounded px-2 py-1 hover:bg-very-light-gray hover:dark:bg-very-dark-blue2"
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
