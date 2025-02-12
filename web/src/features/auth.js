import { useMutation } from "@tanstack/react-query";
import { loginApi, logoutApi, registerApi } from "../api/userApi";

export const useLoginMutation = () => {
    return useMutation({
      mutationFn: async (data) => await loginApi(data),
      onSuccess: (data) => localStorage.setItem("user", JSON.stringify(data)),
    });
};

export const useRegisterMutation = () => {
  return useMutation({
    mutationFn: async (data) => await registerApi(data),
    onSuccess: (data) => localStorage.setItem("user", JSON.stringify(data)),
  });
};

export const useLogoutMutation = () => {
  return useMutation({
    mutationFn: async () => await logoutApi(),
    onSuccess: (data) => localStorage.clear(),
  });
};
