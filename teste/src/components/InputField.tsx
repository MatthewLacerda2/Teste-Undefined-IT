import React from "react";

interface InputFieldProps {
  label: string;
  type: string;
  placeholder: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error?: string;
}

const InputField: React.FC<InputFieldProps> = ({
  label,
  type,
  placeholder,
  value,
  onChange,
  error,
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
        value={value}
        onChange={onChange}
        className={`border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg w-full py-2 px-3 text-gray-600 font-bold leading-tight focus:outline-none`}
      />
      {error && <p className="text-red-500 text-xs mt-1">{error}</p>}
    </div>
  );
};

export default InputField;
