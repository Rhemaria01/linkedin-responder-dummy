import React from "react";
import InitialModalState from "./InitialModalState";
import ResponseGenerated from "./ResponseGenerated";
import { InsertResponseType } from "./Modal";

interface ModalContentProps {
  insertResponse: InsertResponseType;
}
const ModalContent: React.FC<ModalContentProps> = ({ insertResponse }) => {
  const [value, setValue] = useState<string>("");
  const [isInitialState, setInitialState] = useState<boolean>(true);

  const handleValueChange = (val: string) => {
    setValue(val);
  };

  const changeInitialState = (val: boolean) => {
    setInitialState(val);
  };

  if (isInitialState) {
    return (
      <InitialModalState
        value={value}
        handleValueChange={handleValueChange}
        changeInitialState={changeInitialState}
      />
    );
  }

  return (
    <ResponseGenerated
      initialUserMessage={value}
      insertResponse={insertResponse}
    />
  );
};

export default ModalContent;
