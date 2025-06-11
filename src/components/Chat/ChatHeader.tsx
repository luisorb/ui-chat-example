import { motion } from "framer-motion";
import { FiChevronLeft, FiSun, FiMoon, FiMoreVertical } from "react-icons/fi";
import { Dropdown } from "./ui";
import type { ChatHeaderProps } from "./types";

const ChatHeader: React.FC<ChatHeaderProps> = ({
  user,
  onBack,
  theme,
  toggleTheme,
  availableSkins = [],
  onChangeSkin = () => {},
  currentSkin = "default",
}) => {
  return (
    <div className="flex items-center justify-between p-4 border-b border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800">
      <div className="flex items-center space-x-3">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={onBack}
          aria-label="Back"
          className="p-1 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          <FiChevronLeft className="w-5 h-5 text-gray-600 dark:text-white" />
        </motion.button>

        {user && (
          <>
            <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600">
              {user.avatar ? (
                <img
                  src={user.avatar}
                  alt={user.name}
                  className="w-full h-full object-cover"
                />
              ) : (
                <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-300">
                  {user.name.charAt(0).toUpperCase()}
                </div>
              )}
            </div>

            <div className="flex flex-col">
              <h2 className="font-semibold text-gray-800 dark:text-white">
                {user.name}
              </h2>
              <p className="text-xs text-gray-500 dark:text-gray-400">
                {user.online ? "En línea" : "Desconectado"}
              </p>
            </div>
          </>
        )}
      </div>

      <div className="flex items-center space-x-2">
        <motion.button
          whileTap={{ scale: 0.9 }}
          onClick={toggleTheme}
          aria-label="Mode"
          className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
        >
          {theme === "dark" ? (
            <FiSun className="w-5 h-5 text-yellow-300" />
          ) : (
            <FiMoon className="w-5 h-5 text-white" />
          )}
        </motion.button>

        {availableSkins.length > 0 && (
          <Dropdown
            items={availableSkins.map((skin) => ({
              label: skin,
              action: () => onChangeSkin(skin),
              active: currentSkin === skin,
            }))}
          >
            <motion.button
              whileTap={{ scale: 0.9 }}
              className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-700"
              aria-label="Theme"
            >
              <FiMoreVertical className="w-5 h-5 text-gray-600 dark:text-gray-300" />
            </motion.button>
          </Dropdown>
        )}
      </div>
    </div>
  );
};

export default ChatHeader;
