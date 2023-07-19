import {
  Box,
  FormControl,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { useState, ChangeEvent, KeyboardEvent, useContext } from 'react';
import ISendMessage from '../interfaces/ISendMessage';
import { ChatContext } from '../contexts/ChatContext';

interface IMessageBot {
  onSendMessage: (messageSent: ISendMessage) => void
}

function InputMessage({ onSendMessage }: IMessageBot) {
  const [message, setMessage] = useState<ISendMessage>({ userId: 1, message: '' });
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const { setShowLogin } = useContext(ChatContext);

  const handleMessage = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessage({ userId: 1, message: target.value });
    setIsTyping(true);
  };

  const handleSend = () => {
    onSendMessage(message);
    handleMessageResponse(message.message);
    setMessage({ userId: 1, message: '' });
    setIsTyping(false);
  };

  const handlePressEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      handleSend();
    }
  };

  const handleMessageResponse = (messageBot: string) => {
    if (setShowLogin) {
      const lowercaseMessageBot = messageBot.toLowerCase();
      const response1 = { userId: 2, message: 'Hello user, welcome! Please Log in' };
      const response2 = {
        userId: 2,
        message: 'Goodbye user, You can check this conversation on this link.',
      };
      const response3 = {
        userId: 2,
        message: 'Ok user, but before we continue, Please Log in.',
      };
      const response4 = {
        userId: 2,
        message: 'Good morning user! Please Log in!',
      };
      const response5 = {
        userId: 2,
        message: 'Great! This are your loan options!',
      };
      if (lowercaseMessageBot.includes('hello')) {
        setTimeout(() => {
          setShowLogin(true);
          onSendMessage(response1);
        }, 3000);
      } else if (lowercaseMessageBot.includes('goodbye')) {
        setTimeout(() => {
          onSendMessage(response2);
          setShowLogin(false);
        }, 3000);
      } else if (lowercaseMessageBot.includes('want')) {
        setTimeout(() => {
          setShowLogin(true);
          onSendMessage(response3);
        }, 3000);
      } else if (lowercaseMessageBot.includes('good')) {
        setTimeout(() => {
          setShowLogin(true);
          onSendMessage(response4);
        }, 3000);
      } else if (lowercaseMessageBot.includes('loan')) {
        setTimeout(() => {
          onSendMessage(response5);
        }, 3000);
      }
    }
  };
  return (
    <Box>
      <FormControl>
        { isTyping && <Text>typing...</Text>}
        <Input
          value={ message.message }
          onChange={ handleMessage }
          placeholder="type your message here"
          onKeyDown={ handlePressEnter }
        />
        <Button
          mt={ 4 }
          colorScheme="teal"
          type="button"
          backgroundColor="blue.100"
          onClick={ handleSend }
        >
          Send
        </Button>
      </FormControl>
    </Box>
  );
}

export default InputMessage;
