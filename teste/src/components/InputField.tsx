import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
}) => {
  return (
    <div className="mb-6">
      <label className="block text-gray-700 text-sm font-bold mb-2">
        {label}
        <span className="text-red-500">*</span>
      </label>
      <input
        type={type}
        placeholder={placeholder}
        className="border border-gray-300 rounded-lg w-full py-2 px-3 text-gray-600 font-bold leading-tight focus:outline-none"
      />
    </div>
  );
};

export default InputField;
