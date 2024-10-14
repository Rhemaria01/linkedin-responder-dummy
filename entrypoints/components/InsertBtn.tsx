import React from "react";
import InsertIcon from "@/assets/icons/insert.svg";

interface InsertBtnProps {
  onClick: () => void;
}

const InsertBtn: React.FC<InsertBtnProps> = ({ onClick }) => {
  return (
    <button
      onClick={onClick}
      className="bg-primary text-2xl bg-white text-foreground border border-foreground px-6 py-4 rounded-lg font-semibold flex items-center justify-between gap-x-3 self-end">
      <img src={InsertIcon} alt={"insert"} className="w-auto h-6" />
      <span>Insert</span>
    </button>
  );
};

export default InsertBtn;
