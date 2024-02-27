import { Search } from "lucide-react";

const SearchBar = () => {
  return (
    <form className="relative">
      <Search className="text-dark-gray absolute left-6 top-[23%]" />
      <input
        type="text"
        className="w-full rounded-md px-2.5 py-3 pl-16 shadow-sm"
        placeholder="Search for a country..."
      />
    </form>
  );
};
export default SearchBar;
