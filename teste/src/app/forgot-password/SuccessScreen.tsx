import Button from "@/components/Button";
interface SuccessScreenProps {
  onClose: () => void;
}
export default function SuccessScreen({ onClose }: SuccessScreenProps) {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <div className="w-full max-w-xs mt-8">
        <h2 className="text-xl font-bold mb-4">Recuperar senha</h2>
        <p className="mb-4">
          Enviamos um link de recuperação para o seu e-mail cadastrado. Por
          favor, verifique a sua caixa de entrada e a pasta de spam, se
          necessário.
        </p>
        <Button text="Próximo" onClick={onClose} />
      </div>
    </div>
  );
}
