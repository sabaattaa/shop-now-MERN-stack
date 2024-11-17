"use client";
import React from "react";
import style from "../login/login.module.css";
import InputField from "@/app/components/inputField";
import ButtonField from "@/app/components/button";
import { lato } from "../../fonts/allFonts";
import { useLogin } from "../../customsHooks/useLogin";
const Register = () => {
  const { handleInputChange, handleSubmit, loginData, errorState } = useLogin();

  return (
    <div className={`${style.main} ${lato.className} h-100 red`}>
      <form action="" className="d-flex flex-column blue p-3 rounded-3">
        <h2>Register to Mart</h2>
        <InputField
          errorState={errorState}
          value={loginData?.email}
          onchange={handleInputChange}
          placeholder={"Enter Email/username"}
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
          placeholder={"Enter Password"}
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
