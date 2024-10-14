import React from "react";

// Extend input props with React's built-in input attributes
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {}

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <input
      type="text"
      className="w-full text-2xl font-medium p-2 rounded-md shadow-inner border border-gray-300 focus:outline-none placeholder:text-gray-300"
      {...props} // Spread the rest of the input props here
    />
  );
};

export default Input;
