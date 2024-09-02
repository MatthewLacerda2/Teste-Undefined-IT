import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router from "next/router";
import Button from "../../components/Button";

interface SuccessScreenProps {
  onClose: () => void;
}

export default function SuccessScreen({ onClose }: SuccessScreenProps) {
  return (
    <div className="min-h-screen flex flex-col bg-white">
      <div className="p-4">
        <div className="flex items-center p-4">
          <button
            onClick={() => router.back()}
            aria-label="Voltar"
            className="text-sm text-black flex items-center mr-2"
          >
            <FontAwesomeIcon icon={faArrowLeft} className="mr-1" />
          </button>
          <h2 className="text-xl font-bold">Recuperar senha</h2>
        </div>

        <p className="mb-4">
          Enviamos um link de recuperação para o seu e-mail cadastrado. Por
          favor, verifique a sua caixa de entrada e a pasta de spam, se
          necessário.
        </p>
      </div>
      <div className="mt-auto p-4">
        <Button text="Próximo" onClick={onClose} />
      </div>
    </div>
  );
}
