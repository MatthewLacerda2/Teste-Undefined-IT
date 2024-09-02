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
    setShowForgotPasswordModal(false);
    setShowSuccessModal(false);
    router.push("/reset-link");
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
              onClick={() => setShowForgotPasswordModal(true)}
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
