import countryService from './services/countries'
import { useEffect, useState } from 'react'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [randomCountry, setRandomCountry] = useState({
    name: 'Finland',
    flagUrl: 'https://flagcdn.com/w320/fi.png'
  })

  useEffect(() => {
    countryService.getAllCountries().then(countries => {
      setCountries(countries)
    }
    )
  }, [])

  return (
    <div className="App">
      <Country randomCountry={randomCountry}></Country>
    </div>
  );
}

export default App;
