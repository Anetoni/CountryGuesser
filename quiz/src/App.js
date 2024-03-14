import countryService from './services/countries'
import { useEffect, useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom'
import Quiz from './components/Quiz'
import AnswerResult from './components/AnswerResult'

const App = () => {
  const [countries, setCountries] = useState([])
  const [randomCountry, setRandomCountry] = useState({
    name: '',
    flagUrl: ''
  })
  const [userInput, setUserInput] = useState('')
  const [resultMessage, setResultMessage] = useState(null)
  const [resultType, setResultType] = useState(null)
  const [started, setStarted] = useState(false)

  useEffect(() => {
    countryService.getAllCountries().then(countries => {
      setCountries(countries)
    } 
    )
  }, [])

  const startQuiz = (event) => {
    setStarted(true)
    getRandomCountry(event)
  }

  const checkAnswer = (event) => {
    console.log(randomCountry.name)
    if (userInput.toLowerCase() === randomCountry.name.toLowerCase()) {
      correctAnswer(event)
    }
  }

  const correctAnswer = (event) => {
    const countriesWithoutCurrentCountry = countries.filter(country => country.name !== randomCountry.name)
    setUserInput('')
    setCountries(countriesWithoutCurrentCountry)
    getRandomCountry(event)
    setResultType('correct')
    setResultMessage('Correct! You guessed ' + randomCountry.name)
    setTimeout(() => {
      setResultMessage(null)
    }, 5000)
  }

  const handleInputChange = (event) => {
    console.log('input changed')
    setUserInput(event.target.value)
  }

  const getRandomCountry = (event) => {
    event.preventDefault()
    const newCountry = countries[Math.floor(Math.random() * countries.length)]
    console.log(newCountry)
    setRandomCountry({ name: newCountry.name.common, flagUrl: newCountry.flags.png })
  }

  return (
    <Router>
      <div>
        <Link className='home-btn' to="/">Home</Link>
        <Link className='play-btn' to="/quiz">Play</Link>
        <Link className='leaderboard' to="/leaderboard">Leaderboard</Link>
      </div>

      <Routes>
        <Route path="/quiz" element={
          <div>
            <Quiz started={started} startQuiz={startQuiz} randomCountry={randomCountry} checkAnswer={checkAnswer} userInput={userInput} handleInputChange={handleInputChange}/>
            <AnswerResult type={resultType} message={resultMessage}></AnswerResult>
          </div>
          } 
        ></Route>
      </Routes>
    </Router>
    
  );
}

export default App;
