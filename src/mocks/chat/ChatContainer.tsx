import React from "react";

export type Message = {
  id: number;
  text: string;
  user: "user" | "bot";
  error?: boolean;
};

export interface ChatContainerProps {
  onSendMessage: (msg: string) => void;
  onBack: () => void;

  currentChat: {
    user: {
      id: string;
      name: string;
      avatar?: string;
      online: boolean;
    };
    messages: Message[];
  };
}

const ChatContainer: React.FC<ChatContainerProps> = ({
  currentChat,
  onSendMessage,
  onBack,
}) => {
  return (
    <div
      data-testid="messages-container"
      style={{ padding: "1rem", height: "100%", overflowY: "auto" }}
    >
      <button onClick={onBack}>Volver</button>
      <div>
        {currentChat.messages.map((msg) => (
          <div key={msg.id} data-testid="message">
            {msg.error ? (
              <>
                <span>{msg.text}</span>
                <span data-testid="error-icon">❌</span>
              </>
            ) : (
              msg.text
            )}
          </div>
        ))}
      </div>
      <input
        role="textbox"
        aria-label="Escribe un mensaje"
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            const value = (e.target as HTMLInputElement).value;
            onSendMessage(value);
            (e.target as HTMLInputElement).value = "";
          }
        }}
      />
      <button aria-label="Enviar mensaje" onClick={() => {}}>
        Enviar
      </button>
    </div>
  );
};

export default ChatContainer;
