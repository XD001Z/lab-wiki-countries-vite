import "./App.css";
import CountryDetailsPage from "./pages/CountryDetailsPage";
import HomePage from "./pages/HomePage";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [countries, setCountries] = useState([])

  useEffect(() => {
    if (!countries.length) {
      axios
        .get("https://ih-countries-api.herokuapp.com/countries")
        .then((response) => {
          setCountries(response.data);
        })
        .catch((err) => {
          console.log(err);
        });
    }
  }, []);

  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage countries={countries} />} />
        <Route path="/:countryId" element={<CountryDetailsPage countries={countries} />} />
      </Routes>
    </div>
  );
}

export default App;
