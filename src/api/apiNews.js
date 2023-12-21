import axios from 'axios'



const BASE_URL = "https://api.currentsapi.services/v1/"
const API_KEY = "J_L-qgmMYVXwtf-ABZ6_KTudcDtgFPb_Vqg8fsfUzyILowhM"



const getNews = async () => {
    try {
        const response = await axios.get(`${BASE_URL}latest-news`, {
            params: {
                apiKey: API_KEY
            }
        })
        return response.data
    } catch (error) {
        console.log(error)
    }
}

export default getNews