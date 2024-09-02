"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";
import Button from "../components/Button";
import ForgotPasswordModalContent from "../components/ForgotPasswordModalContent";
import InputField from "../components/InputField";
import Logo from "../components/Logo";
import Modal from "../components/Modal";
import SuccessModalContent from "../components/SuccessModalContent";

export default function LoginPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [showForgotPasswordModal, setShowForgotPasswordModal] = useState(false);
  const [showSuccessModal, setShowSuccessModal] = useState(false);
  const router = useRouter();

  const handleNext = () => {
    setShowForgotPasswordModal(false);
    setShowSuccessModal(true);
  };

  const handleCloseModals = () => {
    if (showSuccessModal) {
      router.push("/reset-link");
    }
    setShowForgotPasswordModal(false);
    setShowSuccessModal(false);
  };

  const handleForgotPasswordClick = () => {
    if (window.innerWidth <= 768) {
      router.push("/forgot-password");
    } else {
      setShowForgotPasswordModal(true);
    }
  };

  const handleLogin = () => {
    if (email === "undefined@gmail.com" && password === "@QWEasd123") {
      alert("login successful");
      router.push("/home");
    } else {
      setEmailError("E-mail ou senha inválidos");
      setPasswordError("E-mail ou senha inválidos");
    }
  };

  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <Logo />
      <div className="w-full max-w-xs mt-8">
        <form onSubmit={(e) => e.preventDefault()}>
          <InputField
            label="E-mail"
            type="email"
            placeholder="mail.example@gmail.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            error={emailError}
          />
          <InputField
            label="Senha"
            type="password"
            placeholder="********"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            error={passwordError}
          />
          <div className="text-left mt-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 text-sm font-bold"
              onClick={handleForgotPasswordClick}
            >
              Esqueci minha senha
            </a>
          </div>
          <br />
          <br />
          <div className="flex items-center justify-between">
            <Button text="Entrar" onClick={handleLogin} />
          </div>
        </form>
      </div>

      {showForgotPasswordModal && (
        <Modal onClose={handleCloseModals}>
          <ForgotPasswordModalContent
            onSubmit={handleNext}
            onClose={handleCloseModals}
          />
        </Modal>
      )}

      {showSuccessModal && (
        <Modal onClose={handleCloseModals}>
          <SuccessModalContent onClose={handleCloseModals} />
        </Modal>
      )}
    </div>
  );
}
