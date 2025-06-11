import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import ChatHeader from "./ChatHeader";
import MessagesList from "./MessagesList";
import MessageInput from "./MessageInput";
import useTheme from "../../hooks/useTheme";
import type { ChatContainerProps, Message } from "./types";

const ChatContainer: React.FC<ChatContainerProps> = ({
  currentChat,
  onSendMessage,
  onBack,
  skin = "default",
  availableSkins = [],
  onChangeSkin = () => {},
}) => {
  const { theme, toggleTheme } = useTheme();
  const [messages, setMessages] = useState<Message[]>(
    currentChat?.messages || []
  );

  useEffect(() => {
    setMessages(currentChat?.messages || []);
  }, [currentChat]);

  const handleSendMessage = (message: string) => {
    const newMessage: Message = {
      id: Date.now(),
      text: message,
      user: "user",
      status: "sent",
      timestamp: new Date().toISOString(),
    };

    setMessages([...messages, newMessage]);
    onSendMessage(newMessage);
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.3 }}
      className={`flex flex-col h-full ${skin}`}
    >
      {currentChat && (
        <>
          <ChatHeader
            user={currentChat.user}
            onBack={onBack}
            theme={theme}
            toggleTheme={toggleTheme}
            availableSkins={availableSkins}
            onChangeSkin={onChangeSkin}
            currentSkin={skin}
          />

          <MessagesList
            messages={messages}
            currentUser="user"
            theme={theme}
            skin={skin}
          />

          <MessageInput onSend={handleSendMessage} theme={theme} skin={skin} />
        </>
      )}
    </motion.div>
  );
};

export default ChatContainer;
