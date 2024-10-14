import React from "react";
import Input from "./Input";
import PrimaryBtn from "./PrimaryBtn";
import SendIcon from "@/assets/icons/send.svg";
interface InitialModalStateProps {
  value: string;
  handleValueChange: (val: string) => void;
  changeInitialState: (val: boolean) => void;
}
const InitialModalState: React.FC<InitialModalStateProps> = ({
  value,
  handleValueChange,
  changeInitialState,
}) => {
  return (
    <form
      onSubmit={() => changeInitialState(false)}
      className="flex flex-col items-center gap-y-4">
      <Input
        value={value}
        required
        onChange={(e) => handleValueChange(e.target.value)}
        placeholder="Your Prompt"
      />
      <PrimaryBtn type="submit" label="Generate" Icon={SendIcon} alt="send" />
    </form>
  );
};

export default InitialModalState;
