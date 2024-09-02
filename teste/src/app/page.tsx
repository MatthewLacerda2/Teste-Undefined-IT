import Button from "../components/Button";
import InputField from "../components/InputField";
import Logo from "../components/Logo";

export default function LoginPage() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-white p-4">
      <Logo />
      <div className="w-full max-w-xs mt-8">
        <form>
          <InputField
            label="E-mail"
            type="email"
            placeholder="mail.example@gmail.com"
          />
          <InputField label="Senha" type="password" placeholder="********" />
          <div className="text-left mt-4">
            <a
              href="#"
              className="text-blue-500 hover:text-blue-700 text-sm font-bold"
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
    </div>
  );
}
