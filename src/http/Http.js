import axios from "axios"

const api = axios.create({
    baseURL: "http://127.0.0.1:5000",
    headers: {
        'Content-type': 'application/json',
        Accept: 'application/json',
    },
})

//natural convection data
export const ncd = (data) => api.post('/api/naturalconvection', data)

export default api;