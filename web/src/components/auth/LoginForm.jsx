import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import Alert from "../../components/error";
import { useLoginMutation } from "../../features/auth";
import Spinner from "../spinner";
import useForm from "../../hooks/useForm";
import AppContext from "../../context/AppContext";
import { loginInputs } from "../../inputs";

const LoginForm = () => {
  const navigate = useNavigate();
  const { formData, handleChange } = useForm(
    {
      unique_identifier: "",
      password: "",
    },
    ["unique_identifier"]
  );

  const { mutate, isPending, isError, error } = useLoginMutation();
  const { setCredentials } = useContext(AppContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    mutate(formData, {
      onSuccess: (data) => {
        setCredentials(data);
        navigate("/dashboard");
      },
    });
  };
  return (
    <>
      {isError && <Alert message={error} />}
      <form className="space-y-6" onSubmit={submitHandler}>
        {loginInputs.map(({ id, label, type, placeholder }) => (
          <div key={id}>
            <label htmlFor={id} className="block text-sm font-medium text-gray-700">
              {label}
            </label>
            <input
              type={type}
              id={id}
              name={id}
              value={formData[id]}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder={placeholder}
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300 ease-in-out"
          disabled={isPending}
        >
          {isPending ? <Spinner small /> : "Login"}
        </button>
      </form>
    </>
  );
};

export default LoginForm;