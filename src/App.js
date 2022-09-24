import { Container, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import { getCountries, getReportByCountry } from "./apis";
import CountrySelector from "./components/CountrySelector";
import Highlight from "./components/Highlight";
import Summary from "./components/Summary";
import moment from "moment";
import '@fontsource/roboto';
import { sortBy } from 'lodash';

function App() {

  const [countries, setCountries] = useState([]);
  const [selectedCountryId, setSelectedCountryId] = useState('');
  const [report, setReport] = useState([]);

  useEffect(() =>{
    getCountries().then(res => {
      const { data } = res;
      const countries = sortBy(data, 'Country');
      setCountries(countries);
      setSelectedCountryId('vn');
    })
  }, []);

  const handleOnchange = (e) => {
    setSelectedCountryId(e.target.value);   
  };

  useEffect(() => {
    if (selectedCountryId) {
      const { Slug } = countries.find(
        (country) => country.ISO2 === selectedCountryId.toUpperCase()
      );
      getReportByCountry(Slug).then((res) => {
        console.log('getReportByCountry', { res });
        // remove last item = current date
        res.data.pop();
        setReport(res.data);
      });
    }
  }, [selectedCountryId, countries]);
   
  return (
    <>
      <Container style={{ marginTop: 20 }}>
          <Typography variant="h3" component="h3">
              Number of COVID-19 cases
          </Typography>
          <Typography>
            <p>{moment().format('LLL')}</p>
          </Typography>
          <CountrySelector countries={countries} handleOnchange={handleOnchange} value={selectedCountryId} />
          <Highlight report={report} />
          <Summary report={report} countryId={selectedCountryId} />
      </Container>
    </>
  );
}

export default App;
