import Button from "@/components/Button";
import InputField from "@/components/InputField";
import React, { useState } from "react";
interface ForgotPasswordScreenProps {
  onNext: () => void;
}

export default function ForgotPasswordScreen({
  onNext,
}: ForgotPasswordScreenProps) {
  const [email, setEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    setEmail(value);

    if (!validateEmail(value)) {
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
      onNext();
    } else {
      setEmailError(
        "E-mail inválido. Este endereço de e-mail não está cadastrado no sistema, verifique e tente novamente."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <div className="w-full max-w-xs mt-8">
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
    </div>
  );
}
