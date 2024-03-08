/* eslint-disable import/no-anonymous-default-export */
const url = 'https://countriesnow.space/api/v0.1/countries/info?returns=name,flag'

//Retrieves all countries from the API and returns them to App in JSON-format 
const getAllCountries = async () => {
  const request = await fetch(url)
  const countries = await request.json()

  return countries.data
}

export default { getAllCountries }