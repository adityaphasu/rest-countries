import { useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";

import DetailsList from "../components/DetailsList";
import BorderCountries from "../components/BorderCountries";
import Loader from "../components/Loader";
import BackButton from "../components/BackButton";

const Country = () => {
  const { countryName } = useParams();

  // Fetching the country data
  const { data, loading } = useFetch(
    `https://restcountries.com/v3.1/name/${countryName}?fullText=true`,
  );

  // Extracting the data
  const countryDetails = data && {
    main: [
      { label: "Native name", value: data[0]?.altSpellings[1] || "None" },
      {
        label: "Population",
        value: data[0]?.population?.toLocaleString() || "None",
      },
      { label: "Region", value: data[0]?.region || "None" },
      { label: "Sub Region", value: data[0]?.subregion || "None" },
      { label: "Capital", value: data[0]?.capital || "None" },
    ],
    additonal: [
      { label: "Top Level Domain", value: data[0]?.tld[0] || "None" },
      {
        label: "Currencies",
        value: data[0]?.currencies
          ? Object.values(data[0]?.currencies)
              .map((currency) => currency.name)
              .join(", ")
          : "None",
      },
      {
        label: "Languages",
        value: data[0]?.languages
          ? Object.values(data[0]?.languages).join(", ")
          : "None",
      },
    ],
  };

  // Extracting the border countries
  const borderCountries = data && data[0]?.borders;

  return (
    <div className="h-full space-y-20 p-8 lg:space-y-10">
      <BackButton />

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
              <h1 className="text-2xl font-bold">{data[0].name.common}</h1>
              <div className="space-y-12">
                <div className="space-y-12 lg:flex lg:gap-14 lg:space-y-0">
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
