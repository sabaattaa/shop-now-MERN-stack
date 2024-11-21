"use client";
import React from "react";
import style from "./login.module.css";
import InputField from "@/app/_components/inputField";
import ButtonField from "@/app/_components/button";
import { lato } from "../../fonts/allFonts"
import {useLogin} from "../../customsHooks/useLogin"
const Login = () => {

const { handleInputChange, handleSubmit, loginData } = useLogin(); 

  return (
    <div className={`${style.main} ${lato.className} h-100 red`}>
      <form action="" className="d-flex flex-column b-gray p-3 rounded-3">
        <h2>Welcom to Mart</h2>
        <InputField
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
          value={loginData?.password}
          onchange={handleInputChange}
          placeholder={"Enter Password"}
          name="password"
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
          Login
        </ButtonField>
      </form>
    </div>
  );
};

export default Login;
