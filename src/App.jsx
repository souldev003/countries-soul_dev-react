import "./App.css";
import { Suspense } from "react";
import Countries from "./components/countries/countries";

const countriesPromise = fetch(
  "https://openapi.programming-hero.com/api/all",
).then((res) => res.json());
function App() {
  return (
    <>
      <Suspense fallback={<h2>Countries Loading...</h2>}>
        <Countries countriesPromise={countriesPromise}></Countries>
      </Suspense>
    </>
  );
}

export default App;
