import countryService from './services/countries'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Quiz from './components/Quiz'

const App = () => {
  const [countries, setCountries] = useState([])
  const [randomCountry, setRandomCountry] = useState({
    name: '',
    flagUrl: ''
  })
  const [userInput, setUserInput] = useState('')

  useEffect(() => {
    countryService.getAllCountries().then(countries => {
      setCountries(countries)
    } 
    )
  }, [])

  const checkAnswer = (event) => {
    console.log(randomCountry.name)
    if (event.target.value.toLowerCase() === randomCountry.name.toLowerCase()) {
      console.log('CORRECT')
      const countriesWithoutCurrentCountry = countries.filter(country => country.name !== randomCountry.name)
      setCountries(countriesWithoutCurrentCountry)
      getRandomCountry()
      setUserInput('')
    }
  }

  const handleInputChange = (event) => {
    setUserInput(event.target.value)
  }

  const getRandomCountry = () => {
    const newCountry = countries[Math.floor(Math.random() * countries.length)]
    setRandomCountry({ name: newCountry.name.common, flagUrl: newCountry.flags.png })
  }

  return (
    <Router>
      <div>
        <Link className='home-btn' to="/">Home</Link>
        <Link className='play-btn' onClick={getRandomCountry} to="/quiz">Start playing</Link>
        <Link className='leaderboard' to="/leaderboard">Leaderboard</Link>
      </div>

      <Routes>
        <Route path="/quiz" element={<Quiz randomCountry={randomCountry} checkAnswer={checkAnswer} userInput={userInput} handleInputChange={handleInputChange}/>} />
      </Routes>
    </Router>
    
  );
}

export default App;
