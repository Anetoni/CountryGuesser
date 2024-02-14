import countryService from './services/countries'
import { useEffect, useState } from 'react'

const App = () => {
  const [countries, setCountries] = useState([])
  const [currentCountry, setCurrentCountry] = useState({
    name: '',
    flagUrl: ''
  })

  useEffect(() => {
    countryService.getAllCountries().then(countries => {
      setCountries(countries)
    }
    )
  }, [])

  return (
    <div className="App">
      
    </div>
  );
}

export default App;
