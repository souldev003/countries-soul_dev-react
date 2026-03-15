import { useState } from "react";
import "./country.css";
function Country({ country, handleVisitedCountry, handelVisitedFlag }) {
  // console.log(country);
  const [status, setStatus] = useState(false);

  const handleClick = () => {
    // Method - 1
    // if (status) {
    //   setStatus(false);
    // } else {
    //   setStatus(true);
    // }
    // Method - 2
    // setStatus(status ? false : true);
    // Method - 3
    setStatus(!status);
    handleVisitedCountry(country);
  };

  // const flagHandle = ({ handelVisitedFlag }) => {
  //   handelVisitedFlag();
  // };

  return (
    <div className={`country ${status ? "visited-country" : ""}`}>
      <img
        className="image"
        src={country.flags.flags.png}
        alt={country.flags.flags.alt}
      />
      <h2>Country: {country.name.common}</h2>
      <h3>
        Area: {country.area.area}{" "}
        {country.area.area > 30000 ? "Big Country" : "Small Country"}{" "}
      </h3>
      <h3>Region: {country.region.region}</h3>
      <button onClick={handleClick}>
        {status ? "Visited" : "Not Visited"}
      </button>

      <button
        onClick={() => {
          handelVisitedFlag(country.flags.flags.png);
        }}
      >
        Add Visited Flag
      </button>
    </div>
  );
}

export default Country;
