const Country = ({ randomCountry }) => {
  return (
    <div>
      <img src={randomCountry.flagUrl} alt='flag' />
    </div>
  )

}

export default Country