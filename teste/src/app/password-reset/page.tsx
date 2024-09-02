"use client";

import Button from "@/components/Button";
import InputField from "@/components/InputField";
import Logo from "@/components/Logo";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function PasswordResetPage() {
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [confirmPasswordError, setConfirmPasswordError] = useState("");
  const router = useRouter();

  const validatePassword = (value: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
    setPasswordError("");
  };

  const handleConfirmPasswordChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {
    setConfirmPassword(e.target.value);
    setConfirmPasswordError("");
  };

  const handleSubmit = () => {
    if (password === "" || confirmPassword === "") {
      setPasswordError("Por favor, preencha todos os campos.");
      setConfirmPasswordError("Por favor, preencha todos os campos.");
    } else if (
      !validatePassword(password) ||
      !validatePassword(confirmPassword)
    ) {
      setPasswordError(
        "Senha inválida. Verifique se a senha tem pelo menos 8 caracteres com letras maiúsculas, minúsculas, números e caracteres especiais, e tente novamente."
      );
      setConfirmPasswordError(
        "Senha inválida. Verifique se a senha tem pelo menos 8 caracteres com letras maiúsculas, minúsculas, números e caracteres especiais, e tente novamente."
      );
    } else if (password !== confirmPassword) {
      setConfirmPasswordError("As senhas não coincidem.");
    } else {
      alert("Senha alterada. Faça login.");
      router.push("/reset-link");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <Logo />
      <div className="w-full max-w-md mt-8">
        <div className="bg-gray-100 p-6 rounded-lg">
          <h2 className="text-xl font-bold text-center mb-4">
            Redefinir senha
          </h2>
          <p className="text-gray-600 text-center mb-6">
            Redefina sua senha com no mínimo 6 caracteres
          </p>
          <InputField
            label="Senha"
            type="password"
            placeholder="Digite uma senha"
            value={password}
            onChange={handlePasswordChange}
            error={passwordError}
          />
          <InputField
            label="Confirme sua senha"
            type="password"
            placeholder="Repita sua senha"
            value={confirmPassword}
            onChange={handleConfirmPasswordChange}
            error={confirmPasswordError}
          />
          <div className="text-sm font-bold text-gray-600 mt-4">
            <p>Crie uma senha segura</p>
            <ul className="font-normal list-disc ml-4">
              <li>use letras maiúsculas e minúsculas, símbolos e números;</li>
              <li>não use informações pessoais como datas de aniversário;</li>
              <li>não use uma senha igual à anterior.</li>
            </ul>
          </div>
          <div className="mt-8">
            <Button text="Redefinir senha" onClick={handleSubmit} />
          </div>
        </div>
      </div>
    </div>
  );
}
