export interface User {
  id: string;
  name: string;
  avatar?: string;
  online: boolean;
}

export interface Message {
  id: string | number;
  text: string;
  sender: string;
  status: 'sent' | 'delivered' | 'read' | 'error';
  timestamp: string;
}

export interface Chat {
  id: string;
  user: User;
  messages: Message[];
}

export type Theme = 'light' | 'dark';
export type Skin = 'default' | 'modern' | 'nature';

export interface DropdownItem {
  label: string;
  action: () => void;
  active?: boolean;
}

export interface AvatarProps {
  src?: string;
  alt: string;
  size?: 'sm' | 'md' | 'lg';
}

export interface DropdownProps {
  children: React.ReactNode;
  items: DropdownItem[];
}

export interface ChatContainerProps {
  currentChat: Chat | null;
  onSendMessage: (message: Message) => void;
  onBack: () => void;
  skin?: Skin;
  availableSkins?: Skin[];
  onChangeSkin?: (skin: Skin) => void;
}

export interface ChatHeaderProps {
  user?: User;
  onBack: () => void;
  theme: Theme;
  toggleTheme: () => void;
  availableSkins?: Skin[];
  onChangeSkin?: (skin: Skin) => void;
  currentSkin?: Skin;
}

export interface MessageProps {
  message: Message;
  isCurrentUser: boolean;
  theme: Theme;
  skin: Skin;
}

export interface MessagesListProps {
  messages: Message[];
  currentUser: string;
  theme: Theme;
  skin: Skin;
}

export interface MessageInputProps {
  onSend: (message: string) => void;
  theme: Theme;
  skin: Skin;
}

