"use client";

import React, { useState } from "react";
import Button from "../components/Button";
import InputField from "../components/InputField";
import Logo from "../components/Logo";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const validatePassword = (value: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(value);
  };

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setEmailError("");
    } else if (!validateEmail(value)) {
      setEmailError(
        "E-mail inválido. Insira um endereço de e-mail no formato correto."
      );
    } else {
      setEmailError("");
    }
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setPassword(value);

    if (value === "") {
      setPasswordError("");
    } else if (!validatePassword(value)) {
      setPasswordError(
        "Senha inválida. Verifique se a senha tem pelo menos 8 caracteres com letras maiúsculas, minúsculas, números e caracteres especiais, e tente novamente."
      );
    } else {
      setPasswordError("");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <Logo />
      <div className="w-full max-w-xs mt-8">
        <form>
          <InputField
            label="E-mail"
            type="email"
            placeholder="mail.example@gmail.com"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />
          <InputField
            label="Senha"
            type="password"
            placeholder="********"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />
          <div className="text-left mt-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 text-sm font-bold"
            >
              Esqueci minha senha
            </a>
          </div>
          <br />
          <br />
          <div className="flex items-center justify-between">
            <Button text="Entrar" />
          </div>
        </form>
      </div>
    </div>
  );
}
