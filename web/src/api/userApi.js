import axios from "axios";

export const loginApi = async(data) => {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_USER_URL}/login`,
            data
          );
          return res.data;
    } catch (error) {
        throw error.response.data.message
    }
}