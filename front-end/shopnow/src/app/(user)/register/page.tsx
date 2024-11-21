"use client";
import React from "react";
import style from "../login/login.module.css";
import InputField from "@/app/_components/inputField";
import ButtonField from "@/app/_components/button";
import { lato } from "../../fonts/allFonts";
import { useLogin } from "../../customsHooks/useLogin";
const Register = () => {
  const {
    loginData,
    errorState,
    handleSubmit,
    passwordState,
    handleInputChange,
  } = useLogin();

  return (
    <div className={`${style.main} ${lato.className} h-100 red`}>
      <form action="" className="d-flex flex-column b-gray p-3 rounded-3">
        <h2>Register to Mart</h2>
        <InputField
          errorState={errorState}
          value={loginData?.name}
          onchange={handleInputChange}
          placeholder={" Your Name"}
          name="name"
          type="text"
          required={true}
          disable={false}
          style={{
            border: "2px solid #007BFF",
            borderRadius: "4px",
            padding: "8px",
            marginBottom: "10px",
          }}
          className="custom-input"
        />
        <InputField
          errorState={errorState}
          value={loginData?.email}
          onchange={handleInputChange}
          placeholder={" Email/Username"}
          name="email"
          type="text"
          required={true}
          disable={false}
          style={{
            border: "2px solid #007BFF",
            borderRadius: "4px",
            padding: "8px",
            marginBottom: "10px",
          }}
          className="custom-input"
        />
        <InputField
          errorState={errorState}
          value={loginData?.password}
          onchange={handleInputChange}
          placeholder={"Password"}
          name="password"
          type="password"
          required={true}
          disable={false}
          style={{
            border: "2px solid #007BFF",
            borderRadius: "4px",
            padding: "8px",
            marginBottom: "10px",
          }}
          className="custom-input"
        />{" "}
        <InputField
          errorState={errorState}
          passwordState={passwordState}
          value={loginData?.confirmPassword}
          onchange={handleInputChange}
          placeholder={"Confirm Password"}
          name="confirmPassword"
          type="password"
          required={true}
          disable={false}
          style={{
            border: "2px solid #007BFF",
            borderRadius: "4px",
            padding: "8px",
            marginBottom: "10px",
          }}
          className="custom-input"
        />
        <ButtonField
          name="loginButton"
          type="submit"
          onClick={handleSubmit}
          disabled={false}
          className="login-btn"
          style={{
            padding: "10px 20px",
            backgroundColor: "#4CAF50",
            color: "#fff",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
          }}
        >
          Register
        </ButtonField>
      </form>
    </div>
  );
};

export default Register;
