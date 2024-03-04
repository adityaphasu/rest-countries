import { useState } from "react";

import useFetch from "../hooks/useFetch";

import CountryCard from "../components/CountryCard";
import DropdownMenu from "../components/DropdownMenu";
import SearchBar from "../components/SearchBar";
import { MagnifyingGlass } from "react-loader-spinner";
import Loader from "../components/Loader";

const Home = () => {
  const { data, loading } = useFetch("https://restcountries.com/v3.1/all");

  const [searchTerm, setSearchTerm] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  const handleRegionSelect = (region) => {
    setSelectedRegion(region);
  };

  //  Get the filtered countries from the data for searched term and selected region
  const filteredCountries = data?.filter(
    (country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase()) &&
      (selectedRegion && selectedRegion !== "All"
        ? country.region === selectedRegion
        : true),
  );

  return (
    <div className="space-y-5 p-4 md:space-y-10 md:p-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <SearchBar handleSearch={handleSearch} />
        <DropdownMenu
          selectedRegion={selectedRegion}
          handleRegionSelect={handleRegionSelect}
        />
      </div>
      <div className="relative space-y-4">
        <h2 className="text-xl font-bold">
          Total Countries: {filteredCountries?.length}
        </h2>
        {loading ? (
          <Loader />
        ) : (
          <section className="grid gap-8 sm:grid-cols-2 md:gap-16 lg:grid-cols-3 xl:grid-cols-4">
            {filteredCountries?.map((country) => (
              <a
                href={`/country/${country.name.common}`}
                key={country.name.common}
              >
                <CountryCard country={country} />
              </a>
            ))}
          </section>
        )}
      </div>
    </div>
  );
};
export default Home;
