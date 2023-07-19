import { createContext, useState } from 'react';
import IOptionProp from '../interfaces/IOptionProp';

interface IChatContext {
  showLogin?: boolean | undefined;
  setShowLogin?: React.Dispatch<React.SetStateAction<boolean>> | undefined;
  setOptionList?: React.Dispatch<React.SetStateAction<IOptionProp[]>>;
  optionList?: IOptionProp[];
}

export const ChatContext = createContext<IChatContext>({
  showLogin: true,
  setShowLogin: () => {},
  setOptionList: () => {},
  optionList: [{
    opId: 1,
    opLink: '',
    opMessage: '',
  }],
});

export function ChatProvider({ children }: any) {
  const [showLogin, setShowLogin] = useState<boolean>(true);
  const [optionList, setOptionList] = useState<IOptionProp[]>([]);

  return (
    <ChatContext.Provider
      value={ {
        showLogin,
        setShowLogin,
        optionList,
        setOptionList,
      } }
    >
      {children}
    </ChatContext.Provider>
  );
}
