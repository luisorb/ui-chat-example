import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import type { DropdownProps, AvatarProps } from "./types";

export const Avatar: React.FC<AvatarProps> = ({ src, alt, size = "md" }) => {
  const sizes = {
    sm: "w-8 h-8",
    md: "w-10 h-10",
    lg: "w-12 h-12",
  };

  return (
    <div
      className={`${sizes[size]} rounded-full overflow-hidden bg-gray-200 dark:bg-gray-600`}
    >
      {src ? (
        <img src={src} alt={alt} className="w-full h-full object-cover" />
      ) : (
        <div className="w-full h-full flex items-center justify-center text-gray-600 dark:text-gray-300">
          {alt?.charAt(0)?.toUpperCase() || "U"}
        </div>
      )}
    </div>
  );
};

export const Dropdown: React.FC<DropdownProps> = ({ children, items }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative">
      <div onClick={() => setIsOpen(!isOpen)}>{children}</div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 10 }}
            transition={{ duration: 0.2 }}
            className="absolute right-0 mt-2 w-48 bg-white dark:bg-gray-800 rounded-md shadow-lg z-10 border dark:border-gray-700"
            onClick={() => setIsOpen(false)}
          >
            {items.map((item, index) => (
              <div
                key={index}
                onClick={item.action}
                className={`px-4 py-2 text-sm cursor-pointer ${
                  item.active
                    ? "bg-blue-500 text-white"
                    : "text-gray-700 dark:text-gray-200 hover:bg-gray-100 dark:hover:bg-gray-700"
                }`}
              >
                {item.label}
              </div>
            ))}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};
