import React from 'react'
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Alert = ({ message }) => {
  return (
    <div className="flex items-center justify-center p-4">
      <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg w-full flex items-center">
        <AiOutlineExclamationCircle className="w-6 h-6 mr-2 text-red-700" />
        <span className="font-semibold">{message}</span>
      </div>
    </div>
  )
}

export default Alert