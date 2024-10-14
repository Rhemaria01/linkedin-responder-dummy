import React from "react";
import MagicWandIcon from "@/assets/icons/magic-wand.svg";

interface AIIconProps {
  onIconClick: () => void;
}

const AIIcon: React.FC<AIIconProps> = ({ onIconClick }) => {
  return (
    <div className="h-full w-full relative">
      <button
        onClick={onIconClick}
        className="p-2 rounded-full bg-white drop-shadow-md absolute right-3 bottom-4">
        <img src={MagicWandIcon} alt="open ai responder" className="h-4 w-4" />
      </button>
    </div>
  );
};

export default AIIcon;
