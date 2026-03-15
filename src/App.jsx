import "./App.css";
import { Suspense } from "react";
import Countries from "./components/countries/countries";
import countriesPromise from "./components/api/country_api";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
function App() {
  return (
    <>
      <h1>hi</h1>
      <Suspense fallback={<h2>Countries Loading...</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
