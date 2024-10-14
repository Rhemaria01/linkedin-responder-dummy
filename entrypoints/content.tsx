import "@/assets/tailwind.css";
import { createRoot, Root } from "react-dom/client";
import AIIcon from "./components/AIIcon";
import type { ContentScriptContext } from "wxt/client";
import React from "react";
import Modal from "./components/Modal";
let mountedUI = false;

export type ClickedMessageInputType = Element | null;

export default defineContentScript({
  matches: ["https://www.linkedin.com/*"],
  cssInjectionMode: "ui",
  async main(ctx) {
    const handleOpenModal = async (messageInput: ClickedMessageInputType) => {
      const modalRoot = await createModal(ctx, messageInput);
      modalRoot.mount();
    };

    const handleMessageInputAvailable = async () => {
      const messageInputs = document.getElementsByClassName(
        "msg-form__contenteditable"
      );

      if (messageInputs.length > 0) {
        Array.from(messageInputs).map(async (messageInput) => {
          const messageInputParentElement = messageInput.parentElement!;
          let isHovered = false;
          let isFocused = false;

          const ui = await createUi(ctx, messageInputParentElement, () =>
            handleOpenModal(messageInput)
          );
          const updateAIIconVisibility = () => {
            if (isHovered || isFocused) {
              if (!mountedUI) {
                ui.mount();
                mountedUI = true;
              }
            } else {
              ui.remove();
              mountedUI = false;
            }
          };

          messageInputParentElement.addEventListener("mouseenter", () => {
            isHovered = true;
            updateAIIconVisibility();
          });

          messageInputParentElement.addEventListener("mouseleave", () => {
            isHovered = false;
            updateAIIconVisibility();
          });

          messageInput.addEventListener("focus", () => {
            isFocused = true;
            updateAIIconVisibility();
          });

          messageInput.addEventListener("blur", () => {
            isFocused = false;
            updateAIIconVisibility();
          });
        });
      }
    };

    const observer = new MutationObserver(async () => {
      await handleMessageInputAvailable();
    });

    observer.observe(document.body, { childList: true, subtree: true });

    await handleMessageInputAvailable();
  },
});

function createUi(
  ctx: ContentScriptContext,
  anchor: Element,
  handleOpenModal: () => void
) {
  return createShadowRootUi(ctx, {
    name: "ai-icon",
    position: "inline",
    anchor,
    append: "last",
    onMount: (uiContainer) => {
      const root = createRoot(uiContainer as any);
      root.render(
        <React.StrictMode>
          <AIIcon onIconClick={handleOpenModal} />
        </React.StrictMode>
      );
    },
  });
}

function createModal(
  ctx: ContentScriptContext,
  messageInput: ClickedMessageInputType
) {
  return createShadowRootUi(ctx, {
    name: "ai-icon",
    position: "inline",
    append: "last",
    onMount: (uiContainer) => {
      const root = createRoot(uiContainer as any);
      root.render(
        <React.StrictMode>
          <Modal
            onClose={() => handleCloseModal(root)}
            messageInput={messageInput}
          />
        </React.StrictMode>
      );
      return root;
    },
  });
}

function handleCloseModal(modalRoot: Root) {
  modalRoot.unmount();
}
