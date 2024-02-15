/* eslint-disable import/no-anonymous-default-export */
const urlAll = 'https://restcountries.com/v3.1/all'

//Retrieves all countries from the API and returns them to App in JSON-format 
const getAllCountries = async () => {
  const request = await fetch(urlAll)
  const countries = await request.json()

  return countries
}

export default { getAllCountries }