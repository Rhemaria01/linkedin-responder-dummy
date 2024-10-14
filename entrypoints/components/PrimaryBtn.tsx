import React from "react";

// Extend button props with custom props
interface PrimaryBtnProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  Icon: string;
  label: string;
  alt?: string;
}

const PrimaryBtn: React.FC<PrimaryBtnProps> = ({
  Icon,
  label,
  alt,
  ...props // Spread the rest of the button props
}) => {
  return (
    <button
      className="bg-primary text-2xl text-white px-6 py-4 rounded-lg font-semibold flex items-center justify-between gap-x-3 self-end"
      {...props} // Apply the rest of the button props here
    >
      <img src={Icon} alt={alt} className="w-auto h-6" />
      <span>{label}</span>
    </button>
  );
};

export default PrimaryBtn;
