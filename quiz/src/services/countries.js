/* eslint-disable import/no-anonymous-default-export */
const urlAll = 'https://restcountries.com/v3.1/all'
const urlName = 'https://restcountries.com/v3.1/name'

const getAllCountries = async () => {
  const request = await fetch(urlAll)
  const countries = await request.json()
  console.log(countries)

  return countries
}

export default { getAllCountries }