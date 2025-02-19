import { useMutation } from "@tanstack/react-query";
import { addEmployeeApi } from "../api/employeeApi";

export const useAddEmployeeMutation = () => {
    return useMutation({
      mutationFn: async ({data, accessToken}) => await addEmployeeApi(data, accessToken),
    });
};