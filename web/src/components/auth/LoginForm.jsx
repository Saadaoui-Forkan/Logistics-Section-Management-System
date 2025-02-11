import React from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/error";
import { useLoginMutation } from "../../features/auth";
import Spinner from "../spinner";
import useForm from "../../hooks/useForm";

const LoginForm = () => {
  const navigate = useNavigate();
  const { formData, handleChange } = useForm({
    unique_identifier: "",
    password: "",
  }, ["unique_identifier"])

  const { mutate, isPending, isError, error } = useLoginMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    mutate(
      formData,
      { onSuccess: () => navigate("/dashboard") }
    );
  };
  return (
    <>
      {isError && <Alert message={error} />}
      <form className="space-y-6" onSubmit={submitHandler}>
        <div>
          <label
            htmlFor="unique_identifier"
            className="block text-sm font-medium text-gray-700"
          >
            Unique Identifier
          </label>
          <input
            type="unique_identifier"
            id="unique_identifier"
            name="unique_identifier"
            value={formData.unique_identifier}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your Unique Identifier"
          />
        </div>

        <div>
          <label
            htmlFor="password"
            className="block text-sm font-medium text-gray-700"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your Password"
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300 ease-in-out"
          disabled={isPending}
        >
          {isPending ? (
            <Spinner small/>
          ) : (
            "Login"
          )}
        </button>
      </form>
    </>
  );
};

export default LoginForm;
