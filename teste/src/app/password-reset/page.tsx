"use client";

import { useRouter } from "next/navigation";
import React, { useState } from "react";
import Button from "../../components/Button";
import InputField from "../../components/InputField";

export default function PasswordResetPage() {
  const [password, setPassword] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const router = useRouter();

  const validatePassword = (value: string) => {
    const passwordRegex =
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(value);
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

  const handleSubmit = () => {
    if (validatePassword(password)) {
      router.push("/login");
    } else {
      setPasswordError(
        "Senha inválida. Verifique se a senha tem pelo menos 8 caracteres com letras maiúsculas, minúsculas, números e caracteres especiais, e tente novamente."
      );
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-100 p-4">
      <div className="bg-white shadow-md rounded-lg w-full max-w-md p-6">
        <h2 className="text-xl font-bold mb-4">Criar nova senha</h2>
        <InputField
          label="Nova Senha"
          type="password"
          placeholder="********"
          value={password}
          onChange={handlePasswordChange}
          error={passwordError}
        />
        <Button text="Confirmar" onClick={handleSubmit} />
      </div>
    </div>
  );
}
