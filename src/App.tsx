import { useState } from "react";
import { motion } from "framer-motion";
import ChatContainer from "./components/Chat/ChatContainer";
import type { Chat, Skin } from "./components/Chat/types";
import { FiChevronLeft } from "react-icons/fi";

const demoChats: Chat[] = [
  {
    id: "1",
    user: {
      id: "2",
      name: "María García",
      avatar: "https://randomuser.me/api/portraits/women/44.jpg",
      online: true,
    },
    messages: [
      {
        id: "1",
        text: "Hola! ¿Cómo estás?",
        sender: "2",
        status: "read",
        timestamp: new Date(Date.now() - 3600000).toISOString(),
      },
      {
        id: "2",
        text: "Estoy bien, gracias por preguntar. ¿Y tú?",
        sender: "user",
        status: "read",
        timestamp: new Date(Date.now() - 1800000).toISOString(),
      },
      {
        id: "3",
        text: "¿Quieres quedar este fin de semana?",
        sender: "2",
        status: "delivered",
        timestamp: new Date(Date.now() - 600000).toISOString(),
      },
    ],
  },
  {
    id: "2",
    user: {
      id: "3",
      name: "Carlos Martínez",
      avatar: "https://randomuser.me/api/portraits/men/32.jpg",
      online: false,
    },
    messages: [
      {
        id: "1",
        text: "Oye, ¿has visto el último correo que te envié?",
        sender: "3",
        status: "read",
        timestamp: new Date(Date.now() - 86400000).toISOString(),
      },
      {
        id: "2",
        text: "Todavía no, lo revisaré más tarde",
        sender: "user",
        status: "delivered",
        timestamp: new Date(Date.now() - 43200000).toISOString(),
      },
    ],
  },
];

const App: React.FC = () => {
  const [currentChatId, setCurrentChatId] = useState<string | null>("1");
  const [skin, setSkin] = useState<Skin>("default");
  const [showSidebar, setShowSidebar] = useState(true);

  const currentChat = demoChats.find((chat) => chat.id === currentChatId);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const selectChat = (chatId: string) => {
    setCurrentChatId(chatId);
    if (window.innerWidth < 768) {
      // 768px es el breakpoint de Tailwind para 'md'
      setShowSidebar(false);
    }
  };

  const handleBack = () => {
    setCurrentChatId(null);
    if (window.innerWidth < 768) {
      setShowSidebar(true);
    }
  };

  const handleSendMessage = (message: any) => {
    console.log("Mensaje enviado:", message);
    // Aquí iría la lógica para enviar el mensaje al servidor
  };

  const availableSkins: Skin[] = ["default", "modern", "nature"];

  return (
    <div className="flex flex-col h-screen bg-gray-100 dark:bg-gray-900">
      <div className="flex flex-1 overflow-hidden">
        {/* Lista de chats */}
        <div
          className={`${
            showSidebar ? "block" : "hidden"
          } md:block w-full md:w-64 border-r border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 overflow-y-auto transition-all duration-300 sidebar-mobile`}
        >
          {demoChats.map((chat) => (
            <motion.div
              key={chat.id}
              whileTap={{ scale: 0.98 }}
              onClick={() => selectChat(chat.id)}
              className={`p-3 border-b border-gray-300 dark:border-gray-700 cursor-pointer flex items-center ${
                currentChatId === chat.id
                  ? "bg-blue-50 dark:bg-gray-700"
                  : "hover:bg-gray-50 dark:hover:bg-gray-700"
              }`}
            >
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
                {chat.user.avatar ? (
                  <img
                    src={chat.user.avatar}
                    alt={chat.user.name}
                    className="w-full h-full object-cover"
                  />
                ) : (
                  <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-300">
                    {chat.user.name.charAt(0).toUpperCase()}
                  </div>
                )}
              </div>
              <div className="ml-3">
                <h3 className="font-medium text-gray-800 dark:text-white">
                  {chat.user.name}
                </h3>
                <p className="text-xs text-gray-500 dark:text-gray-400 truncate">
                  {chat.messages[chat.messages.length - 1]?.text}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Área de chat */}
        <div className="flex-1 flex flex-col relative">
          {!showSidebar && (
            <button
              onClick={toggleSidebar}
              className="md:hidden absolute left-2 top-2 p-2 rounded-full bg-gray-200 dark:bg-gray-700 z-10"
            >
              <FiChevronLeft className="w-5 h-5" />
            </button>
          )}

          {currentChatId ? (
            <ChatContainer
              currentChat={
                demoChats.find((c) => c.id === currentChatId) || null
              }
              onSendMessage={handleSendMessage}
              onBack={handleBack}
              skin={skin}
              availableSkins={availableSkins}
              onChangeSkin={setSkin}
            />
          ) : (
            <div className="flex items-center justify-center h-full">
              <p className="text-gray-500 dark:text-gray-400">
                Selecciona un chat para comenzar
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default App;
