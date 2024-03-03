import Country from './Country'

const Quiz = ({ randomCountry, checkAnswer, userInput, handleInputChange }) => {
  console.log(userInput)
  return (
    <div>
      <Country randomCountry={randomCountry}></Country>
      <input className="answer-input" type="text" placeholder="Guess the country" value={userInput} onChange={e => { checkAnswer(e); handleInputChange(e) }}></input>
    </div>
  )
}

export default Quiz