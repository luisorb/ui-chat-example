import type { Message } from "../components/Chat/types";

type MessageStatus = "sent" | "delivered" | "read" | "error";

export const getMockChatState = (scenario: string): Message[] => {
  const statusOptions: MessageStatus[] = ["sent", "delivered", "read"];

  const baseMessage: Omit<Message, "id"> = {
    text: "Mensaje base",
    user: "user-1", // Asegurar que usa 'user' en lugar de 'sender'
    status: "delivered",
    timestamp: new Date().toISOString(),
  };

  switch (scenario) {
    case "empty":
      return [];

    case "normal":
      return [
        { ...baseMessage, id: "1", text: "Hola, ¿cómo estás?" },
        {
          ...baseMessage,
          id: "2",
          user: "user-2",
          text: "¡Muy bien, gracias!",
          status: "read",
        },
      ];

    case "large":
      return Array.from(
        { length: 50 },
        (_, i): Message => ({
          ...baseMessage,
          id: `${i + 100}`,
          text: `Mensaje ${i + 1}`,
          user: i % 2 === 0 ? "user-1" : "user-2",
          status: statusOptions[i % statusOptions.length],
          timestamp: new Date(Date.now() - i * 60000).toISOString(),
        })
      );

    case "withErrors":
      return [
        { ...baseMessage, id: "1", text: "Mensaje normal" },
        {
          ...baseMessage,
          id: "2",
          text: "Este mensaje no se pudo enviar",
          status: "error",
          error: true,
        },
      ];

    default:
      return [];
  }
};
