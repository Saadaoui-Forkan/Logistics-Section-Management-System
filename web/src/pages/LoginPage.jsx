import React from 'react'
import { Link } from "react-router-dom"
import LoginForm from '../components/auth/LoginForm'

const LoginPage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white shadow-md rounded-lg p-8 max-w-md w-full">
        <h1 className='text-xl font-bold text-gray-800 text-center mb-6'>Welcome Back! Log In</h1>
        <LoginForm />
        <p className="text-center text-sm text-gray-500 mt-4">
          Do not have an account?{" "}
          <Link to="/register" className="text-blue-600 hover:underline">
            Register
          </Link>
        </p>
      </div>
    </div>
  )
}

export default LoginPage