import { Search } from "lucide-react";

const SearchBar = ({ handleSearch }) => {
  return (
    <div className="relative">
      <Search className="absolute left-6 top-[23%] text-dark-gray" />
      <input
        type="text"
        className="w-full rounded-md px-2.5 py-3 pl-16 shadow-sm lg:w-96"
        placeholder="Search for a country..."
        onChange={handleSearch}
      />
    </div>
  );
};
export default SearchBar;
