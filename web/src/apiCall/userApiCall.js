import axios from "axios"

export const login = async () => {
    const res = await axios.post(`${process.env.REACT_APP_USER_URL}/login`, data)
}