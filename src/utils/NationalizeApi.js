import axios from 'axios'

const nationalizeUrl = 'https://api.nationalize.io/'

const getNationality = async name => {
  if (!name) {
    throw new Error('The entered name is not valid.')
  }
  let url = `${nationalizeUrl}?name=${name}`
  const data = await axios
    .get(url)
    .then(response => {
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

export default getNationality
