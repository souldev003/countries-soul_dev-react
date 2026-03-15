import { use, useState } from "react";
import Country from "./country";
import "./countries.css";

export default function Countries({ countriesPromise }) {
  const [visitedCountry, setVisitedCountry] = useState([]);
  const [visitedFlag, setVisitedFlag] = useState([]);

  const handleVisitedCountry = (country) => {
    // console.log("Btn Clicked", country);

    const newVisitedCountry = [...visitedCountry, country];
    setVisitedCountry(newVisitedCountry);
  };

  const handelVisitedFlag = (flag) => {
    // console.log("hello", flag);
    const newVisitedFlag = [...visitedFlag, flag];
    setVisitedFlag(newVisitedFlag);
    console.log(newVisitedFlag);
  };

  const countriesData = use(countriesPromise);
  const countries = countriesData.countries;

  //   console.log(countries.countries);
  return (
    <div>
      <h1>Total Country: {countries.length}</h1>
      <h2>Visited Country: {visitedCountry.length} </h2>
      <h3>Total Visited Flag: {visitedFlag.length}</h3>

      <ol>
        {visitedCountry.map((el) => (
          <li key={el.cca3.cca3}>{el.name.common}</li>
        ))}
      </ol>

      <ul>
        {visitedFlag.map((flag) => (
          <img key={flag} src={flag} alt="" />
        ))}
      </ul>

      <div className="countries">
        {countries.map((country) => (
          <Country
            key={country.cca3.cca3}
            country={country}
            handleVisitedCountry={handleVisitedCountry}
            handelVisitedFlag={handelVisitedFlag}
          ></Country>
        ))}
      </div>
    </div>
  );
}
