import React from "react";

import { v4 as uuid } from "uuid";
import RegenerateForm from "./RegenerateForm";
import Chatbox from "./Chatbox";
import { InsertResponseType } from "./Modal";
interface ResponseGeneratedProps {
  initialUserMessage: string;
  insertResponse: InsertResponseType;
}
export interface Message {
  id: string;
  text: string;
  isUserMessage: boolean;
}
const response: string =
  "Thank you for the opportunity! If you have any more questions or if there's anything else I can help you with, feel free to ask.";

const ResponseGenerated: React.FC<ResponseGeneratedProps> = ({
  initialUserMessage,
  insertResponse,
}) => {
  const messages: Message[] = [
    {
      id: uuid(),
      text: initialUserMessage,
      isUserMessage: true,
    },
    {
      id: uuid(),
      text: response,
      isUserMessage: false,
    },
  ];

  return (
    <div className="space-y-6 w-full">
      <Chatbox messages={messages} />
      <RegenerateForm textToInsert={response} insertResponse={insertResponse} />
    </div>
  );
};

export default ResponseGenerated;
