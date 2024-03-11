import axios from 'axios'

const baseUrl = 'http://localhost:8000/api/v1'
// const token = null

const fetchDataFromApi = async (url) => {
    const {data} = await axios.get(`${baseUrl}${url ? url : ''}`, {
        headers: {
            // Authorization: `Bearer ${token}`
        }
    })
    return data
}

export default fetchDataFromApi