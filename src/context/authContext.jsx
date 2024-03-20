import React, { useContext, useEffect, useMemo, useState } from "react";

const defaultState = {
  token: "",
  setToken: () => {},
};

export const AuthContext = React.createContext(defaultState);

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState("");
  console.log(token);

  useEffect(() => {
    const localStorageToken = localStorage.getItem("token");
    if (localStorageToken) {
      setToken(localStorageToken);
    }
  }, [token]);

  const value = useMemo(
    () => ({
      token,
      setToken,
    }),
    [token]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuthContext = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuthContext must be used within a AuthProvider");
  }
  return context;
};
