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

export const registerApi = async (data) => {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_USER_URL}/register`,
            data
          );
          return res.data;
    } catch (error) {
        throw error.response.data.message
    }
}

export const logoutApi = async (data) => {
    try {
        await axios.post(
            `${process.env.REACT_APP_USER_URL}/logout`
        );
    } catch (error) {
        throw error.response.data.message
    }
}