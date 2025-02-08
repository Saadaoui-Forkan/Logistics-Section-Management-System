import { useMutation } from "@tanstack/react-query";
import { loginApi } from "../api/userApi";

export const useLoginMutation = () => {
    return useMutation({
      mutationFn: async (data) => await loginApi(data),
      onSuccess: (data) => localStorage.setItem("token", data.token),
    });
};

/**
 * export const useLoginMutation = () => {
    const {isPending, mutate} useMutation({
      mutationFn: async (data) => await loginApi(data),
      onSuccess: (data) => localStorage.setItem("token", data.token),
    });
    return {isPending, mutate}
};
 */