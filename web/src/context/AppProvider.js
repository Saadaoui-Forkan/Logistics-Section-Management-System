import { useState } from "react";
import AppContext from "./AppContext";

const AppProvider = ({ children }) => {
  const [auth, setAuth] = useState(() =>
    JSON.parse(localStorage.getItem("user"))
  );

  const setCredentials = (data) => {
    localStorage.setItem("user", JSON.stringify(data));
    setAuth(data);
  };

  const logout = () => {
    localStorage.removeItem("user");
    setAuth(null);
  };

  return (
    <AppContext.Provider value={{ setCredentials, auth, logout }}>
      {children}
    </AppContext.Provider>
  );
};

export default AppProvider;
