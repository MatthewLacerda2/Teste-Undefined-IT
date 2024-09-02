"use client";

import { useRouter } from "next/navigation"; // Use router for navigation
import React, { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import SuccessScreen from "./SuccessScreen";

export default function ForgotPasswordPage() {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);
  const router = useRouter();

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (value === "") {
      setEmailError("");
    } else if (!validateEmail(value)) {
      setEmailError(
        "E-mail inválido. Este endereço de e-mail não está cadastrado no sistema, verifique e tente novamente."
      );
    } else {
      setEmailError("");
    }
  };

  const validateEmail = (value: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(value);
  };

  const handleSubmit = () => {
    if (validateEmail(email)) {
      setShowSuccessScreen(true);
    } else {
      setEmailError(
        "E-mail inválido. Este endereço de e-mail não está cadastrado no sistema, verifique e tente novamente."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      {!showSuccessScreen && (
        <div className="w-full max-w-xs mt-8">
          <button onClick={() => router.back()} className="mb-4">
            ← Voltar
          </button>
          <h2 className="text-xl font-bold mb-4">Recuperar senha</h2>
          <p className="mb-4">
            Para recuperar sua senha, digite o e-mail cadastrado.
          </p>
          <InputField
            label="E-mail"
            type="email"
            placeholder="mail.example@gmail.com"
            value={email}
            onChange={handleEmailChange}
            error={emailError}
          />
          <Button text="Enviar" onClick={handleSubmit} />
        </div>
      )}

      {showSuccessScreen && <SuccessScreen onClose={() => router.push("/")} />}
    </div>
  );
}
