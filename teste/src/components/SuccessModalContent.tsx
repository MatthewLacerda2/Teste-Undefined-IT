import Button from "./Button";

interface SuccessModalContentProps {
  onClose: () => void;
}

export default function SuccessModalContent({
  onClose,
}: SuccessModalContentProps) {
  return (
    <div>
      <h2 className="text-xl font-bold mb-4">Recuperar senha</h2>
      <p className="mb-4">
        Enviamos um link de recuperação para o seu e-mail cadastrado. Por favor,
        verifique a sua caixa de entrada e a pasta de spam, se necessário.
      </p>
      <Button text="Entendido" onClick={onClose} />
    </div>
  );
}
