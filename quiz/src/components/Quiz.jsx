import Country from './Country'

const Quiz = ({ started, startQuiz, randomCountry, checkAnswer, userInput, handleInputChange }) => {

  if (started) {
      return (
        <div>
          <Country randomCountry={randomCountry}></Country>
          <form onSubmit={checkAnswer}>
            <input className="answer-input" type="text" placeholder="Guess the country" value={userInput} onChange={handleInputChange}></input>
            <button type="submit" className="submit-btn">Submit</button>
          </form>
        </div>
      )
  } 
  
  return (
    <div>
      <button className="quiz-start-btn" onClick={startQuiz}>Start Quiz</button>
    </div>
  )
}

export default Quiz