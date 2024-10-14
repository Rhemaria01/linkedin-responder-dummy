// Modal.tsx
import React from "react";
import ModalContent from "./ModalContent";
import { ClickedMessageInputType } from "../content";

interface ModalProps {
  onClose: () => void;
  messageInput: ClickedMessageInputType;
}
export type InsertResponseType = (response: string) => void;

const Modal: React.FC<ModalProps> = ({ onClose, messageInput }) => {
  const handleOverlayClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  const insertResponse: InsertResponseType = (response: string) => {
    if (messageInput) {
      // Find the <p> tag inside messageInput
      const pTag = messageInput.querySelector("p");

      // Check if the <p> tag exists, then update its textContent
      if (pTag) {
        pTag.textContent = response;
      }

      // Trigger an 'input' event to notify LinkedIn that the content has changed
      const inputEvent = new Event("input", { bubbles: true });
      messageInput.dispatchEvent(inputEvent);

      // Find the sibling <div> with the class 'msg-form__placeholder'
      const placeholderDiv = messageInput.parentNode?.querySelector(
        ".msg-form__placeholder"
      );

      // If the placeholder div exists, remove the 'msg-form__placeholder' class
      if (placeholderDiv) {
        placeholderDiv.classList.remove("msg-form__placeholder");
      }

      // Close the modal or perform any other necessary action
      onClose();

      // Set focus back to messageInput (if needed) to maintain user interaction
      //@ts-ignore
      messageInput.focus();
    }
  };

  return (
    <div
      className="fixed inset-0 z-[1000] bg-black/80 font-inter"
      onClick={handleOverlayClick}>
      <div className="absolute w-full max-w-screen-md left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-background text-foreground  p-6 shadow-lg rounded-[15px] ">
        <ModalContent insertResponse={insertResponse} />
      </div>
    </div>
  );
};

export default Modal;
