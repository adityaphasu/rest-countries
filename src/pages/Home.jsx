import CountryCard from "../components/CountryCard";
import DropdownMenu from "../components/DropdownMenu";
import SearchBar from "../components/SearchBar";
import useFetch from "../hooks/useFetch";

const Home = () => {
  const { data, loading } = useFetch("https://restcountries.com/v3.1/all");

  return (
    <div className="m-4 space-y-5 md:m-10 md:space-y-10">
      <div className="flex flex-col gap-5 lg:flex-row lg:justify-between">
        <SearchBar />
        <DropdownMenu />
      </div>

      {loading ? (
        <p>Loading...</p>
      ) : (
        <section className="grid gap-8 sm:grid-cols-2 md:gap-16 lg:grid-cols-3 xl:grid-cols-4">
          {data?.map((country) => (
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
  );
};
export default Home;
