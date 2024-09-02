import React, { useState } from "react";
import Button from "./Button";
import InputField from "./InputField";

interface ForgotPasswordModalContentProps {
  onSubmit: () => void;
  onClose: () => void;
}

export default function ForgotPasswordModalContent({
  onSubmit,
  onClose,
}: ForgotPasswordModalContentProps) {
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
      onSubmit();
    } else {
      setEmailError(
        "E-mail inválido. Este endereço de e-mail não está cadastrado no sistema, verifique e tente novamente."
      );
    }
  };

  return (
    <div>
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
  );
}
