import React, { useContext } from "react";
import { useRegisterMutation } from "../../features/auth";
import Spinner from "../spinner";
import { useNavigate } from "react-router-dom";
import Alert from "../error";
import useForm from "../../hooks/useForm";
import AppContext from "../../context/AppContext";
import { registerInputs } from "../../inputs";

const RegisterForm = () => {
  const navigate = useNavigate();

  const { formData, handleChange } = useForm({
    unique_identifier: "",
    role: "",
    password: "",
  }, ["unique_identifier"]);

  const { mutate, isPending, isError, error } = useRegisterMutation();
  const { setCredentials } = useContext(AppContext);

  const submitHandler = async (e) => {
    e.preventDefault();
    mutate(
      formData,
      { onSuccess: (data) => {
        setCredentials(data);
        navigate("/dashboard");
      }}
    );
  };
  return (
    <>
      {isError && <Alert message={error} error/>}
      <form className="space-y-6 mx-1" onSubmit={submitHandler}>
        {registerInputs.map((field) => (
          <div key={field.id}>
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-gray-700"
            >
              {field.label}{" "}
              {field.extraText && (
                <span className="mr-2 text-xs text-red-600">{field.extraText}</span>
              )}
            </label>
            <input
              type={field.type}
              id={field.id}
              name={field.name}
              value={formData[field.name]}
              onChange={handleChange}
              className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
              placeholder={field.placeholder}
            />
          </div>
        ))}

        <button
          type="submit"
          className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 rounded-lg transition duration-300 ease-in-out"
          disabled={isPending}
        >
          {isPending ? <Spinner small /> : "Register"}
        </button>
      </form>
    </>
  );
};

export default RegisterForm;