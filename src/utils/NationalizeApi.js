import axios from 'axios'

const nationalizeUrl = 'https://api.nationalize.io/'
const worldCountriesUrl = 'http://www.geognos.com/api/en/countries/'

// const testData = {
//   name: 'Rob',
//   country: [
//     {
//       country_id: 'NL',
//       probability: 0.23683915611817938,
//     },
//     {
//       country_id: 'CA',
//       probability: 0.15812073538965926,
//     },
//     {
//       country_id: 'GB',
//       probability: 0.13581670671871307,
//     },
//   ],
// }

const getNationality = async name => {
  if (!name) {
    throw new Error('The entered name is not valid.')
  }
  let url = `${nationalizeUrl}?name=${name}`
  // const data = testData
  // return data
  const data = await axios
    .get(url)
    .then(response => {
      // const nationalizeData = response.data
      // const countryPromises = nationalizeData.country.map(c => {
      //   return getFlag(c.country_id)
      // })
      // Promise.all(countryPromises).then(flags => {
      //   console.log(flags)
      // })
      return response.data
    })
    .catch(error => {
      console.error(
        'There was an error loading the data from the Nationalize API',
        error
      )
    })
  return data
}

const getFlag = async countryCode => {
  console.log(countryCode)
  // if (!countryCode) return Promise.resolve('Unknown')
  let url = `${worldCountriesUrl}flag/${countryCode}.png`
  const data = await axios
    .get(url, { headers: { 'Access-Control-Allow-Origin': 'true' } })
    .then(response => {
      return response.data
    })
    .catch(error => {
      console.error(
        'There was an error loading the data from the flag finder API',
        error
      )
    })
  return data
}

export { getNationality, getFlag }
