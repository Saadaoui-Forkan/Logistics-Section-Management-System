import React from 'react'
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Alert = ({ message }) => {
  if (!message) {
    return; 
  }
  const messagesArray = Array.isArray(message) ? message : [message];
  return (
    <div className="flex flex-col space-y-2 p-4">
      {messagesArray.map((msg, index) => (
        <div
          key={index}
          className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded-lg flex items-center"
        >
          <AiOutlineExclamationCircle className="w-6 h-6 mr-2 text-red-700" />
          <span className="font-semibold">{msg}</span>
        </div>
      ))}
    </div>
  )
}

export default Alert