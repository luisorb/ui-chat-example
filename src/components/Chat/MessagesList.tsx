import { useEffect, useRef } from "react";
import { AnimatePresence } from "framer-motion";
import Message from "./Message";
import type { MessagesListProps } from "./types";

const MessagesList: React.FC<MessagesListProps> = ({
  messages,
  currentUser,
  theme,
  skin,
}) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-2 bg-gray-50 dark:bg-gray-900">
      <div className="space-y-1">
        <AnimatePresence>
          {messages.map((message) => (
            <Message
              key={message.id}
              message={message}
              isCurrentUser={message.user === currentUser}
              theme={theme}
              skin={skin}
            />
          ))}
        </AnimatePresence>
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessagesList;
