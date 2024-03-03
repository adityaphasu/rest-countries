const CountryCard = ({ country }) => {
  return (
    <div className="h-full overflow-hidden rounded-lg bg-white shadow-sm shadow-neutral-300 hover:shadow-lg dark:bg-dark-blue dark:shadow-very-dark-blue2 hover:dark:shadow-very-dark-blue1">
      <img
        src={country.flags.png}
        alt={country.flags.alt}
        className="w-full sm:h-44"
      />
      <div className="space-y-2 px-7 py-8">
        <h2 className="text-3xl font-bold md:text-2xl">
          {country.name.common}
        </h2>
        <ul>
          <li>
            <span className="font-semibold">Population: </span>
            {country.population.toLocaleString()}
          </li>
          <li>
            <span className="font-semibold">Region: </span>
            {country.region}
          </li>
          <li>
            <span className="font-semibold">Capital: </span>
            {country.capital && country.capital[0]}
          </li>
        </ul>
      </div>
    </div>
  );
};
export default CountryCard;
