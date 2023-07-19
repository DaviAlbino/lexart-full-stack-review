import { Box, Text } from '@chakra-ui/react';
import { useContext } from 'react';
import LoginBot from './LoginBot';
import LoanOptions from './LoanOptions';
import ISendMessage from '../interfaces/ISendMessage';
import { ChatContext } from '../contexts/ChatContext';
import LoanSolutions from './LoanSolutions';
// import MessageBot from './MessageBot';

interface ChatBotProps {
  messages: ISendMessage[]
  onSendMessage: (message: ISendMessage) => void
}

function Chatbot({ messages, onSendMessage }: ChatBotProps) {
  const { showLogin, optionLink, optionMessage, showSolutions } = useContext(ChatContext);
  const getCurrentDateTime = () => {
    const now = new Date();
    const formattedDate = `${now.getDate()}/${now.getMonth() + 1}/${now.getFullYear()}`;
    const formattedTime = `${now.getHours()}:${now.getMinutes()}`;

    return `${formattedDate} - ${formattedTime}`;
  };

  return (
    <Box maxWidth={ 400 } height={ 640 } overflow="auto">
      {messages.map((messageSent, index) => (
        <Box
          key={ index }
          textAlign={ messageSent.userId === 1 ? 'left' : 'right' }
          padding={ 5 }
          border="2px solid"
          borderRadius="5px"
          backgroundColor={ messageSent.userId === 1 ? 'green.100' : 'blue.100' }
          mb={ 2 }
        >
          <Text fontSize="sm" color="gray.500" mb={ 2 }>
            {getCurrentDateTime()}
          </Text>
          {messageSent.message}
          {messageSent.message === 'Hello user, welcome! Please Log in'
          && showLogin && <LoginBot
            username="negroalbino"
            password="123456"
            onSendMessage={ onSendMessage }
          />}
          {messageSent.message === 'Good morning user! Please Log in!'
          && showLogin && <LoginBot
            username="negroalbino"
            password="123456"
            onSendMessage={ onSendMessage }
          />}
          {messageSent.message === 'Ok user, but before we continue, Please Log in.'
          && showLogin && <LoginBot
            username="negroalbino"
            password="123456"
            onSendMessage={ onSendMessage }
          />}
          {messageSent.message === 'Great! This are the your loan options!'
          && <LoanOptions onSendMessage={ onSendMessage } />}
          {messageSent.message === 'Ok! Great Choice!'
          && <LoanSolutions optionLink={ optionLink } optionMessage={ optionMessage } />}
        </Box>
      ))}
    </Box>
  );
}

export default Chatbot;
