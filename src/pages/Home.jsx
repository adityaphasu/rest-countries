import { useState } from "react";
import CountryCard from "../components/CountryCard";
import DropdownMenu from "../components/DropdownMenu";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";

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
    <div className="m-4 space-y-5 md:m-10 md:space-y-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <SearchBar handleSearch={handleSearch} />
        <DropdownMenu
          selectedRegion={selectedRegion}
          handleRegionSelect={handleRegionSelect}
        />
      </div>
      <div className="space-y-4">
        <h2 className="text-xl font-bold">
          Total Countries: {filteredCountries?.length}
        </h2>

        {loading ? (
          <p>Loading...</p>
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
