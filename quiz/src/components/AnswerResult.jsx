const AnswerResult = ({ message, type }) => {
  if (message === null) {
    return null
  }

  return (
    <div className={type}>
      <p>{message}</p>
    </div>
  )
}

export default AnswerResult