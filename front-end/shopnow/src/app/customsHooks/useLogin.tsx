import React, { useEffect, useState } from "react";

export const useLogin = () => {
  const [errorState, setErrorState] = useState(false);
  const [passwordState, setPasswordState] = useState(false);
  const [loginData, setLoginData] = useState({
    name:"",
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

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setLoginData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  useEffect(() => {
    if (loginData.password !== loginData.confirmPassword) {
      setPasswordState(true);
      console.log("Sssss");
    } else {
      setPasswordState(false);
    }
  }, [loginData]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setErrorState(true);
    const filteredData = filterEmptyFields(loginData);
    console.log("This is login data:", filteredData);
  };

  return {
    loginData,
    passwordState,
    errorState,
    handleSubmit,
    handleInputChange,
  };
};
