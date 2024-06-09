// Por ejemplo, en un archivo de configuración de Axios
import axios from 'axios'

const axiosClient = axios.create({
  baseURL: import.meta.env.VITE_API_URL
})

export default axiosClient
