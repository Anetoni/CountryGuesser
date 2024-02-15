import countryService from './services/countries'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Country from './components/Country'

const App = () => {
  const [countries, setCountries] = useState([])
  const [randomCountry, setRandomCountry] = useState({
    name: '',
    flagUrl: ''
  })

  useEffect(() => {
    countryService.getAllCountries().then(countries => {
      setCountries(countries)
    } 
    )
  }, [])

  const getRandomCountry = () => {
    const newCountry = countries[Math.floor(Math.random() * countries.length)]
    setRandomCountry({ name: newCountry.name, flagUrl: newCountry.flags.png })
    
    const countriesWithoutCurrentCountry = countries.filter(country => country.name !== newCountry.name)
    setCountries(countriesWithoutCurrentCountry)
  }

  return (
    <Router>
      <div>
        <Link className='home-btn' to="/">Home</Link>
        <Link className='play-btn' onClick={getRandomCountry} to="/quiz">Start playing</Link>
        <Link className='leaderboard' to="/leaderboard">Leaderboard</Link>
      </div>

      <Routes>
        <Route path="/quiz" element={<Country randomCountry={randomCountry}/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
