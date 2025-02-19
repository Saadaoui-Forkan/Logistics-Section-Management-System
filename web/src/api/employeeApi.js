import axios from "axios";

export const addEmployeeApi = async(data, accessToken) => {
    try {
        const res = await axios.post(
            `${process.env.REACT_APP_EMPLOYEE_URL}/add`,
            data, 
            {
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                },
                withCredentials: true,
            }
          );
          return res.data;
    } catch (error) {
        throw error.response.data.message
    }
}