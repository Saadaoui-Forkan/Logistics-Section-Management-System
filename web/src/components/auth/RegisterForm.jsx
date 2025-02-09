import React, { useState } from "react";
import { useRegisterMutation } from "../../features/auth";
import Spinner from "../spinner";
import { useNavigate } from "react-router-dom";
import Alert from "../error";

const RegisterForm = () => {
  const navigate = useNavigate();
  const [unique_identifier, setUnique_identifier] = useState();
  const [role, setRole] = useState("");
  const [password, setPassword] = useState("");

  const { mutate, isPending, isError, error } = useRegisterMutation();

  const submitHandler = async (e) => {
    e.preventDefault();
    mutate(
      { unique_identifier, role, password },
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
            Unique Identifier <span className="mr-2 text-xs text-red-600">(number)</span>
          </label>
          <input
            type="unique_identifier"
            id="unique_identifier"
            value={unique_identifier}
            onChange={(e) => setUnique_identifier(parseInt(e.target.value) || "")}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div>
          <label
            htmlFor="role"
            className="block text-sm font-medium text-gray-700"
          >
            Role
          </label>
          <input
            type="role"
            id="role"
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

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
