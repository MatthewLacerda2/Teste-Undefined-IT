"use client";

import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useRouter } from "next/navigation";

export default function ResetLinkPage() {
  const router = useRouter();

  const handleNextClick = () => {
    router.push("/password-reset");
  };

  return (
    <div className="min-h-screen flex flex-col items-center bg-white">
      <div className="w-full bg-gray-400 py-4 flex justify-center">
        <FontAwesomeIcon icon={faLink} size="3x" className="text-white" />
      </div>

      <div className="w-full max-w-sm sm:max-w-md md:max-w-lg lg:max-w-xl p-4">
        <div className="bg-white rounded-lg p-6 mt-8 border border-black">
          <p className="mb-4">Olá,</p>
          <br />
          <p className="mb-4">
            Crie uma senha de acesso clicando no link abaixo.
          </p>
          <br />
          <a
            href="#"
            className="text-blue-500 hover:text-blue-700 break-words mb-4 block"
            onClick={handleNextClick}
          >
            https://trajetonbdchabvuyhbvayrbvyubrvyhv.senha
          </a>
          <br />
          <p className="text-red-500 font-bold">O link expira em 24 horas</p>
        </div>
      </div>
    </div>
  );
}
