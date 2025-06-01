import { motion } from "framer-motion";
import { FiCheck, FiAlertCircle } from "react-icons/fi";
import type { MessageProps } from "./types";

const Message: React.FC<MessageProps> = ({
  message,
  isCurrentUser,
  theme,
  skin,
}) => {
  const statusIcons = {
    sent: <FiCheck className="w-3 h-3 text-gray-400" />,
    delivered: (
      <div className="flex">
        <FiCheck className="w-3 h-3 text-gray-400" />
        <FiCheck className="w-3 h-3 -ml-1 text-gray-400" />
      </div>
    ),
    read: (
      <div className="flex text-blue-500">
        <FiCheck className="w-3 h-3" />
        <FiCheck className="w-3 h-3 -ml-1" />
      </div>
    ),
    error: <FiAlertCircle className="w-3 h-3 text-red-500" />,
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2 }}
      className={`flex ${
        isCurrentUser ? "justify-end" : "justify-start"
      } mb-3 px-4`}
    >
      <div
        className={`max-w-xs md:max-w-md lg:max-w-lg rounded-lg px-4 py-2 relative ${
          isCurrentUser
            ? `${
                skin === "default"
                  ? "bg-blue-500 text-white"
                  : skin === "modern"
                  ? "bg-purple-600 text-white"
                  : "bg-green-600 text-white"
              }`
            : "bg-gray-100 dark:bg-gray-700 text-gray-800 dark:text-gray-200"
        }`}
      >
        <p className="text-sm">{message.text}</p>

        <div
          className={`flex items-center justify-end mt-1 space-x-1 text-xs ${
            isCurrentUser
              ? "text-blue-100"
              : "text-gray-500 dark:text-gray-400 "
          }`}
        >
          <span>
            {new Date(message.timestamp).toLocaleTimeString([], {
              hour: "2-digit",
              minute: "2-digit",
            })}
          </span>
          {isCurrentUser && (
            <span className="ml-1">{statusIcons[message.status]}</span>
          )}
        </div>

        {/*!isCurrentUser && (
          <div className="absolute -left-1 top-0 w-3 h-3 transform rotate-45 bg-gray-100 dark:bg-gray-700"></div>
        )*/}

        {/*isCurrentUser && (
          <div
            className={`absolute -right-1 top-0 w-3 h-3 transform rotate-45 ${
              skin === "default"
                ? "bg-blue-500"
                : skin === "modern"
                ? "bg-purple-600"
                : "bg-green-600"
            }`}
          ></div>
        )*/}
      </div>
    </motion.div>
  );
};

export default Message;
