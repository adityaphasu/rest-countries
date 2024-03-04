import { Link, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import { ArrowLeft } from "lucide-react";

import DetailsList from "../components/DetailsList";
import BorderCountries from "../components/BorderCountries";
import Loader from "../components/Loader";

const Country = () => {
  const { countryName } = useParams();

  // Fetching the country data
  const { data, loading } = useFetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
  );

  // Extracting the data
  const countryDetails = data && {
    main: [
      { label: "Native name", value: data[0]?.altSpellings[1] },
      { label: "Population", value: data[0]?.population?.toLocaleString() },
      { label: "Region", value: data[0]?.region },
      { label: "Sub Region", value: data[0]?.subregion },
      { label: "Capital", value: data[0]?.capital },
    ],
    additonal: [
      { label: "Top Level Domain", value: data[0]?.tld[0] },
      {
        label: "Currencies",
        value: Object.values(data[0]?.currencies)
          .map((currency) => currency.name)
          .join(", "),
      },
      {
        label: "Languages",
        value: Object.values(data[0]?.languages).join(", "),
      },
    ],
  };

  // Extracting the border countries
  const borderCountries = data && data[0]?.borders;

  return (
    <div className="h-full space-y-20 p-8 lg:space-y-10">
      <Link
        to="/"
        className="flex w-max items-center gap-3 rounded-md bg-white px-7 py-2 shadow-lg transition-shadow hover:bg-dark-blue hover:text-white hover:shadow-xl dark:bg-dark-blue dark:hover:bg-white dark:hover:text-dark-blue"
      >
        <ArrowLeft />
        Home
      </Link>

      {loading ? (
        <Loader />
      ) : (
        data && (
          <section className="grid gap-16 lg:grid-cols-2">
            <img
              src={data[0].flags.svg}
              alt={data[0].flags.alt}
              className="w-full"
            />
            <div className="space-y-8 lg:self-center">
              <h2 className="text-2xl font-bold">{data[0].name.common}</h2>
              <div className="space-y-12">
                <div className="space-y-12 lg:flex lg:gap-5 lg:space-y-0">
                  <DetailsList data={countryDetails.main} />
                  <DetailsList data={countryDetails.additonal} />
                </div>

                <div>
                  <h3 className="text-lg font-bold">Border Countries:</h3>
                  {borderCountries ? (
                    <BorderCountries borderCodes={borderCountries} />
                  ) : (
                    <p>None</p>
                  )}
                </div>
              </div>
            </div>
          </section>
        )
      )}
    </div>
  );
};
export default Country;
