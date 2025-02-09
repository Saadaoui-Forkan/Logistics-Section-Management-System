import { useMutation } from "@tanstack/react-query";
import { loginApi, registerApi } from "../api/userApi";

export const useLoginMutation = () => {
    return useMutation({
      mutationFn: async (data) => await loginApi(data),
      onSuccess: (data) => localStorage.setItem("token", data.token),
    });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data) => await registerApi(data),
    onSuccess: (data) => localStorage.setItem("token", data.token),
  });
};
