import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Text,
} from '@chakra-ui/react';
import { useState, ChangeEvent, KeyboardEvent } from 'react';

function InputMessage({ onSendMessage }: any) {
  const [message, setMessage] = useState<string>('');
  const [isTyping, setIsTyping] = useState<boolean>(false);
  const [isBotTyping, setIsBotTyping] = useState<boolean>(false);

  const handleMessage = ({ target }: ChangeEvent<HTMLInputElement>) => {
    setMessage(target.value);
    setIsTyping(true);
  };

  const handleSend = () => {
    onSendMessage(message);
    handleMessageResponse(message);
    setMessage('');
    setIsTyping(false);
  };

  const handlePressEnter = ({ key }: KeyboardEvent<HTMLInputElement>) => {
    if (key === 'Enter') {
      handleSend();
    }
  };

  const handleMessageResponse = (messageBot: string) => {
    const lowercaseMessageBot = messageBot.toLowerCase();
    const response1 = 'Hello user, welcome! Please Log in';
    const response2 = 'Goodbye user, You can check this conversation on this link.';
    const response3 = 'Ok user, but before we continue, Please Log in.';
    const response4 = 'Good morning user! Please Log in.';

    if (lowercaseMessageBot.includes('hello')) {
      setIsBotTyping(true);
      setTimeout(() => {
        onSendMessage(response1);
      }, 3000);
      setIsBotTyping(false);
    } else if (lowercaseMessageBot.includes('goodbye')) {
      setIsBotTyping(true);
      setTimeout(() => {
        onSendMessage(response2);
      }, 3000);
      setIsBotTyping(false);
    } else if (lowercaseMessageBot.includes('want')) {
      setIsBotTyping(true);
      setTimeout(() => {
        onSendMessage(response3);
      }, 3000);
      setIsBotTyping(false);
    } else if (lowercaseMessageBot.includes('good')) {
      setIsBotTyping(true);
      setTimeout(() => {
        onSendMessage(response4);
      }, 3000);
      setIsBotTyping(false);
    }
  };
  return (
    <Box>
      <FormControl>
        { isTyping && <Text>typing...</Text>}
        { isBotTyping && <Text>bot is typing...</Text> }
        <Input
          value={ message }
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
