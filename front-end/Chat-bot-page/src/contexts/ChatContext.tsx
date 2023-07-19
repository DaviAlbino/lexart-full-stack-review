import { createContext, useState } from 'react';

interface IChatContext {
  showLogin?: boolean | undefined;
  setShowLogin?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  showSolutions?: boolean | undefined;
  setShowSolutions?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setOptionMessage?: React.Dispatch<React.SetStateAction<string>> | undefined;
  setOptionLink?: React.Dispatch<React.SetStateAction<string>> | undefined;
  optionMessage?: string | undefined;
  optionLink?: string | undefined;
}

export const ChatContext = createContext<IChatContext>({
  showLogin: true,
  setShowLogin: () => {},
  setOptionLink: () => {},
  setOptionMessage: () => {},
  setShowSolutions: () => {},
  showSolutions: false,
  optionMessage: '',
  optionLink: '',
});

export function ChatProvider({ children }) {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [showSolutions, setShowSolutions] = useState<boolean>(false);
  const [optionLink, setOptionLink] = useState<string>('');
  const [optionMessage, setOptionMessage] = useState<string>('');

  return (
    <ChatContext.Provider
      value={ {
        showLogin,
        setShowLogin,
        setOptionLink,
        setOptionMessage,
        optionLink,
        optionMessage,
        showSolutions,
        setShowSolutions,
      } }
    >
      {children}
    </ChatContext.Provider>
  );
}
