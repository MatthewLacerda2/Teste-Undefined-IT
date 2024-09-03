"use client";

import { faArrowLeft } from "@fortawesome/free-solid-svg-icons/faArrowLeft";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";
import SuccessScreen from "./SuccessScreen";

export default function ForgotPasswordPage() {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");
  const [showSuccessScreen, setShowSuccessScreen] = useState(false);

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
    <div className="min-h-screen flex flex-col bg-white">
      {!showSuccessScreen && (
        <>
          <div className="p-4">
            <div className="flex items-center p-4">
              <button
                onClick={() => router.back()}
                title="Voltar"
                className="text-sm text-black flex items-center mr-2"
              >
                <FontAwesomeIcon icon={faArrowLeft} className="mr-2" />
              </button>
              <h2 className="text-xl font-bold">Recuperar senha</h2>
            </div>

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
          </div>
          <div className="mt-auto p-4">
            <Button text="Enviar" onClick={handleSubmit} />
          </div>
        </>
      )}

      {showSuccessScreen && (
        <div className="flex-grow">
          <SuccessScreen onClose={() => router.push("/reset-link")} />
        </div>
      )}
    </div>
  );
}
