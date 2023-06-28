import axios from 'axios'
import { ApiOptions } from '../TS/interfaces'

export const apiCall = async (apiOptions: ApiOptions) => {
  const { httpMethod, route, body, options, noBasePath } = apiOptions
  let BASE_URL = process.env.REACT_APP_BASE_URL

  if (noBasePath) {
    BASE_URL = ''
  }

  console.log('BASE_URL', BASE_URL)

  try {
    let response: any

    switch (httpMethod) {
      case 'POST':
        response = await axios.post(`${BASE_URL}${route}`, body)
        break
      case 'GET':
        response = await axios.get(`${BASE_URL}${route}`)
        break
      case 'PUT':
        response = await axios.put(`${BASE_URL}${route}`, body, options)
        break
      case 'DELETE':
        response = await axios.delete(`${BASE_URL}${route}`)
        break
      default:
        console.log('Api call type not recognised')
    }

    const { data } = response
    return data
  } catch (err: any) {
    throw err
  }
}
