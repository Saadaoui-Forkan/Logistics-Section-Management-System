import React, { useEffect, useState } from "react";
import { AiOutlineExclamationCircle } from "react-icons/ai";

const Alert = ({ message, duration = 5000, error, success }) => {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    if (message) {
      setVisible(true);
      const timer = setTimeout(() => setVisible(false), duration);
      return () => clearTimeout(timer);
    }
  }, [message, duration]);

  if (!message || !visible) return null;

  const messagesArray = Array.isArray(message) ? message : [message];

  return (
    visible && (
      <div className="fixed top-4 right-4 z-50 space-y-2">
        {error ? (
          messagesArray.map((msg, index) => (
            <div
              key={index}
              className="bg-red-100 bg-opacity-90 border border-red-400 text-red-700 px-4 py-3 rounded-lg shadow-lg flex items-center animate-slideInRight"
            >
              <AiOutlineExclamationCircle className="w-6 h-6 mr-2 text-red-700" />
              <span className="font-semibold">{msg}</span>
            </div>
          ))
        ) : success ? (
          <div className="bg-green-200 bg-opacity-90 border border-green-400 text-green-700 px-4 py-3 rounded-lg shadow-lg flex items-center animate-slideInRight">
            <AiOutlineExclamationCircle className="w-6 h-6 mr-2 text-green-700" />
            <span className="font-semibold">{message}</span>
          </div>
        ) : (
          <div className="bg-yellow-200 bg-opacity-90 border border-yellow-400 text-yellow-600 px-4 py-3 rounded-lg shadow-lg flex items-center animate-slideInRight">
            <AiOutlineExclamationCircle className="w-6 h-6 mr-2 text-yellow-600" />
            <span className="font-semibold">{message}</span>
          </div>
        )}
      </div>
    )
  );
};

export default Alert;
