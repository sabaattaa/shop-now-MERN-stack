import React, { useState } from "react";

export const useLogin = () => {
  const [errorState, setErrorState] = useState(false);
  const [loginData, setLoginData] = useState({
    role: "",
    email: "",
    username: "",
    password: "",
    confirmPassword: "",
  });
  const filterEmptyFields = (data: object) => {
    return Object.fromEntries(
      Object.entries(data).filter(([key, value]) => value.trim() !== "")
    );
  };
  // Handle input change
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorState(true);
    const filteredData = filterEmptyFields(loginData);
    console.log("This is login data:", filteredData);
  };

  return {
    loginData,
    errorState,
    handleSubmit,
    handleInputChange,
  };
};
