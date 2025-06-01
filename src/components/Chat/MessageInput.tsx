import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiPaperclip, FiMic, FiSend, FiSmile } from "react-icons/fi";
import type { MessageInputProps } from "./types";

const MessageInput: React.FC<MessageInputProps> = ({ onSend, theme, skin }) => {
  const [message, setMessage] = useState("");
  const [isFocused, setIsFocused] = useState(false);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim()) {
      onSend(message);
      setMessage("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  useEffect(() => {
    if (isFocused) {
      inputRef.current?.focus();
    }
  }, [isFocused]);

  return (
    <div className="p-3 border-t border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
      <form onSubmit={handleSubmit} className="flex items-center space-x-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FiSmile className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </motion.button>

        <motion.button
          whileTap={{ scale: 0.9 }}
          type="button"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FiPaperclip className="w-5 h-5 text-gray-600 dark:text-gray-300" />
        </motion.button>

        <div className="flex-1 relative">
          <motion.div
            animate={{
              borderColor: isFocused
                ? skin === "default"
                  ? "#3b82f6"
                  : skin === "modern"
                  ? "#9333ea"
                  : "#16a34a"
                : theme === "dark"
                ? "#374151"
                : "#e5e7eb",
            }}
            className="border rounded-full overflow-hidden dark:border-gray-700"
          >
            <textarea
              ref={inputRef}
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              onKeyDown={handleKeyDown}
              onFocus={() => setIsFocused(true)}
              onBlur={() => setIsFocused(false)}
              placeholder="Escribe un mensaje..."
              rows={1}
              className="w-full py-2 px-4 bg-transparent focus:outline-none resize-none max-h-32 text-sm text-gray-900 dark:text-white"
            />
          </motion.div>
        </div>

        <AnimatePresence>
          {message.trim() ? (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileTap={{ scale: 0.9 }}
              type="submit"
              className={`p-2 rounded-full ${
                skin === "default"
                  ? "bg-blue-500 hover:bg-blue-600"
                  : skin === "modern"
                  ? "bg-purple-600 hover:bg-purple-700"
                  : "bg-green-600 hover:bg-green-700"
              } text-white`}
            >
              <FiSend className="w-5 h-5" />
            </motion.button>
          ) : (
            <motion.button
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              exit={{ scale: 0 }}
              whileTap={{ scale: 0.9 }}
              type="button"
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              <FiMic className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </motion.button>
          )}
        </AnimatePresence>
      </form>
    </div>
  );
};

export default MessageInput;
