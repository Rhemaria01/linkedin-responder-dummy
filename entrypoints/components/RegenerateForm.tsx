import React from "react";
import Input from "./Input";
import RegenerateIcon from "@/assets/icons/repeat.svg";
import PrimaryBtn from "./PrimaryBtn";
import InsertBtn from "./InsertBtn";
import { InsertResponseType } from "./Modal";

interface RegenerateFormProps {
  textToInsert: string;
  insertResponse: InsertResponseType;
}
const RegenerateForm: React.FC<RegenerateFormProps> = ({
  textToInsert,
  insertResponse,
}) => {
  const [value, setValue] = useState<string>("");

  return (
    <div className="space-y-4 w-full">
      <Input
        value={value}
        required
        onChange={(e) => setValue(e.target.value)}
        placeholder="Your Prompt"
      />
      <div className="flex gap-x-4 w-full justify-end">
        <InsertBtn onClick={() => insertResponse(textToInsert)} />
        <PrimaryBtn label="Regenerate" Icon={RegenerateIcon} alt="regenerate" />
      </div>
    </div>
  );
};

export default RegenerateForm;
