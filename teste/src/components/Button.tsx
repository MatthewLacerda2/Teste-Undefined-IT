import React from "react";

interface ButtonProps {
  text: string;
  onClick?: () => void;
}

const Button: React.FC<ButtonProps> = ({ text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-orange-500 hover:bg-orange-700 text-white font-bold py-2 px-4 rounded-xl w-full"
    >
      {text}
    </button>
  );
};

export default Button;
