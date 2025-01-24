import React from 'react'
import { Link } from "react-router-dom"
import RegisterForm from '../components/auth/RegisterForm'

const RegisterPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-6 max-w-md w-full">
      <h1 className='text-xl font-bold text-gray-800 text-center mb-6'>Welcome! Get Started</h1>
        <RegisterForm/>
        <p className="text-center text-sm text-gray-500 mt-4">
          Already have an account?{" "}
          <Link to="/" className="text-blue-600 hover:underline">
            Login
          </Link>
        </p>
      </div>
    </div>
  )
}

export default RegisterPage