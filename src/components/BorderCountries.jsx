import { Link } from "react-router-dom";
import useFetch from "../hooks/useFetch";

const BorderCountries = ({ borderCodes }) => {
  const { data } = useFetch(
    `https://restcountries.com/v3.1/alpha?codes=${borderCodes.join(",")}`,
  );

  return (
    <div className="mt-3 flex flex-wrap gap-x-3 gap-y-3">
      {data?.map((country) => (
        <Link
          to={`/country/${country.name.common}`}
          key={country.cca2}
          className="rounded-md bg-white px-5 py-2 text-sm shadow-lg transition-shadow hover:bg-dark-blue hover:text-white hover:shadow-xl dark:bg-dark-blue dark:hover:bg-white dark:hover:text-dark-blue "
        >
          {country.name.common}
        </Link>
      ))}
    </div>
  );
};
export default BorderCountries;
